import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import CapCard from "../components/CapCard";
import Bubbles from "../components/Bubbles";
import Pillars from "../components/Pillars";
import { FLAVORS } from "../data/content";

export default function Home() {
  const navigate = useNavigate();
  const flagship = FLAVORS[0];
  const teaser = FLAVORS.slice(1, 4);

  return (
    <>
      <section className="hero-wrap">
        <div className="hero-banner">
          <Bubbles />
          <span className="ghost-emi">EMI</span>
          <span className="hero-drinks">Drinks!</span>
          <div className="hero-can">
            <img src={"../assets/main.png"} alt="Sparkling Blue can" />
          </div>
          <div className="hero-caption">
            <h2>Sparkling Blue</h2>
            <p>
              Enjoy the sweet, refreshing taste of sun-ripened oranges. Experience a burst of
              authentic fruit flavor in every sip of our Emi Drink, made with natural ingredients.
            </p>
            <button className="btn-light" onClick={() => navigate("/drink")}>
              See More
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <Eyebrow>Every Mood Has A Flavor</Eyebrow>
        <div className="section-head">
          <h2>Grab your favorite</h2>
          <button className="link-btn" onClick={() => navigate("/drink")}>
            View full menu <ArrowRight size={15} />
          </button>
        </div>
        <div className="cap-grid">
          {teaser.map((f) => (
            <CapCard flavor={f} key={f.key} />
          ))}
        </div>
      </section>

      <section className="section pillars-band">
        <Eyebrow color="#3D0FA8">Why Emi</Eyebrow>
        <h2>Refreshingly real, naturally.</h2>
        <Pillars style={{ margin: "28px 0 8px" }} />
        <button className="link-btn" onClick={() => navigate("/about")}>
          Learn more about us <ArrowRight size={15} />
        </button>
      </section>
    </>
  );
}
