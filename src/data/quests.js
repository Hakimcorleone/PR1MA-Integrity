export const activeQuests = [
  {
    id: "quest-briefing",
    title: "Avatar Briefing",
    description: "Create your agent identity before entering the Integrity District.",
    reward: "Profile unlocked",
  },
  {
    id: "quest-red-flags",
    title: "District Patrol",
    description: "Walk between hotspots and investigate 10 corporate risk encounters.",
    reward: "+100 integrity XP",
  },
  {
    id: "quest-leaderboard",
    title: "Hall of Trust",
    description: "Complete the adventure and save your agent rank locally.",
    reward: "Badge rank",
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
