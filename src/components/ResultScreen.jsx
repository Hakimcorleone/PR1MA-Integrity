import { Award, BarChart3, Mail, RotateCcw, Trophy } from "lucide-react";
import AvatarBadge from "./AvatarBadge.jsx";

const ResultScreen = ({
  player,
  score,
  profile,
  categoryPerformance,
  suggestion,
  badges = [],
  onRetake,
  onLeaderboard,
}) => {
  const badgeList = badges.length > 0 ? badges : [profile.title];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-6 sm:px-6">
      <section className="overflow-hidden rounded-lg bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-navy-900 p-5 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
              Mission Complete
            </p>
            <div className="mt-5">
              <AvatarBadge
                avatar={player.avatar}
                name={player.name}
                size="lg"
              />
            </div>
            <h1 className="mt-6 text-5xl font-bold tracking-normal">
              {score.percentage}%
            </h1>
            <p className="mt-2 text-sm text-slate-200">
              {score.earned} XP earned from {score.totalPossible} available
            </p>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm font-semibold text-slate-300">Agent</p>
              <p className="mt-1 text-xl font-bold">{player.name}</p>
              <p className="mt-2 text-sm text-slate-300">
                {player.division} | {player.role}
              </p>
              <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-100">
                <Mail className="h-4 w-4 flex-none text-amber-200" aria-hidden="true" />
                <span className="truncate">
                  {player.outlookEmail || "Outlook profile not set"}
                </span>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              Integrity Profile
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-navy-950">
              {profile.title}
            </h2>
            <p className="mt-2 text-base font-semibold text-slate-700">
              {profile.tone}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {profile.description}
            </p>

            <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-bold text-amber-900">
                Improvement Suggestion
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                {suggestion}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-navy-950">
                <Award className="h-5 w-5 text-amber-700" aria-hidden="true" />
                <h3 className="text-xl font-bold tracking-normal">
                  Reward Badges
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {badgeList.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-navy-950"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 p-5 sm:p-8">
          <div className="flex items-center gap-2 text-navy-950">
            <BarChart3 className="h-5 w-5" aria-hidden="true" />
            <h3 className="text-xl font-bold tracking-normal">
              Category Performance
            </h3>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {categoryPerformance.map((item) => (
              <div
                key={item.category}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-navy-950">
                    {item.category}
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    {item.correct}/{item.total}
                  </p>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${
                      item.percentage >= 75
                        ? "bg-success"
                        : item.percentage >= 50
                          ? "bg-amberAccent"
                          : "bg-risk"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onRetake}
              title="Retake challenge"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              New Run
            </button>
            <button
              type="button"
              onClick={onLeaderboard}
              title="View leaderboard"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-navy-950 transition hover:border-amberAccent hover:bg-amber-50"
            >
              <Trophy className="h-4 w-4" aria-hidden="true" />
              Hall of Trust
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResultScreen;
