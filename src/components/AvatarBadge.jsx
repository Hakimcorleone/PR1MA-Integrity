import { ShieldCheck, Sparkles } from "lucide-react";
import { defaultAvatar } from "../data/avatarOptions.js";

const sizeMap = {
  sm: {
    frame: "h-12 w-12",
    head: "h-5 w-5",
    body: "h-5 w-8",
    icon: "h-3 w-3",
  },
  md: {
    frame: "h-16 w-16",
    head: "h-6 w-6",
    body: "h-7 w-10",
    icon: "h-4 w-4",
  },
  lg: {
    frame: "h-24 w-24",
    head: "h-9 w-9",
    body: "h-10 w-16",
    icon: "h-5 w-5",
  },
};

const AvatarBadge = ({ avatar = defaultAvatar, name = "Player", size = "md" }) => {
  const dimensions = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative flex ${dimensions.frame} flex-none items-center justify-center overflow-hidden rounded-lg border border-white/20 shadow-soft`}
        style={{ background: avatar.suit }}
        aria-label={`${name} avatar`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.26),transparent_32%)]" />
        <div
          className={`${dimensions.head} absolute top-[18%] rounded-full bg-white/95`}
        />
        <div
          className={`${dimensions.body} absolute bottom-[16%] rounded-t-full bg-white/90`}
        />
        <div
          className="absolute bottom-2 right-2 flex items-center justify-center rounded-full p-1 text-navy-950"
          style={{ background: avatar.accent }}
        >
          <ShieldCheck className={dimensions.icon} aria-hidden="true" />
        </div>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-inherit">{avatar.codename}</p>
        <div className="mt-1 flex items-center gap-1 text-xs font-semibold opacity-70">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          <span>{avatar.signal}</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarBadge;
