import { useMemo, useState } from "react";
import AdventureMap from "./components/AdventureMap.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import PlayerSetup from "./components/PlayerSetup.jsx";
import ResultScreen from "./components/ResultScreen.jsx";
import StartScreen from "./components/StartScreen.jsx";
import { getRandomQuestions } from "./data/questions.js";
import { getBadgesForResult } from "./data/quests.js";
import {
  calculateCategoryPerformance,
  calculateScore,
  getImprovementSuggestion,
  getIntegrityProfile,
} from "./utils/scoring.js";
import {
  clearLeaderboard,
  getLeaderboard,
  saveResultToLeaderboard,
} from "./utils/storage.js";

const initialGameState = {
  player: null,
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  selectedAnswer: "",
  score: null,
  profile: null,
  categoryPerformance: [],
  suggestion: "",
  badges: [],
};

const App = () => {
  const [screen, setScreen] = useState("start");
  const [game, setGame] = useState(initialGameState);
  const [leaderboard, setLeaderboard] = useState(() => getLeaderboard());

  const currentQuestion = useMemo(() => {
    return game.questions[game.currentQuestionIndex];
  }, [game.currentQuestionIndex, game.questions]);

  const correctCount = useMemo(() => {
    return game.answers.filter((answer) => answer.isCorrect).length;
  }, [game.answers]);

  const startSetup = () => {
    setGame(initialGameState);
    setScreen("setup");
  };

  const beginQuiz = (player) => {
    setGame({
      ...initialGameState,
      player,
      questions: getRandomQuestions(10),
    });
    setScreen("adventure");
  };

  const handleAnswer = (selectedAnswer) => {
    if (game.selectedAnswer || !currentQuestion) {
      return;
    }

    setGame((current) => ({
      ...current,
      selectedAnswer,
    }));
  };

  const handleNextQuestion = () => {
    const answer = {
      question: currentQuestion,
      selectedAnswer: game.selectedAnswer,
      isCorrect: game.selectedAnswer === currentQuestion.correctAnswer,
    };

    const answers = [...game.answers, answer];
    const isFinalQuestion = game.currentQuestionIndex === game.questions.length - 1;

    if (!isFinalQuestion) {
      setGame((current) => ({
        ...current,
        answers,
        selectedAnswer: "",
        currentQuestionIndex: current.currentQuestionIndex + 1,
      }));
      return;
    }

    const score = calculateScore(answers);
    const profile = getIntegrityProfile(score.percentage);
    const categoryPerformance = calculateCategoryPerformance(answers);
    const suggestion = getImprovementSuggestion(
      score.percentage,
      categoryPerformance,
    );
    const badges = getBadgesForResult(score.percentage, answers);

    const updatedLeaderboard = saveResultToLeaderboard({
      name: game.player.name,
      department: game.player.department,
      division: game.player.division,
      role: game.player.role,
      outlookEmail: game.player.outlookEmail,
      avatar: game.player.avatar,
      earned: score.earned,
      totalPossible: score.totalPossible,
      percentage: score.percentage,
      profileTitle: profile.title,
      categoryPerformance,
      badges,
    });

    setLeaderboard(updatedLeaderboard);
    setGame((current) => ({
      ...current,
      answers,
      score,
      profile,
      categoryPerformance,
      suggestion,
      badges,
    }));
    setScreen("result");
  };

  const showLeaderboard = () => {
    setLeaderboard(getLeaderboard());
    setScreen("leaderboard");
  };

  const handleClearLeaderboard = () => {
    clearLeaderboard();
    setLeaderboard([]);
  };

  return (
    <div className="app-shell">
      {screen === "start" ? (
        <StartScreen onStart={startSetup} onShowLeaderboard={showLeaderboard} />
      ) : null}

      {screen === "setup" ? (
        <PlayerSetup onBack={() => setScreen("start")} onSubmit={beginQuiz} />
      ) : null}

      {screen === "adventure" && currentQuestion ? (
        <AdventureMap
          player={game.player}
          correctCount={correctCount}
          question={currentQuestion}
          questionNumber={game.currentQuestionIndex + 1}
          totalQuestions={game.questions.length}
          selectedAnswer={game.selectedAnswer}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
        />
      ) : null}

      {screen === "result" && game.score ? (
        <ResultScreen
          player={game.player}
          score={game.score}
          profile={game.profile}
          categoryPerformance={game.categoryPerformance}
          suggestion={game.suggestion}
          badges={game.badges}
          onRetake={startSetup}
          onLeaderboard={showLeaderboard}
        />
      ) : null}

      {screen === "leaderboard" ? (
        <Leaderboard
          entries={leaderboard}
          onBack={() => setScreen(game.score ? "result" : "start")}
          onRetake={startSetup}
          onClear={handleClearLeaderboard}
        />
      ) : null}
    </div>
  );
};

export default App;
