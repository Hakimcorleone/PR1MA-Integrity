export const calculateScore = (answers) => {
  const totalPossible = answers.reduce(
    (sum, answer) => sum + (answer.question.points || 10),
    0,
  );
  const earned = answers.reduce(
    (sum, answer) => sum + (answer.isCorrect ? answer.question.points || 10 : 0),
    0,
  );
  const percentage =
    totalPossible === 0 ? 0 : Math.round((earned / totalPossible) * 100);

  return {
    earned,
    totalPossible,
    percentage,
  };
};

export const getIntegrityProfile = (percentage) => {
  if (percentage >= 90) {
    return {
      title: "Trusted Decision Maker",
      tone: "Excellent judgement under pressure",
      description:
        "You consistently recognise integrity risks and choose transparent, policy-aligned actions.",
    };
  }

  if (percentage >= 75) {
    return {
      title: "Integrity Champion",
      tone: "Strong integrity instincts",
      description:
        "You make sound decisions in most scenarios and show good awareness of reporting and declaration expectations.",
    };
  }

  if (percentage >= 60) {
    return {
      title: "Developing Risk Spotter",
      tone: "Good foundation with room to sharpen",
      description:
        "You identify many common risks, but some higher-pressure situations may need closer policy checks.",
    };
  }

  return {
    title: "Needs Integrity Refresher",
    tone: "Refresh the essentials",
    description:
      "Review core policies and speak with Compliance or your supervisor before acting in unclear situations.",
  };
};

export const calculateCategoryPerformance = (answers) => {
  const grouped = answers.reduce((acc, answer) => {
    const category = answer.question.category;

    if (!acc[category]) {
      acc[category] = {
        category,
        correct: 0,
        total: 0,
        percentage: 0,
      };
    }

    acc[category].total += 1;
    if (answer.isCorrect) {
      acc[category].correct += 1;
    }

    return acc;
  }, {});

  return Object.values(grouped)
    .map((item) => ({
      ...item,
      percentage: Math.round((item.correct / item.total) * 100),
    }))
    .sort((a, b) => a.category.localeCompare(b.category));
};

export const getImprovementSuggestion = (percentage, categoryPerformance) => {
  const weakestCategory = [...categoryPerformance].sort(
    (a, b) => a.percentage - b.percentage,
  )[0];

  if (!weakestCategory) {
    return "Complete a challenge to receive a targeted improvement suggestion.";
  }

  if (percentage >= 90) {
    return `Keep reinforcing best practice by mentoring others on ${weakestCategory.category} scenarios and documenting decisions clearly.`;
  }

  if (percentage >= 75) {
    return `Review recent ${weakestCategory.category} examples and practise spotting subtle red flags before decisions are made.`;
  }

  if (percentage >= 60) {
    return `Focus your refresher on ${weakestCategory.category}, especially when there is pressure to act quickly or informally.`;
  }

  return `Start with the basics in ${weakestCategory.category}: pause, check policy, declare concerns, and use approved escalation channels.`;
};
