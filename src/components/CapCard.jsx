import { Droplet } from "lucide-react";

export default function CapCard({ flavor, big }) {
  return (
    <div className={`cap-card ${big ? "cap-card-big" : ""}`}>
      <div className="cap-edge" style={{ "--cap-color": flavor.color }} />
      <div
        className="cap-body"
        style={{ background: flavor.color, color: flavor.text }}
      >
        {flavor.tag && <span className="cap-tag">{flavor.tag}</span>}
        <div className="cap-media">
          {flavor.img ? (
            <img src={flavor.img} alt={flavor.name} />
          ) : (
            <Droplet size={big ? 72 : 52} strokeWidth={1.4} />
          )}
        </div>
        <h3 className="cap-title">{flavor.name}</h3>
        <p className="cap-desc">{flavor.desc}</p>
      </div>
    </div>
  );
}
