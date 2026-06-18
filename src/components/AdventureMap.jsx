import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  Construction,
  Footprints,
  Landmark,
  MailWarning,
  MapPin,
  Radio,
  ShieldAlert,
  Store,
  UsersRound,
  WalletCards,
  XCircle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  getLocationByCategory,
  integrityDistrictLocations,
} from "../data/locations.js";
import AvatarFigure from "./AvatarFigure.jsx";

const locationIcons = {
  hq: Building2,
  procurement: ClipboardList,
  finance: WalletCards,
  site: Construction,
  hotline: Radio,
  abms: BadgeCheck,
  committee: UsersRound,
  vendor: Store,
};

const optionClass = (option, selectedAnswer, correctAnswer) => {
  const answered = Boolean(selectedAnswer);
  const isSelected = selectedAnswer === option;
  const isCorrect = correctAnswer === option;

  if (!answered) {
    return "border-slate-200 bg-white text-slate-800 hover:border-amberAccent hover:bg-amber-50";
  }

  if (isCorrect) {
    return "border-success bg-emerald-50 text-emerald-950";
  }

  if (isSelected && !isCorrect) {
    return "border-risk bg-orange-50 text-orange-950";
  }

  return "border-slate-200 bg-slate-50 text-slate-500";
};

const buildFloorTiles = () => {
  const tiles = [];

  for (let row = 0; row < 6; row += 1) {
    for (let col = 0; col < 7; col += 1) {
      tiles.push({
        id: `${row}-${col}`,
        x: 50 + (col - row) * 7.2,
        y: 31 + (col + row) * 5.7,
      });
    }
  }

  return tiles;
};

