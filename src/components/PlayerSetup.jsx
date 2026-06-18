import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import { useMemo, useState } from "react";

const roles = [
  "Staff",
  "Procurement",
  "Project / Technical",
  "Management",
  "Committee Member",
  "Vendor",
];

const PlayerSetup = ({ onBack, onSubmit }) => {
  const [player, setPlayer] = useState({
    name: "",
    division: "",
    role: "Staff",
  });

  const canSubmit = useMemo(() => {
    return player.name.trim() && player.division.trim() && player.role;
  }, [player]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    onSubmit({
      name: player.name.trim(),
      division: player.division.trim(),
      role: player.role,
    });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-8 sm:px-6">
      <section className="rounded-lg bg-white p-5 shadow-soft sm:p-8">
        <button
          type="button"
          onClick={onBack}
          title="Back to start"
          className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>

        <div className="mt-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-amber-200">
            <UserRound className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
            Player Setup
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal text-navy-950">
            Tell us who is taking the challenge
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Your details are stored only in this browser for the local
            leaderboard.
          </p>
        </div>

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Name
            <input
              name="name"
              value={player.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="rounded-lg border border-slate-300 px-4 py-3 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
              autoComplete="name"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Division
            <input
              name="division"
              value={player.division}
              onChange={handleChange}
              placeholder="Enter your division"
              className="rounded-lg border border-slate-300 px-4 py-3 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
              autoComplete="organization"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Role
            <select
              name="role"
              value={player.role}
              onChange={handleChange}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-navy-950 transition focus:border-amberAccent"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            title="Begin quiz"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
          >
            Begin Quiz
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </section>
    </main>
  );
};

export default PlayerSetup;
