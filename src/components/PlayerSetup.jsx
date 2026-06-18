import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  Shield,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";
import { avatarOptions, defaultAvatar } from "../data/avatarOptions.js";
import AvatarBadge from "./AvatarBadge.jsx";

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
    outlookEmail: "",
    avatar: defaultAvatar,
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

  const handleAvatarSelect = (avatar) => {
    setPlayer((current) => ({
      ...current,
      avatar,
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
      outlookEmail: player.outlookEmail.trim(),
      outlookLinked: Boolean(player.outlookEmail.trim()),
      avatar: player.avatar,
    });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-4 py-8 sm:px-6">
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

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-amber-200">
              <UserRound className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              Agent Profile
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-navy-950">
              Create your integrity avatar
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pick a mission identity, then enter the challenge room.
            </p>

            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <AvatarBadge
                avatar={player.avatar}
                name={player.name || "Player"}
                size="lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-white p-3">
                  <p className="font-semibold text-slate-500">Class</p>
                  <p className="mt-1 font-bold text-navy-950">Integrity Agent</p>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <p className="font-semibold text-slate-500">Signal</p>
                  <p className="mt-1 font-bold text-navy-950">
                    {player.avatar.signal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
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
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
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

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Outlook Work Email
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    name="outlookEmail"
                    type="email"
                    value={player.outlookEmail}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
                    autoComplete="email"
                  />
                </div>
              </label>
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-navy-950">Avatar Loadout</p>
                <span className="rounded-lg bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-amber-800">
                  Local MVP
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {avatarOptions.map((avatar) => {
                  const isSelected = player.avatar.id === avatar.id;

                  return (
                    <button
                      key={avatar.id}
                      type="button"
                      onClick={() => handleAvatarSelect(avatar)}
                      className={`rounded-lg border p-4 text-left transition hover:bg-slate-50 ${
                        isSelected
                          ? "border-amberAccent bg-amber-50"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <AvatarBadge avatar={avatar} name={avatar.codename} size="sm" />
                        {isSelected ? (
                          <CheckCircle2
                            className="h-5 w-5 flex-none text-success"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <span
                          className="h-4 w-4 rounded-full border border-slate-200"
                          style={{ background: avatar.suit }}
                        />
                        <span
                          className="h-4 w-4 rounded-full border border-slate-200"
                          style={{ background: avatar.accent }}
                        />
                        <span className="text-xs font-semibold text-slate-500">
                          {avatar.signal}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-navy-900 text-amber-200">
                  <Shield className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-950">
                    Outlook connection path
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Email is saved locally for this MVP. Microsoft sign-in can be
                    added after Entra app registration.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              title="Begin mission"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            >
              Enter Mission
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PlayerSetup;
