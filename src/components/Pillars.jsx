import { Leaf, Droplet, Heart } from "lucide-react";
import { PILLARS, COLORS } from "../data/content";

const ICONS = { Leaf, Droplet, Heart };

export default function Pillars({ style }) {
  return (
    <div className="pillars" style={style}>
      {PILLARS.map((p) => {
        const Icon = ICONS[p.icon];
        return (
          <div className="pillar" key={p.title}>
            <div className="pillar-icon">
              <Icon size={22} color={COLORS.violet} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
