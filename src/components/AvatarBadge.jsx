import { Sparkles } from "lucide-react";
import { defaultAvatar } from "../data/avatarOptions.js";
import AvatarFigure from "./AvatarFigure.jsx";

const AvatarBadge = ({ avatar = defaultAvatar, name = "Player", size = "md" }) => {
  const character = { ...defaultAvatar, ...avatar };
  const figureSize = size === "lg" ? "md" : "sm";

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-16 w-16 flex-none items-end justify-center overflow-hidden rounded-lg border border-white/20 bg-slate-100 shadow-soft">
        <AvatarFigure avatar={character} name={name} size={figureSize} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-inherit">
          {character.codename || "Integrity Agent"}
        </p>
        <div className="mt-1 flex items-center gap-1 text-xs font-semibold opacity-70">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          <span>{character.signal || character.gender}</span>
        </div>
      </div>
    </div>
  );
};

export default AvatarBadge;
