import Eyebrow from "../components/Eyebrow";
import Pillars from "../components/Pillars";

export default function About() {
  return (
    <>
      <section className="hero-wrap">
        <div className="page-hero about-page-hero">
          <div className="page-hero-copy">
            <Eyebrow color="rgba(255,255,255,0.85)">Our Story</Eyebrow>
            <h1 className="page-title light">Refreshingly real. Naturally.</h1>
            <p className="lead light">
              At Emi Drinks, we believe refreshment should be real, simple, and made with nature
              in mind. Our Sparkling Blue Orange Drink is crafted with natural ingredients and the
              sweet taste of sun-ripened oranges, made to bring a burst of joy to every sip.
            </p>
            <p className="lead light">
              We're not just making drinks — we're creating moments of happiness, energy, and
              connection.
            </p>
          </div>
          <div className="page-hero-art">
            <img src="../assets/main.png" alt="Emi Drinks bottle" />
          </div>
        </div>
      </section>

      <section className="section pillars-band">
        <Pillars />
      </section>

      <section className="section quote-band">
        <p>
          &ldquo;Our mission is to deliver high-quality, great-tasting drinks that refresh your
          body and brighten your day &mdash; naturally.&rdquo;
        </p>
      </section>
    </>
  );
}
