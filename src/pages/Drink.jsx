import Eyebrow from "../components/Eyebrow";
import CapCard from "../components/CapCard";
import { FLAVORS } from "../data/content";

export default function Drink() {
  return (
    <section className="section page-top">
      <Eyebrow>Six Flavors, Zero Shortcuts</Eyebrow>
      <h1 className="page-title">The Menu</h1>
      <p className="lead" style={{ maxWidth: 560 }}>
        Every Emi Drink starts with real fruit. Pick a mood, pick a bottle.
      </p>
      <div className="cap-grid three">
        {FLAVORS.map((f) => (
          <CapCard flavor={f} key={f.key} />
        ))}
      </div>
    </section>
  );
}
