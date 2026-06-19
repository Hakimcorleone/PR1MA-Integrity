import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Gauge,
  Landmark,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import AvatarBadge from "./AvatarBadge.jsx";

const statusStyle = {
  Correct: {
    label: "text-success",
    panel: "border-emerald-200 bg-emerald-50",
    icon: "bg-emerald-100 text-success",
  },
  Risky: {
    label: "text-risk",
    panel: "border-orange-200 bg-orange-50",
    icon: "bg-orange-100 text-risk",
  },
  Wrong: {
    label: "text-red-700",
    panel: "border-red-200 bg-red-50",
    icon: "bg-red-100 text-red-700",
  },
};

const optionClass = (option, selectedOptionId, bestOptionId) => {
  const answered = Boolean(selectedOptionId);
  const isSelected = selectedOptionId === option.id;
  const isBest = bestOptionId === option.id;

  if (!answered) {
    return "border-slate-200 bg-white text-slate-800 hover:border-amberAccent hover:bg-amber-50";
  }

  if (isSelected && option.feedback === "Correct") {
    return "border-success bg-emerald-50 text-emerald-950";
  }

  if (isSelected && option.feedback === "Risky") {
    return "border-risk bg-orange-50 text-orange-950";
  }

  if (isSelected) {
    return "border-red-300 bg-red-50 text-red-950";
  }

  if (isBest) {
    return "border-emerald-200 bg-emerald-50/70 text-emerald-950";
  }

  return "border-slate-200 bg-slate-50 text-slate-500";
};

const AdventureMap = ({
  participant,
  question,
  questionNumber,
  totalQuestions,
  selectedOptionId,
  currentEarned,
  onAnswer,
  onNext,
}) => {
  const selectedOption = question.options.find(
    (option) => option.id === selectedOptionId,
  );
  const bestOption = question.options.find((option) => option.points === 10);
  const answered = Boolean(selectedOption);
  const progress = Math.round((questionNumber / totalQuestions) * 100);
  const projectedPoints = currentEarned + (selectedOption?.points || 0);
  const projectedScore = Math.round((projectedPoints / (totalQuestions * 10)) * 100);
  const feedback = selectedOption
    ? statusStyle[selectedOption.feedback]
    : statusStyle.Correct;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
            Integrity Mission Room
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-normal sm:text-3xl">
            Case {questionNumber}: {question.theme}
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center sm:min-w-[390px]">
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Progress
            </p>
            <p className="mt-1 text-lg font-bold">
              {questionNumber}/{totalQuestions}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Score
            </p>
            <p className="mt-1 text-lg font-bold">{projectedScore}/100</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Pillar
            </p>
            <p className="mt-1 truncate text-sm font-bold">
              {question.subScore}
            </p>
          </div>
        </div>
      </header>

      <section className="grid flex-1 gap-5 py-6 lg:grid-cols-[0.86fr_1.14fr]">
        <aside className="rounded-lg border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur sm:p-6">
          <div className="rounded-lg bg-white p-5 text-navy-950">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Mission Context
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-normal">
                  {question.location}
                </h2>
              </div>
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-navy-900 text-amber-200">
                <Landmark className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-amberAccent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-5 grid gap-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Mission Agent
                </p>
                <div className="mt-3">
                  <AvatarBadge
                    avatar={participant.avatar}
                    name={participant.name}
                    size="lg"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-600">
                  {participant.name} | {participant.department}
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-risk">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-bold">Red Flag Lens</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Look for pressure, personal benefit, weak evidence, unequal
                  information, or attempts to bypass approved controls.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-navy-950">
                  <Gauge className="h-4 w-4 text-amber-700" aria-hidden="true" />
                  <p className="text-sm font-bold">Decision Weight</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Thirty cases are scored as a final percentage out of 100.
                  Best decisions score 10, acceptable controls 6, risky shortcuts
                  3, and wrong decisions 0.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <section className="rounded-lg bg-white p-5 text-navy-950 shadow-soft sm:p-6">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">
                <ClipboardList className="h-4 w-4" aria-hidden="true" />
                Decision Scenario
              </div>
              <h2 className="mt-4 text-2xl font-semibold leading-9 tracking-normal text-navy-950">
                {question.question}
              </h2>
            </div>
            <span className="w-fit rounded-lg bg-navy-900 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
              {question.subScore}
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {question.options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                disabled={answered}
                onClick={() => onAnswer(option.id)}
                className={`flex w-full items-start gap-4 rounded-lg border px-4 py-4 text-left transition ${optionClass(
                  option,
                  selectedOptionId,
                  bestOption?.id,
                )}`}
              >
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-navy-950">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-sm font-semibold leading-6">
                  {option.text}
                </span>
                {answered && selectedOptionId === option.id ? (
                  option.feedback === "Correct" ? (
                    <CheckCircle2
                      className="mt-1 h-5 w-5 flex-none text-success"
                      aria-hidden="true"
                    />
                  ) : option.feedback === "Risky" ? (
                    <ShieldAlert
                      className="mt-1 h-5 w-5 flex-none text-risk"
                      aria-hidden="true"
                    />
                  ) : (
                    <XCircle
                      className="mt-1 h-5 w-5 flex-none text-red-700"
                      aria-hidden="true"
                    />
                  )
                ) : null}
              </button>
            ))}
          </div>

          {answered ? (
            <div className={`mt-6 rounded-lg border p-4 sm:p-5 ${feedback.panel}`}>
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-lg ${feedback.icon}`}
                >
                  {selectedOption.feedback === "Correct" ? (
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  ) : selectedOption.feedback === "Risky" ? (
                    <ShieldAlert className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <XCircle className="h-6 w-6" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={`text-lg font-bold ${feedback.label}`}>
                      {selectedOption.feedback}
                    </p>
                    <span className="rounded-lg bg-white px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy-900">
                      {selectedOption.quality} | +{selectedOption.points}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {selectedOption.explanation}
                  </p>
                </div>
              </div>

              {selectedOption.points < 10 && bestOption ? (
                <div className="mt-4 rounded-lg bg-white p-4">
                  <div className="flex items-center gap-2 text-success">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    <p className="text-sm font-bold">Best decision</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {bestOption.text}
                  </p>
                </div>
              ) : null}

              <button
                type="button"
                onClick={onNext}
                title="Continue mission"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 sm:w-auto"
              >
                {questionNumber === totalQuestions ? "View Result" : "Next Scenario"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </section>
      </section>
    </main>
  );
};

export default AdventureMap;
