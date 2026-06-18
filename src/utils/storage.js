const LEADERBOARD_KEY = "rightCallIntegrityLeaderboard";
const MAX_LEADERBOARD_ENTRIES = 50;

export const getLeaderboard = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(LEADERBOARD_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn("Unable to read leaderboard data", error);
    return [];
  }
};

export const saveResultToLeaderboard = (result) => {
  if (typeof window === "undefined") {
    return [];
  }

  const entry = {
    id:
      window.crypto && window.crypto.randomUUID
        ? window.crypto.randomUUID()
        : `${Date.now()}`,
    completedAt: new Date().toISOString(),
    ...result,
  };

  const leaderboard = [...getLeaderboard(), entry]
    .sort((a, b) => {
      if (b.percentage !== a.percentage) {
        return b.percentage - a.percentage;
      }

      if (b.earned !== a.earned) {
        return b.earned - a.earned;
      }

      return new Date(b.completedAt) - new Date(a.completedAt);
    })
    .slice(0, MAX_LEADERBOARD_ENTRIES);

  window.localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
  return leaderboard;
};

export const clearLeaderboard = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(LEADERBOARD_KEY);
  }
};
