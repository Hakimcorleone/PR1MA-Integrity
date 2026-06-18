import { subScoreLabels } from "../data/questions.js";

export const calculateScore = (answers) => {
  const earned = answers.reduce((sum, answer) => sum + answer.points, 0);
  const totalPossible = answers.length * 10;
  const percentage =
    totalPossible === 0 ? 0 : Math.round((earned / totalPossible) * 100);

  return {
    earned,
    totalPossible,
    percentage,
  };
};

export const calculateSubScores = (answers) => {
  const grouped = subScoreLabels.reduce((acc, label) => {
    acc[label] = {
      category: label,
      earned: 0,
      totalPossible: 0,
      percentage: 0,
    };
    return acc;
  }, {});

  answers.forEach((answer) => {
    if (!grouped[answer.subScore]) {
      grouped[answer.subScore] = {
        category: answer.subScore,
        earned: 0,
        totalPossible: 0,
        percentage: 0,
      };
    }

    grouped[answer.subScore].earned += answer.points;
    grouped[answer.subScore].totalPossible += 10;
  });

  return Object.values(grouped).map((item) => ({
    ...item,
    percentage:
      item.totalPossible === 0
        ? 0
        : Math.round((item.earned / item.totalPossible) * 100),
  }));
};

export const getBadgeByScore = (score) => {
  if (score >= 90) {
    return "Integrity Guardian";
  }

  if (score >= 75) {
    return "Risk Spotter";
  }

  if (score >= 60) {
    return "Policy Learner";
  }

  return "Needs Refresher";
};

export const getWeakestSubScore = (subScores) => {
  return [...subScores].sort((a, b) => {
    if (a.percentage !== b.percentage) {
      return a.percentage - b.percentage;
    }

    return a.earned - b.earned;
  })[0];
};

const recommendationBySubScore = {
  "Integrity Judgment":
    "Focus on decision discipline under pressure: document the basis for decisions, challenge unsupported shortcuts, and use Integrity guidance when influence is unclear.",
  "Conflict Radar":
    "Refresh conflict, gifts, hospitality, and confidential information rules. Pay close attention to perception risk, not only direct personal gain.",
  "Escalation Courage":
    "Practise escalation routes for Whistleblowing, misconduct reporting, and superior pressure scenarios so concerns move through protected channels early.",
  "Policy Awareness":
    "Review ABMS, payment verification, due diligence, and site certification controls. Evidence and approval records should be complete before action is taken.",
};

export const getRecommendation = (subScores) => {
  const weakest = getWeakestSubScore(subScores);

  if (!weakest) {
    return "Complete the mission to receive a targeted integrity recommendation.";
  }

  return recommendationBySubScore[weakest.category];
};
