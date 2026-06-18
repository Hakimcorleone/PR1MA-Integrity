import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileWarning,
  ShieldCheck,
} from "lucide-react";

const readinessSignals = [
  {
    label: "Scenario cases",
    value: "10",
    detail: "Vendor, procurement, payment, ABMS, and reporting decisions",
  },
  {
    label: "Decision score",
    value: "100",
    detail: "Graded by risk level, not simple memorisation",
  },
  {
    label: "Management view",
    value: "/admin",
    detail: "Local dashboard for saved assessment results",
  },
];

const missionPillars = [
  "Integrity Judgment",
  "Conflict Radar",
  "Escalation Courage",
  "Policy Awareness",
];

const StartScreen = ({ onStart, onAdmin }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amberAccent text-navy-950 shadow-soft">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Integrity Mission Room
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-200">
              PR1MA Decision Simulator
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onAdmin}
          title="Open admin dashboard"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:border-amber-200 hover:bg-white/10 hover:text-amber-100"
        >
          <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Admin</span>
        </button>
      </header>

      <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 bg-amber-200/10 px-3 py-2 text-sm font-semibold text-amber-100">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            Corporate Integrity Assessment
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            PR1MA Integrity Mission Room
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Choose wisely. Every decision protects the organisation.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Step into realistic workplace scenarios, identify red flags, and
            make policy-aligned decisions under pressure.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStart}
              title="Start mission"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberAccent px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:bg-amber-300"
            >
              Start Mission
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onAdmin}
              title="View admin results"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
              Admin Dashboard
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-soft sm:p-6">
          <div className="rounded-lg bg-navy-900 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
                  Mission Brief
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal">
                  Decision-making simulator
                </h2>
              </div>
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white/10 text-amber-200">
                <FileWarning className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {readinessSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4"
                >
                  <p className="text-2xl font-bold text-white">
                    {signal.value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-amber-100">
                    {signal.label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {signal.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {missionPillars.map((pillar, index) => (
              <div
                key={pillar}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white text-amber-700">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-950">
                    {pillar}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Assessment pillar {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default StartScreen;
