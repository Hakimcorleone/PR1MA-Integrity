import {
  BarChart3,
  ClipboardCheck,
  Download,
  RotateCcw,
  Save,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import AvatarBadge from "./AvatarBadge.jsx";

const meterColor = (score) => {
  if (score >= 90) {
    return "#168a5b";
  }

  if (score >= 75) {
    return "#d7a12b";
  }

  if (score >= 60) {
    return "#c7511f";
  }

  return "#b91c1c";
};

const ResultScreen = ({
  result,
  saved,
  onRestart,
  onSave,
  onAdmin,
}) => {
  const { participant, score, badge, subScores, recommendation } = result;
  const weakest = [...subScores].sort((a, b) => a.percentage - b.percentage)[0];
  const color = meterColor(score.percentage);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-6 sm:px-6">
      <section className="overflow-hidden rounded-lg bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="bg-navy-900 p-5 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Mission Complete
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal">
              Integrity assessment result
            </h1>

            <div className="mt-8 flex justify-center">
              <div
                className="flex h-56 w-56 items-center justify-center rounded-full p-4"
                style={{
                  background: `conic-gradient(${color} ${score.percentage}%, rgba(255,255,255,0.12) 0)`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-navy-950 text-center">
                  <p className="text-5xl font-bold tracking-normal">
                    {score.percentage}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    out of 100
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-amberAccent text-navy-950">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                    Badge
                  </p>
                  <p className="mt-1 text-2xl font-bold">{badge}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Participant
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-normal text-navy-950">
                  {participant.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {participant.department}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {participant.email}
                </p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3 text-navy-950">
                <AvatarBadge
                  avatar={participant.avatar}
                  name={participant.name}
                  size="lg"
                />
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 flex-none text-amber-700" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-amber-950">
                    Recommendation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-amber-950">
                    {recommendation}
                  </p>
                  {weakest ? (
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-800">
                      Weakest category: {weakest.category}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-navy-950">
                <BarChart3 className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-xl font-bold tracking-normal">
                  Sub-score breakdown
                </h3>
              </div>

              <div className="mt-4 grid gap-3">
                {subScores.map((item) => (
                  <div
                    key={item.category}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-bold text-navy-950">
                        {item.category}
                      </p>
                      <p className="text-sm font-semibold text-slate-600">
                        {item.earned}/{item.totalPossible}
                      </p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${
                          item.percentage >= 75
                            ? "bg-success"
                            : item.percentage >= 60
                              ? "bg-amberAccent"
                              : "bg-risk"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-5 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onRestart}
              title="Restart mission"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Restart Mission
            </button>
            <button
              type="button"
              onClick={onSave}
              disabled={saved}
              title="Save result locally"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-amberAccent hover:bg-amber-50 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
            >
              {saved ? (
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Save className="h-4 w-4" aria-hidden="true" />
              )}
              {saved ? "Result Saved" : "Save Result"}
            </button>
            <button
              type="button"
              onClick={onAdmin}
              title="Open admin dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-amberAccent hover:bg-amber-50"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Admin Dashboard
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResultScreen;
