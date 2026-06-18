import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  XCircle,
} from "lucide-react";

const optionClass = (option, selectedAnswer, correctAnswer) => {
  const answered = Boolean(selectedAnswer);
  const isSelected = selectedAnswer === option;
  const isCorrect = correctAnswer === option;

  if (!answered) {
    return "border-slate-200 bg-white text-slate-800 hover:border-amberAccent hover:bg-amber-50";
  }

  if (isCorrect) {
    return "border-success bg-emerald-50 text-emerald-950";
  }

  if (isSelected && !isCorrect) {
    return "border-risk bg-orange-50 text-orange-950";
  }

  return "border-slate-200 bg-slate-50 text-slate-500";
};

const QuizCard = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
}) => {
  const answered = Boolean(selectedAnswer);
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-6 sm:px-6">
      <section className="rounded-lg bg-white p-5 shadow-soft sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              Question {questionNumber} of {totalQuestions}
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-normal text-navy-950 sm:text-3xl">
              {question.question}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <span className="rounded-lg bg-navy-900 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
              {question.category}
            </span>
            <span className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
              {question.difficulty}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {question.options.map((option) => (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => onAnswer(option)}
              className={`flex w-full items-start justify-between gap-4 rounded-lg border px-4 py-4 text-left text-sm font-semibold leading-6 transition ${optionClass(
                option,
                selectedAnswer,
                question.correctAnswer,
              )}`}
            >
              <span>{option}</span>
              {answered && option === question.correctAnswer ? (
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-none text-success"
                  aria-hidden="true"
                />
              ) : null}
              {answered &&
              option === selectedAnswer &&
              option !== question.correctAnswer ? (
                <XCircle
                  className="mt-0.5 h-5 w-5 flex-none text-risk"
                  aria-hidden="true"
                />
              ) : null}
            </button>
          ))}
        </div>

        {answered ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div
                className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${
                  isCorrect ? "bg-emerald-100 text-success" : "bg-orange-100 text-risk"
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                )}
              </div>
              <div>
                <p
                  className={`text-base font-bold ${
                    isCorrect ? "text-success" : "text-risk"
                  }`}
                >
                  {isCorrect ? "Correct call" : "Risky call"}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Correct answer:{" "}
                  <span className="font-semibold text-navy-950">
                    {question.correctAnswer}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <p className="text-sm font-bold text-navy-950">Explanation</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {question.explanation}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="text-sm font-bold text-navy-950">Why It Matters</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {question.whyItMatters}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-risk">
                  <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  <p className="text-sm font-bold">Red Flag</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {question.redFlag}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onNext}
              title="Go to next question"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 sm:w-auto"
            >
              {questionNumber === totalQuestions ? "View Results" : "Next Question"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default QuizCard;
