import {
  ArrowRight,
  BadgeCheck,
  Flag,
  ShieldCheck,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { activeQuests } from "../data/quests.js";

const missionStats = [
  { label: "Mission Deck", value: "10 cases" },
  { label: "Reward Track", value: "Badges" },
  { label: "Profile", value: "Avatar" },
];

const StartScreen = ({ onStart, onShowLeaderboard }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amberAccent text-navy-950 shadow-soft">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Integrity Mission Hub
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-normal sm:text-3xl">
              The Right Call
            </h1>
          </div>
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

      <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1fr_380px] lg:py-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 bg-amber-200/10 px-3 py-2 text-sm font-semibold text-amber-100">
            <Flag className="h-4 w-4" aria-hidden="true" />
            Quest Season 01
          </div>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            Build your avatar. Enter the mission. Make the right call.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            A corporate integrity challenge with scenarios, feedback, profile
            rewards, and a local leaderboard for team play.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {missionStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStart}
              title="Start mission"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberAccent px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:bg-amber-300"
            >
              Create Avatar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onShowLeaderboard}
              title="View saved scores"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <Trophy className="h-4 w-4" aria-hidden="true" />
              Hall of Trust
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-white/12 bg-white p-5 text-navy-950 shadow-soft sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                Active Quests
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-normal">
                Integrity Run
              </h3>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-amber-200">
              <Target className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {activeQuests.map((quest, index) => (
              <div
                key={quest.id}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white text-amber-700">
                    {index === 0 ? (
                      <UserRound className="h-5 w-5" aria-hidden="true" />
                    ) : index === 1 ? (
                      <Target className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-950">
                      {quest.title}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      {quest.description}
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-success">
                      {quest.reward}
                    </p>
                  </div>
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
