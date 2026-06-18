import { defaultAvatar } from "../data/avatarOptions.js";

const sizeClasses = {
  sm: "scale-[0.58]",
  md: "scale-[0.78]",
  lg: "scale-100",
  map: "scale-[0.72]",
};

const AvatarFigure = ({ avatar = defaultAvatar, size = "md", name = "Agent" }) => {
  const character = { ...defaultAvatar, ...avatar };
  const scaleClass = sizeClasses[size] || sizeClasses.md;
  const hasHijab = Boolean(character.hijab);
  const shoulderWidth = character.gender === "Man" ? "w-[58px]" : "w-[52px]";

  return (
    <div className="inline-flex flex-col items-center gap-1 text-current">
      <div
        className={`avatar-character relative h-[148px] w-[94px] origin-bottom ${scaleClass}`}
        aria-label={`${name} avatar`}
      >
        <div className="absolute bottom-[4px] left-[18px] h-[9px] w-[22px] rounded-full bg-black/25" />
        <div className="absolute bottom-[4px] right-[18px] h-[9px] w-[22px] rounded-full bg-black/25" />

        <div
          className="absolute bottom-[12px] left-[25px] h-[12px] w-[20px] rounded-b-lg"
          style={{ background: character.shoeColor }}
        />
        <div
          className="absolute bottom-[12px] right-[25px] h-[12px] w-[20px] rounded-b-lg"
          style={{ background: character.shoeColor }}
        />

        <div
          className="absolute bottom-[22px] left-[27px] h-[43px] w-[15px] rounded-b-lg"
          style={{ background: character.pantsColor }}
        />
        <div
          className="absolute bottom-[22px] right-[27px] h-[43px] w-[15px] rounded-b-lg"
          style={{ background: character.pantsColor }}
        />
        <div
          className="absolute bottom-[60px] left-[32px] h-[11px] w-[30px] rounded-sm"
          style={{ background: character.pantsColor }}
        />

        <div
          className={`absolute bottom-[64px] left-1/2 h-[42px] ${shoulderWidth} -translate-x-1/2 rounded-t-2xl rounded-b-lg border border-black/10`}
          style={{ background: character.topColor }}
        />
        <div
          className="absolute bottom-[83px] left-[14px] h-[13px] w-[27px] -rotate-[18deg] rounded-full border border-black/10"
          style={{ background: character.topColor }}
        />
        <div
          className="absolute bottom-[83px] right-[14px] h-[13px] w-[27px] rotate-[18deg] rounded-full border border-black/10"
          style={{ background: character.topColor }}
        />
        <div
          className="absolute bottom-[74px] left-[13px] h-[11px] w-[11px] rounded-full"
          style={{ background: character.skinTone }}
        />
        <div
          className="absolute bottom-[74px] right-[13px] h-[11px] w-[11px] rounded-full"
          style={{ background: character.skinTone }}
        />

        {!hasHijab ? (
          <div
            className="absolute bottom-[100px] left-1/2 h-[38px] w-[42px] -translate-x-1/2 rounded-t-full rounded-b-xl"
            style={{ background: character.hairColor }}
          />
        ) : null}

        {hasHijab ? (
          <div
            className="absolute bottom-[86px] left-1/2 h-[58px] w-[50px] -translate-x-1/2 rounded-t-full rounded-b-2xl border border-black/10"
            style={{ background: character.hijabColor }}
          />
        ) : null}

        <div
          className="absolute bottom-[95px] left-1/2 h-[37px] w-[37px] -translate-x-1/2 rounded-full border border-black/10"
          style={{ background: character.skinTone }}
        />
        {!hasHijab ? (
          <div
            className="absolute bottom-[126px] left-1/2 h-[15px] w-[38px] -translate-x-1/2 rounded-t-full"
            style={{ background: character.hairColor }}
          />
        ) : null}

        <div className="absolute bottom-[112px] left-[38px] h-[3px] w-[3px] rounded-full bg-navy-950" />
        <div className="absolute bottom-[112px] right-[38px] h-[3px] w-[3px] rounded-full bg-navy-950" />
        <div className="absolute bottom-[104px] left-1/2 h-[2px] w-[13px] -translate-x-1/2 rounded-full bg-navy-950/60" />
        <div
          className="absolute bottom-[72px] left-1/2 h-[8px] w-[30px] -translate-x-1/2 rounded-full border border-white/25"
          style={{ background: character.topColor }}
        />
      </div>
      {size !== "map" ? (
        <span className="max-w-[140px] truncate text-xs font-bold text-inherit">
          {character.codename || name}
        </span>
      ) : null}
    </div>
  );
};

export default AvatarFigure;
