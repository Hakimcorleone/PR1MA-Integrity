import { useEffect, useMemo, useState } from "react";
import AdminDashboard from "./components/AdminDashboard.jsx";
import MissionScreen from "./components/AdventureMap.jsx";
import ParticipantDetails from "./components/PlayerSetup.jsx";
import ResultScreen from "./components/ResultScreen.jsx";
import StartScreen from "./components/StartScreen.jsx";
import { getMissionQuestions } from "./data/questions.js";
import {
  calculateScore,
  calculateSubScores,
  getBadgeByScore,
  getRecommendation,
} from "./utils/scoring.js";
import { saveMissionResult } from "./utils/storage.js";

const initialMissionState = {
  participant: null,
  questions: getMissionQuestions(),
  currentQuestionIndex: 0,
  answers: [],
  selectedOptionId: "",
  result: null,
};

const App = () => {
  const [path, setPath] = useState(() => window.location.pathname);
  const [screen, setScreen] = useState("start");
  const [mission, setMission] = useState(initialMissionState);
  const [resultSaved, setResultSaved] = useState(false);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
  };

  const currentQuestion = useMemo(() => {
    return mission.questions[mission.currentQuestionIndex];
  }, [mission.currentQuestionIndex, mission.questions]);

  const currentEarned = useMemo(() => {
    return mission.answers.reduce((sum, answer) => sum + answer.points, 0);
  }, [mission.answers]);

  const startSetup = () => {
    setMission({
      ...initialMissionState,
      questions: getMissionQuestions(),
    });
    setResultSaved(false);
    setScreen("setup");
  };

  const beginMission = (participant) => {
    setMission({
      ...initialMissionState,
      participant,
      questions: getMissionQuestions(),
    });
    setResultSaved(false);
    setScreen("mission");
  };

  const handleAnswer = (selectedOptionId) => {
    if (mission.selectedOptionId || !currentQuestion) {
      return;
    }

    setMission((current) => ({
      ...current,
      selectedOptionId,
    }));
  };

  const handleNextQuestion = () => {
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === mission.selectedOptionId,
    );

    if (!selectedOption) {
      return;
    }

    const answer = {
      questionId: currentQuestion.id,
      theme: currentQuestion.theme,
      question: currentQuestion.question,
      subScore: currentQuestion.subScore,
      selectedOptionId: selectedOption.id,
      selectedOption: selectedOption.text,
      points: selectedOption.points,
      feedback: selectedOption.feedback,
      quality: selectedOption.quality,
    };
    const answers = [...mission.answers, answer];
    const isFinalQuestion =
      mission.currentQuestionIndex === mission.questions.length - 1;

    if (!isFinalQuestion) {
      setMission((current) => ({
        ...current,
        answers,
        selectedOptionId: "",
        currentQuestionIndex: current.currentQuestionIndex + 1,
      }));
      return;
    }

    const score = calculateScore(answers);
    const subScores = calculateSubScores(answers);
    const badge = getBadgeByScore(score.percentage);
    const recommendation = getRecommendation(subScores);
    const result = {
      participant: mission.participant,
      score,
      badge,
      subScores,
      recommendation,
      answers,
    };

    setMission((current) => ({
      ...current,
      answers,
      result,
    }));
    setResultSaved(false);
    setScreen("result");
  };

  const handleSaveResult = () => {
    if (!mission.result || resultSaved) {
      return;
    }

    saveMissionResult(mission.result);
    setResultSaved(true);
  };

  if (path === "/admin") {
    return (
      <div className="app-shell">
        <AdminDashboard onBack={() => navigate("/")} />
      </div>
    );
  }

  return (
    <div className="app-shell">
      {screen === "start" ? (
        <StartScreen onStart={startSetup} onAdmin={() => navigate("/admin")} />
      ) : null}

      {screen === "setup" ? (
        <ParticipantDetails
          onBack={() => setScreen("start")}
          onSubmit={beginMission}
        />
      ) : null}

      {screen === "mission" && currentQuestion ? (
        <MissionScreen
          participant={mission.participant}
          question={currentQuestion}
          questionNumber={mission.currentQuestionIndex + 1}
          totalQuestions={mission.questions.length}
          selectedOptionId={mission.selectedOptionId}
          currentEarned={currentEarned}
          onAnswer={handleAnswer}
          onNext={handleNextQuestion}
        />
      ) : null}

      {screen === "result" && mission.result ? (
        <ResultScreen
          result={mission.result}
          saved={resultSaved}
          onRestart={startSetup}
          onSave={handleSaveResult}
          onAdmin={() => navigate("/admin")}
        />
      ) : null}
    </div>
  );
};

export default App;
