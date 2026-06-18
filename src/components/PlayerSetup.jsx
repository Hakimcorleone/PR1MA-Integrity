import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Palette,
  Shield,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  avatarPresets,
  defaultAvatar,
  genderOptions,
  hairColorOptions,
  pantsOptions,
  shoeOptions,
  skinToneOptions,
  topOptions,
  tudungOptions,
} from "../data/avatarOptions.js";
import AvatarFigure from "./AvatarFigure.jsx";

const roles = [
  "Staff",
  "Procurement",
  "Project / Technical",
  "Management",
  "Committee Member",
  "Vendor",
];

const SwatchGroup = ({ label, options, value, onChange }) => {
  return (
    <div>
      <p className="text-sm font-bold text-navy-950">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value === option.value;

          return (
            <button
              key={`${label}-${option.value}`}
              type="button"
              onClick={() => onChange(option.value)}
              title={option.label}
              className={`h-9 w-9 rounded-lg border transition hover:scale-105 ${
                isSelected ? "border-navy-900 ring-2 ring-amberAccent" : "border-slate-300"
              }`}
              style={{ background: option.value }}
            >
              <span className="sr-only">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const PlayerSetup = ({ onBack, onSubmit }) => {
  const [player, setPlayer] = useState({
    name: "",
    department: "",
    division: "",
    role: "Staff",
    outlookEmail: "",
    avatar: defaultAvatar,
  });

  const canSubmit = useMemo(() => {
    return (
      player.name.trim() &&
      player.department.trim() &&
      player.division.trim() &&
      player.role
    );
  }, [player]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlayer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const updateAvatar = (field, value) => {
    setPlayer((current) => ({
      ...current,
      avatar: {
        ...current.avatar,
        [field]: value,
        codename: `${current.role} Agent`,
      },
    }));
  };

  const applyPreset = (avatar) => {
    setPlayer((current) => ({
      ...current,
      avatar: {
        ...avatar,
        codename: `${current.role} Agent`,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    onSubmit({
      name: player.name.trim(),
      department: player.department.trim(),
      division: player.division.trim(),
      role: player.role,
      outlookEmail: player.outlookEmail.trim(),
      outlookLinked: Boolean(player.outlookEmail.trim()),
      avatar: {
        ...player.avatar,
        codename: `${player.role} Agent`,
      },
    });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-8 sm:px-6">
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

        <form className="mt-6 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]" onSubmit={handleSubmit}>
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-amber-200">
                <UserRound className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Avatar Creator
                </p>
                <h1 className="text-2xl font-semibold tracking-normal text-navy-950">
                  Build your character
                </h1>
              </div>
            </div>

            <div className="mt-6 flex min-h-[330px] items-end justify-center rounded-lg border border-slate-200 bg-white p-5">
              <AvatarFigure
                avatar={{ ...player.avatar, codename: `${player.role} Agent` }}
                name={player.name || "Player"}
                size="lg"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-white p-3">
                <p className="font-semibold text-slate-500">Gender</p>
                <p className="mt-1 font-bold text-navy-950">
                  {player.avatar.gender}
                </p>
              </div>
              <div className="rounded-lg bg-white p-3">
                <p className="font-semibold text-slate-500">Tudung</p>
                <p className="mt-1 font-bold text-navy-950">
                  {player.avatar.hijab ? "Pakai" : "Tidak"}
                </p>
              </div>
              <div className="rounded-lg bg-white p-3">
                <p className="font-semibold text-slate-500">Department</p>
                <p className="mt-1 truncate font-bold text-navy-950">
                  {player.department || "Not set"}
                </p>
              </div>
              <div className="rounded-lg bg-white p-3">
                <p className="font-semibold text-slate-500">Division</p>
                <p className="mt-1 truncate font-bold text-navy-950">
                  {player.division || "Not set"}
                </p>
              </div>
            </div>
          </aside>

          <div className="grid gap-5">
            <div>
              <p className="text-sm font-bold text-navy-950">Quick Presets</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {avatarPresets.map((avatar) => (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => applyPreset(avatar)}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 text-left transition hover:border-amberAccent hover:bg-amber-50"
                  >
                    <div className="flex h-16 w-14 flex-none items-end justify-center overflow-hidden rounded-lg bg-slate-100">
                      <AvatarFigure avatar={avatar} name={avatar.codename} size="sm" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy-950">
                        {avatar.codename}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {avatar.signal}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

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
                Role
                <select
                  name="role"
                  value={player.role}
                  onChange={(event) => {
                    handleChange(event);
                    updateAvatar("codename", `${event.target.value} Agent`);
                  }}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-navy-950 transition focus:border-amberAccent"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Department
                <div className="relative">
                  <BriefcaseBusiness
                    className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    name="department"
                    value={player.department}
                    onChange={handleChange}
                    placeholder="e.g. Compliance"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
                  />
                </div>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Division
                <input
                  name="division"
                  value={player.division}
                  onChange={handleChange}
                  placeholder="e.g. Central Region"
                  className="rounded-lg border border-slate-300 px-4 py-3 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
                  autoComplete="organization"
                />
              </label>
            </div>

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

            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-navy-950">
                <Palette className="h-5 w-5 text-amber-700" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-[0.16em]">
                  Appearance
                </p>
              </div>

              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-sm font-bold text-navy-950">Gender</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {genderOptions.map((gender) => (
                      <button
                        key={gender}
                        type="button"
                        onClick={() => updateAvatar("gender", gender)}
                        className={`rounded-lg border px-3 py-2 text-sm font-bold transition ${
                          player.avatar.gender === gender
                            ? "border-navy-900 bg-navy-900 text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:border-amberAccent"
                        }`}
                      >
                        {gender}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-navy-950">Tudung</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {tudungOptions.map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => updateAvatar("hijab", option.value)}
                        className={`rounded-lg border px-3 py-2 text-sm font-bold transition ${
                          player.avatar.hijab === option.value
                            ? "border-navy-900 bg-navy-900 text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:border-amberAccent"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <SwatchGroup
                  label="Skin Tone"
                  options={skinToneOptions}
                  value={player.avatar.skinTone}
                  onChange={(value) => updateAvatar("skinTone", value)}
                />
                <SwatchGroup
                  label={player.avatar.hijab ? "Tudung Color" : "Hair Color"}
                  options={player.avatar.hijab ? topOptions : hairColorOptions}
                  value={player.avatar.hijab ? player.avatar.hijabColor : player.avatar.hairColor}
                  onChange={(value) =>
                    updateAvatar(player.avatar.hijab ? "hijabColor" : "hairColor", value)
                  }
                />
                <SwatchGroup
                  label="Baju / Top"
                  options={topOptions}
                  value={player.avatar.topColor}
                  onChange={(value) => updateAvatar("topColor", value)}
                />
                <SwatchGroup
                  label="Seluar / Pants"
                  options={pantsOptions}
                  value={player.avatar.pantsColor}
                  onChange={(value) => updateAvatar("pantsColor", value)}
                />
                <SwatchGroup
                  label="Shoes"
                  options={shoeOptions}
                  value={player.avatar.shoeColor}
                  onChange={(value) => updateAvatar("shoeColor", value)}
                />
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
              title="Enter district"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
            >
              Enter District
              {canSubmit ? (
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default PlayerSetup;
