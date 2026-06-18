const RESULTS_KEY = "pr1maIntegrityMissionResults";

export const getSavedResults = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(RESULTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn("Unable to read mission results", error);
    return [];
  }
};

export const saveMissionResult = (result) => {
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

  const results = [entry, ...getSavedResults()];
  window.localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
  return results;
};

export const clearSavedResults = () => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(RESULTS_KEY);
  }
};
