export const activeQuests = [
  {
    id: "quest-briefing",
    title: "Briefing Check",
    description: "Create an integrity avatar and enter the mission room.",
    reward: "Profile unlocked",
  },
  {
    id: "quest-red-flags",
    title: "Red Flag Hunt",
    description: "Spot hidden risk signals across 10 corporate scenarios.",
    reward: "+100 integrity XP",
  },
  {
    id: "quest-leaderboard",
    title: "Trusted Circle",
    description: "Save your score and climb the local leaderboard.",
    reward: "Leaderboard rank",
  },
];

export const getBadgesForResult = (percentage, answers) => {
  const correctCategories = new Set(
    answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer.question.category),
  );

  const badges = [];

  if (percentage >= 90) {
    badges.push("Master Decision Maker");
  } else if (percentage >= 75) {
    badges.push("Integrity Champion");
  } else if (percentage >= 60) {
    badges.push("Risk Spotter");
  } else {
    badges.push("Refresher Started");
  }

  if (correctCategories.has("Procurement Integrity")) {
    badges.push("Tender Guardian");
  }

  if (correctCategories.has("Whistleblowing")) {
    badges.push("Speak-Up Ally");
  }

  if (correctCategories.has("False Claims / Payment Risk")) {
    badges.push("Evidence Checker");
  }

  return badges.slice(0, 4);
};
