import { ArrowRight, ClipboardCheck, Trophy } from "lucide-react";

const StartScreen = ({ onStart, onShowLeaderboard }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
            Corporate Integrity Assessment
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-normal sm:text-3xl">
            The Right Call
          </h1>
        </div>
        <button
          type="button"
          onClick={onShowLeaderboard}
          title="Open leaderboard"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:border-amber-200 hover:text-amber-100"
        >
          <Trophy className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Leaderboard</span>
        </button>
      </header>

      <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 bg-amber-200/10 px-3 py-2 text-sm font-semibold text-amber-100">
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            Phase 1 MVP
          </div>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            Integrity Challenge
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Test practical judgement across bribery, gifts, conflicts,
            whistleblowing, procurement, claims, ABMS awareness, and everyday
            ethical choices.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStart}
              title="Start challenge"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberAccent px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:bg-amber-300"
            >
              Start Challenge
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onShowLeaderboard}
              title="View saved scores"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <Trophy className="h-4 w-4" aria-hidden="true" />
              View Leaderboard
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-white/12 bg-white p-5 text-navy-950 shadow-soft sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-500">Format</p>
              <p className="mt-1 text-2xl font-bold">10 scenarios</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-500">Feedback</p>
              <p className="mt-1 text-2xl font-bold">Immediate</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-500">Scoring</p>
              <p className="mt-1 text-2xl font-bold">100 points</p>
            </div>
          </div>
          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Assessment Areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm font-medium text-slate-700">
              {[
                "Anti-Bribery",
                "Gift & Hospitality",
                "Conflict of Interest",
                "Whistleblowing",
                "Procurement",
                "Payment Risk",
                "ABMS ISO 37001",
                "Ethical Decisions",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartScreen;
