import {
  ArrowRight,
  BadgeCheck,
  Flag,
  Map,
  ShieldCheck,
  Target,
  Trophy,
  UserRound,
} from "lucide-react";
import { activeQuests } from "../data/quests.js";

const missionStats = [
  { label: "Walkable Map", value: "8 zones" },
  { label: "Case Encounters", value: "10" },
  { label: "Reward Track", value: "XP + Badges" },
];

const StartScreen = ({ onStart, onShowLeaderboard }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amberAccent text-navy-950 shadow-soft">
            <Map className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              Adventure Mode
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
          <span className="hidden sm:inline">Hall of Trust</span>
        </button>
      </header>

      <section className="grid flex-1 items-center gap-8 py-8 lg:grid-cols-[1fr_420px] lg:py-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 bg-amber-200/10 px-3 py-2 text-sm font-semibold text-amber-100">
            <Flag className="h-4 w-4" aria-hidden="true" />
            Integrity District Opens
          </div>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
            Walk around. Investigate places. Solve integrity cases.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Create an avatar, explore the district, click into hotspots, and make
            the right call when a risk scenario appears.
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
              title="Start adventure"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberAccent px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:bg-amber-300"
            >
              Start Adventure
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
          <div className="relative overflow-hidden rounded-lg bg-navy-900 p-4 text-white">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="relative min-h-[210px]">
              <div className="absolute left-[18%] top-[22%] rounded-lg bg-white px-3 py-2 text-xs font-bold text-navy-950">
                Vendor Gate
              </div>
              <div className="absolute right-[10%] top-[30%] rounded-lg bg-amberAccent px-3 py-2 text-xs font-bold text-navy-950">
                Finance Desk
              </div>
              <div className="absolute bottom-[18%] left-[12%] rounded-lg bg-white px-3 py-2 text-xs font-bold text-navy-950">
                Project Site
              </div>
              <div className="absolute bottom-[16%] right-[16%] rounded-lg bg-white px-3 py-2 text-xs font-bold text-navy-950">
                ABMS Lab
              </div>
              <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-amberAccent text-navy-950 shadow-soft">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                Adventure Quests
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-normal">
                Explore and Decide
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
                      <Map className="h-5 w-5" aria-hidden="true" />
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
