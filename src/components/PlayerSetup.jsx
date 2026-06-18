import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  Shield,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";

const departments = [
  "Procurement",
  "Finance",
  "HR",
  "Project / Site",
  "Sales / Customer Service",
  "General Staff",
];

const PlayerSetup = ({ onBack, onSubmit }) => {
  const [participant, setParticipant] = useState({
    name: "",
    email: "",
    department: "",
  });

  const canSubmit = useMemo(() => {
    return (
      participant.name.trim() &&
      participant.email.trim() &&
      participant.department.trim()
    );
  }, [participant]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParticipant((current) => ({
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
      name: participant.name.trim(),
      email: participant.email.trim(),
      department: participant.department,
    });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-4 py-8 sm:px-6">
      <section className="overflow-hidden rounded-lg bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
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
                Prepare your mission profile
              </h1>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Your details are stored locally with the result for the MVP admin
                dashboard. No backend submission is required.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-4">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-none text-amber-200" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-200">
                  The mission assesses integrity judgement, conflict radar,
                  escalation courage, and policy awareness across ten realistic
                  corporate cases.
                </p>
              </div>
            </div>
          </aside>

          <form className="p-5 sm:p-8" onSubmit={handleSubmit}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
                Mission Access
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-navy-950">
                Enter participant information
              </h2>
            </div>

            <div className="mt-6 grid gap-5">
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
                Ten decision scenarios will begin after this step.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default PlayerSetup;
