import { ArrowLeft, RotateCcw, Trash2, Trophy } from "lucide-react";
import { useMemo } from "react";
import AvatarBadge from "./AvatarBadge.jsx";

const Leaderboard = ({ entries, onBack, onRetake, onClear }) => {
  const topEntries = useMemo(() => entries.slice(0, 10), [entries]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-6 sm:px-6">
      <section className="rounded-lg bg-white p-5 shadow-soft sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              type="button"
              onClick={onBack}
              title="Back"
              className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-navy-900"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Trophy className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Hall of Trust
                </p>
                <h1 className="text-3xl font-semibold tracking-normal text-navy-950">
                  Top Integrity Agents
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onRetake}
              title="Retake challenge"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              New Run
            </button>
            {entries.length > 0 ? (
              <button
                type="button"
                onClick={onClear}
                title="Clear leaderboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-orange-200 px-4 py-3 text-sm font-bold text-risk transition hover:bg-orange-50"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
                Clear
              </button>
            ) : null}
          </div>
        </div>

        {topEntries.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-lg font-bold text-navy-950">No agents ranked yet</p>
            <p className="mt-2 text-sm text-slate-600">
              Complete the first mission run to unlock the local leaderboard.
            </p>
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
            <div className="hidden grid-cols-[72px_1.4fr_110px_1fr_150px] bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 md:grid">
              <span>Rank</span>
              <span>Agent</span>
              <span>Score</span>
              <span>Badge</span>
              <span>Date</span>
            </div>
            <div className="divide-y divide-slate-200">
              {topEntries.map((entry, index) => (
                <div
                  key={entry.id}
                  className="grid gap-3 px-4 py-4 md:grid-cols-[72px_1.4fr_110px_1fr_150px] md:items-center"
                >
                  <div className="text-sm font-bold text-amber-700">
                    #{index + 1}
                  </div>
                  <div>
                    <AvatarBadge
                      avatar={entry.avatar}
                      name={entry.name}
                      size="sm"
                    />
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      {entry.name} | {entry.division} | {entry.role}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-navy-950 md:text-base">
                    {entry.percentage}%
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      {entry.badges?.[0] || entry.profileTitle}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {entry.profileTitle}
                    </p>
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {new Date(entry.completedAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Leaderboard;
