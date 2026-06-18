import {
  ArrowLeft,
  BarChart3,
  Building2,
  Download,
  Gauge,
  ShieldAlert,
  UsersRound,
} from "lucide-react";
import { useMemo, useState } from "react";
import { getSavedResults } from "../utils/storage.js";

const formatDate = (dateValue) => {
  if (!dateValue) {
    return "-";
  }

  return new Date(dateValue).toLocaleString();
};

const toCsvCell = (value) => {
  const stringValue = value === undefined || value === null ? "" : String(value);
  return `"${stringValue.replace(/"/g, '""')}"`;
};

const getAverage = (values) => {
  if (values.length === 0) {
    return 0;
  }

  return Math.round(
    values.reduce((sum, value) => sum + value, 0) / values.length,
  );
};

const buildDepartmentStats = (results) => {
  const grouped = results.reduce((acc, result) => {
    const department = result.participant?.department || "Unassigned";

    if (!acc[department]) {
      acc[department] = {
        department,
        participants: 0,
        totalScore: 0,
        averageScore: 0,
      };
    }

    acc[department].participants += 1;
    acc[department].totalScore += result.score?.percentage || 0;
    return acc;
  }, {});

  return Object.values(grouped)
    .map((item) => ({
      ...item,
      averageScore: Math.round(item.totalScore / item.participants),
    }))
    .sort((a, b) => b.averageScore - a.averageScore);
};

const buildCategoryAverages = (results) => {
  const grouped = results.reduce((acc, result) => {
    (result.subScores || []).forEach((subScore) => {
      if (!acc[subScore.category]) {
        acc[subScore.category] = {
          category: subScore.category,
          totalPercentage: 0,
          count: 0,
          averageScore: 0,
        };
      }

      acc[subScore.category].totalPercentage += subScore.percentage || 0;
      acc[subScore.category].count += 1;
    });

    return acc;
  }, {});

  return Object.values(grouped)
    .map((item) => ({
      ...item,
      averageScore: Math.round(item.totalPercentage / item.count),
    }))
    .sort((a, b) => a.averageScore - b.averageScore);
};

const AdminDashboard = ({ onBack }) => {
  const [results] = useState(() => getSavedResults());

  const departmentStats = useMemo(
    () => buildDepartmentStats(results),
    [results],
  );
  const categoryAverages = useMemo(
    () => buildCategoryAverages(results),
    [results],
  );

  const averageScore = useMemo(
    () => getAverage(results.map((result) => result.score?.percentage || 0)),
    [results],
  );

  const highestDepartment = departmentStats[0];
  const weakestCategory = categoryAverages[0];

  const exportCsv = () => {
    const headers = [
      "Name",
      "Email",
      "Department",
      "Score",
      "Badge",
      "Date Completed",
    ];
    const rows = results.map((result) => [
      result.participant?.name,
      result.participant?.email,
      result.participant?.department,
      result.score?.percentage,
      result.badge,
      formatDate(result.completedAt),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map(toCsvCell).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pr1ma-integrity-results.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button
            type="button"
            onClick={onBack}
            title="Back to mission"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
            Admin Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-normal sm:text-4xl">
            Integrity Mission Room Results
          </h1>
        </div>
        <button
          type="button"
          onClick={exportCsv}
          disabled={results.length === 0}
          title="Export CSV"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberAccent px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:text-slate-200"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Export CSV
        </button>
      </header>

      <section className="grid gap-4 py-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
              Total Participants
            </p>
            <UsersRound className="h-5 w-5 text-amber-700" aria-hidden="true" />
          </div>
          <p className="mt-3 text-3xl font-bold">{results.length}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
              Average Score
            </p>
            <Gauge className="h-5 w-5 text-amber-700" aria-hidden="true" />
          </div>
          <p className="mt-3 text-3xl font-bold">{averageScore}%</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
              Highest Department
            </p>
            <Building2 className="h-5 w-5 text-amber-700" aria-hidden="true" />
          </div>
          <p className="mt-3 text-xl font-bold">
            {highestDepartment
              ? `${highestDepartment.department} (${highestDepartment.averageScore}%)`
              : "No data"}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white p-5 text-navy-950 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
              Weakest Category
            </p>
            <ShieldAlert className="h-5 w-5 text-risk" aria-hidden="true" />
          </div>
          <p className="mt-3 text-xl font-bold">
            {weakestCategory
              ? `${weakestCategory.category} (${weakestCategory.averageScore}%)`
              : "No data"}
          </p>
        </div>
      </section>

      <section className="grid gap-5 pb-8 xl:grid-cols-[1.34fr_0.66fr]">
        <div className="rounded-lg bg-white p-5 text-navy-950 shadow-soft sm:p-6">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-amber-700" aria-hidden="true" />
            <h2 className="text-xl font-bold tracking-normal">
              Participant Results
            </h2>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg font-bold text-navy-950">
                No saved results yet
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Results appear here after a participant clicks Save Result.
              </p>
            </div>
          ) : (
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-[860px] w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-4 py-3">Score</th>
                    <th className="px-4 py-3">Badge</th>
                    <th className="px-4 py-3">Date Completed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {results.map((result) => (
                    <tr key={result.id} className="align-top">
                      <td className="px-4 py-3 font-bold text-navy-950">
                        {result.participant?.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {result.participant?.email}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {result.participant?.department}
                      </td>
                      <td className="px-4 py-3 font-bold text-navy-950">
                        {result.score?.percentage}%
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {result.badge}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {formatDate(result.completedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg bg-white p-5 text-navy-950 shadow-soft sm:p-6">
            <h2 className="text-xl font-bold tracking-normal">
              Department Average Scores
            </h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-4 py-3">Participants</th>
                    <th className="px-4 py-3">Average</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {departmentStats.length === 0 ? (
                    <tr>
                      <td className="px-4 py-5 text-slate-500" colSpan="3">
                        No department data
                      </td>
                    </tr>
                  ) : (
                    departmentStats.map((department) => (
                      <tr key={department.department}>
                        <td className="px-4 py-3 font-bold text-navy-950">
                          {department.department}
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {department.participants}
                        </td>
                        <td className="px-4 py-3 font-bold text-navy-950">
                          {department.averageScore}%
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 text-navy-950 shadow-soft sm:p-6">
            <h2 className="text-xl font-bold tracking-normal">
              Category Average Scores
            </h2>
            <div className="mt-5 grid gap-3">
              {categoryAverages.length === 0 ? (
                <p className="text-sm text-slate-500">No category data</p>
              ) : (
                categoryAverages.map((category) => (
                  <div
                    key={category.category}
                    className="rounded-lg border border-slate-200 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-bold text-navy-950">
                        {category.category}
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {category.averageScore}%
                      </p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${
                          category.averageScore >= 75
                            ? "bg-success"
                            : category.averageScore >= 60
                              ? "bg-amberAccent"
                              : "bg-risk"
                        }`}
                        style={{ width: `${category.averageScore}%` }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