const AdventureMap = ({
  player,
  correctCount,
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
}) => {
  const floorTiles = useMemo(() => buildFloorTiles(), []);
  const suggestedLocation = useMemo(
    () => getLocationByCategory(question.category),
    [question.category],
  );
  const [activeLocation, setActiveLocation] = useState(suggestedLocation);
  const [avatarPosition, setAvatarPosition] = useState({
    x: suggestedLocation.x,
    y: suggestedLocation.y,
  });
  const [visitedLocations, setVisitedLocations] = useState([suggestedLocation.id]);

  const answered = Boolean(selectedAnswer);
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = Math.round((questionNumber / totalQuestions) * 100);
  const missionCorrectCount = correctCount + (answered && isCorrect ? 1 : 0);

  useEffect(() => {
    setActiveLocation(suggestedLocation);
    setAvatarPosition({ x: suggestedLocation.x, y: suggestedLocation.y });
    setVisitedLocations((current) =>
      current.includes(suggestedLocation.id)
        ? current
        : [...current, suggestedLocation.id],
    );
  }, [suggestedLocation]);

  const handleLocationClick = (location) => {
    setActiveLocation(location);
    setAvatarPosition({ x: location.x, y: location.y });
    setVisitedLocations((current) =>
      current.includes(location.id) ? current : [...current, location.id],
    );
  };

  const handleTileClick = (tile) => {
    setAvatarPosition({ x: tile.x, y: tile.y });
  };

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 text-white sm:px-6 lg:px-8">
      <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
            Integrity District Adventure
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-normal sm:text-3xl">
            Click the floor. Walk the room. Investigate the case.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center sm:min-w-[360px]">
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Case
            </p>
            <p className="mt-1 text-lg font-bold">
              {questionNumber}/{totalQuestions}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              Calls
            </p>
            <p className="mt-1 text-lg font-bold">{missionCorrectCount}</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/10 px-3 py-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              XP
            </p>
            <p className="mt-1 text-lg font-bold">{missionCorrectCount * 10}</p>
          </div>
        </div>
      </header>

      <section className="grid flex-1 gap-5 py-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <div className="overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-soft backdrop-blur">
          <div className="flex flex-col gap-3 border-b border-white/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                Isometric District Room
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Click floor tiles to walk. Click buildings to investigate locations.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-white">
              <Footprints className="h-4 w-4 text-amber-200" aria-hidden="true" />
              {visitedLocations.length}/{integrityDistrictLocations.length} visited
            </div>
          </div>

          <div className="adventure-map relative min-h-[560px] overflow-hidden sm:min-h-[640px]">
            <div className="absolute left-[10%] top-[11%] h-[72%] w-[12%] rounded-lg border border-white/10 bg-white/8" />
            <div className="absolute right-[8%] top-[16%] h-[60%] w-[13%] rounded-lg border border-white/10 bg-white/8" />
            <div className="absolute left-[24%] top-[8%] h-[8%] w-[52%] rounded-lg border border-white/10 bg-white/8" />

            <div className="absolute inset-0 z-10">
              {floorTiles.map((tile) => (
                <button
                  key={tile.id}
                  type="button"
                  onClick={() => handleTileClick(tile)}
                  className="iso-tile absolute"
                  style={{ left: `${tile.x}%`, top: `${tile.y}%` }}
                  title="Walk here"
                >
                  <span className="sr-only">Walk here</span>
                </button>
              ))}
            </div>

            <div className="absolute inset-0 z-30">
              {integrityDistrictLocations.map((location) => {
                const Icon = locationIcons[location.id] || MapPin;
                const isActive = activeLocation.id === location.id;
                const isVisited = visitedLocations.includes(location.id);

                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => handleLocationClick(location)}
                    className={`absolute flex max-w-[138px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-lg border px-3 py-2 text-center text-xs font-bold shadow-soft transition hover:-translate-y-[55%] hover:border-amber-200 hover:bg-white hover:text-navy-950 ${
                      isActive
                        ? "border-amberAccent bg-amberAccent text-navy-950"
                        : "border-white/20 bg-navy-950/90 text-white"
                    }`}
                    style={{ left: `${location.x}%`, top: `${location.y}%` }}
                    title={`Walk to ${location.name}`}
                  >
                    <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      {isVisited ? (
                        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-success ring-2 ring-white" />
                      ) : null}
                    </span>
                    <span className="leading-tight">{location.name}</span>
                  </button>
                );
              })}
            </div>

            <div
              className="avatar-walker absolute z-40 transition-all duration-700 ease-out"
              style={{
                left: `${avatarPosition.x}%`,
                top: `${avatarPosition.y}%`,
              }}
            >
              <AvatarFigure avatar={player.avatar} name={player.name} size="map" />
              <span className="absolute left-1/2 top-full -translate-x-1/2 rounded-full bg-navy-950 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-soft">
                {player.name || "You"}
              </span>
            </div>
          </div>
        </div>

        <aside className="rounded-lg bg-white p-5 text-navy-950 shadow-soft sm:p-6">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                Current Location
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-normal">
                {activeLocation.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">
                {activeLocation.type}
              </p>
            </div>
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-navy-900 text-amber-200">
              {(() => {
                const Icon = locationIcons[activeLocation.id] || Landmark;
                return <Icon className="h-6 w-6" aria-hidden="true" />;
              })()}
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-6 text-slate-600">
              {activeLocation.description}
            </p>
            <div className="mt-3 flex items-start gap-2 text-sm font-semibold text-risk">
              <MailWarning className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
              <span>{activeLocation.clue}</span>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                Encounter {questionNumber}
              </p>
              <span className="rounded-lg bg-navy-900 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white">
                {question.category}
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-amberAccent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <h3 className="mt-5 text-xl font-bold leading-8 tracking-normal text-navy-950">
              {question.question}
            </h3>
          </div>

          <div className="mt-5 grid gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                type="button"
                disabled={answered}
                onClick={() => onAnswer(option)}
                className={`flex w-full items-start justify-between gap-3 rounded-lg border px-4 py-3 text-left text-sm font-semibold leading-6 transition ${optionClass(
                  option,
                  selectedAnswer,
                  question.correctAnswer,
                )}`}
              >
                <span>{option}</span>
                {answered && option === question.correctAnswer ? (
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-none text-success"
                    aria-hidden="true"
                  />
                ) : null}
                {answered &&
                option === selectedAnswer &&
                option !== question.correctAnswer ? (
                  <XCircle
                    className="mt-0.5 h-5 w-5 flex-none text-risk"
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            ))}
          </div>

          {answered ? (
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${
                    isCorrect ? "bg-emerald-100 text-success" : "bg-orange-100 text-risk"
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                  )}
                </div>
                <div>
                  <p
                    className={`text-base font-bold ${
                      isCorrect ? "text-success" : "text-risk"
                    }`}
                  >
                    {isCorrect ? "Right call made" : "Risk detected"}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Correct answer:{" "}
                    <span className="font-semibold text-navy-950">
                      {question.correctAnswer}
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm font-bold text-navy-950">Case Note</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {question.explanation}
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="text-sm font-bold text-navy-950">
                    Why It Matters
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {question.whyItMatters}
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <div className="flex items-center gap-2 text-risk">
                    <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                    <p className="text-sm font-bold">Red Flag</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {question.redFlag}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onNext}
                title="Continue adventure"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
              >
                {questionNumber === totalQuestions ? "Finish Adventure" : "Walk to Next Case"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </aside>
      </section>
    </main>
  );
};

export default AdventureMap;
