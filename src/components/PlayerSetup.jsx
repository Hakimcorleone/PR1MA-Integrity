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

const departments = [
  "Procurement",
  "Finance",
  "HR",
  "Project / Site",
  "Sales / Customer Service",
  "General Staff",
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
                isSelected
                  ? "border-navy-900 ring-2 ring-amberAccent"
                  : "border-slate-300"
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
  const [participant, setParticipant] = useState({
    name: "",
    email: "",
    department: "",
    avatar: defaultAvatar,
  });

  const canSubmit = useMemo(() => {
    return (
      participant.name.trim() &&
      participant.email.trim() &&
      participant.department.trim()
    );
  }, [participant]);

  const avatarPreview = useMemo(
    () => ({
      ...participant.avatar,
      signal: participant.department || participant.avatar.signal,
    }),
    [participant.avatar, participant.department],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParticipant((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const updateAvatar = (field, value) => {
    setParticipant((current) => ({
      ...current,
      avatar: {
        ...current.avatar,
        [field]: value,
      },
    }));
  };

  const applyPreset = (avatar) => {
    setParticipant((current) => ({
      ...current,
      avatar: {
        ...avatar,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }

    onSubmit({
      name: participant.name.trim(),
      email: participant.email.trim(),
      department: participant.department,
      avatar: {
        ...participant.avatar,
        signal: participant.department,
      },
    });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-8 sm:px-6">
      <section className="overflow-hidden rounded-lg bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="bg-navy-900 p-5 text-white sm:p-8">
            <button
              type="button"
              onClick={onBack}
              title="Back to landing page"
              className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>

            <div className="mt-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-amberAccent text-navy-950">
                <UserRound className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                Participant Details
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-normal">
                Create your mission avatar
              </h1>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Build a personal integrity agent before entering the assessment.
                The avatar is saved locally together with the mission result.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-4">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-none text-amber-200" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-200">
                  The mission now includes 30 scenario decisions across gifts,
                  procurement, HR, finance, site controls, reporting, and ABMS.
                </p>
              </div>
            </div>

            <div className="mt-6 flex min-h-[330px] items-end justify-center rounded-lg border border-white/10 bg-white p-5 text-navy-950">
              <AvatarFigure
                avatar={avatarPreview}
                name={participant.name || "Integrity Agent"}
                size="lg"
              />
            </div>
          </aside>

          <form className="p-5 sm:p-8" onSubmit={handleSubmit}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                Mission Access
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-navy-950">
                Enter details and customise your avatar
              </h2>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Name
                  <div className="relative">
                    <UserRound
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      name="name"
                      value={participant.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
                      autoComplete="name"
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Email
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      name="email"
                      type="email"
                      value={participant.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full rounded-lg border border-slate-300 py-3 pl-11 pr-4 text-base text-navy-950 transition placeholder:text-slate-400 focus:border-amberAccent"
                      autoComplete="email"
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-700">
                  Department
                  <div className="relative">
                    <BriefcaseBusiness
                      className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <select
                      name="department"
                      value={participant.department}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-base text-navy-950 transition focus:border-amberAccent"
                    >
                      <option value="">Select department</option>
                      {departments.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                  </div>
                </label>

                <div>
                  <p className="text-sm font-bold text-navy-950">Avatar presets</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    {avatarPresets.map((avatar) => (
                      <button
                        key={avatar.id}
                        type="button"
                        onClick={() => applyPreset(avatar)}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-left transition hover:border-amberAccent hover:bg-amber-50"
                      >
                        <div className="flex h-16 w-14 flex-none items-end justify-center overflow-hidden rounded-lg bg-white">
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
              </div>

              <div className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-navy-950">
                  <Palette className="h-5 w-5 text-amber-700" aria-hidden="true" />
                  <p className="text-sm font-bold uppercase tracking-[0.16em]">
                    Avatar Creator
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
                            participant.avatar.gender === gender
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
                            participant.avatar.hijab === option.value
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
                    value={participant.avatar.skinTone}
                    onChange={(value) => updateAvatar("skinTone", value)}
                  />
                  <SwatchGroup
                    label={participant.avatar.hijab ? "Tudung Color" : "Hair Color"}
                    options={participant.avatar.hijab ? topOptions : hairColorOptions}
                    value={
                      participant.avatar.hijab
                        ? participant.avatar.hijabColor
                        : participant.avatar.hairColor
                    }
                    onChange={(value) =>
                      updateAvatar(
                        participant.avatar.hijab ? "hijabColor" : "hairColor",
                        value,
                      )
                    }
                  />
                  <SwatchGroup
                    label="Baju / Top"
                    options={topOptions}
                    value={participant.avatar.topColor}
                    onChange={(value) => updateAvatar("topColor", value)}
                  />
                  <SwatchGroup
                    label="Seluar / Pants"
                    options={pantsOptions}
                    value={participant.avatar.pantsColor}
                    onChange={(value) => updateAvatar("pantsColor", value)}
                  />
                  <SwatchGroup
                    label="Shoes"
                    options={shoeOptions}
                    value={participant.avatar.shoeColor}
                    onChange={(value) => updateAvatar("shoeColor", value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={!canSubmit}
                title="Continue to mission"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
              >
                Continue
                {canSubmit ? (
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <p className="text-sm text-slate-500">
                Thirty decision scenarios will begin after this step.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PlayerSetup;
