import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import Pillars from "../components/Pillars";

const INFO = [
  { icon: Phone, title: "Phone", value: "+234 911 454 1210" },
  { icon: Mail, title: "Email", value: "udohgabriel588@gmail.com" },
  { icon: MapPin, title: "Address", value: "123 Main Street, City, Country" },
  { icon: Clock, title: "Hours", value: "Mon–Fri 9am–6pm · Sat–Sun 10am–4pm" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  }

  return (
    <>
      <section className="hero-wrap">
        <div className="page-hero contact-page-hero">
          <Eyebrow color="rgba(255,255,255,0.85)">Get In Touch</Eyebrow>
          <h1 className="page-title light">We'd love to hear from you</h1>
          <p className="lead light" style={{ maxWidth: 520 }}>
            Have a question, a suggestion, or just want to say hello? Reach out and the Emi Drinks
            team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="section page-top">
        <div className="info-grid">
          {INFO.map((i) => (
            <div className="info-card" key={i.title}>
              <i.icon size={20} color="#5E17EB" />
              <h4>{i.title}</h4>
              <span>{i.value}</span>
            </div>
          ))}
        </div>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a message</h3>
            <label>
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we help?"
              />
            </label>
            <button type="submit" className="btn-primary">
              Send message <ArrowRight size={16} />
            </button>
            {sent && (
              <p className="form-confirm">
                Message sent — thanks for reaching out. We'll be in touch soon.
              </p>
            )}
          </form>

          <div className="branches-card">
            <h3>Find us</h3>
            <div className="branch-chips">
              {["Lagos", "Los Santos", "Stanford"].map((b) => (
                <span key={b} className="chip">
                  <MapPin size={14} /> {b}
                </span>
              ))}
            </div>
            <h3 style={{ marginTop: 28 }}>Follow along</h3>
            <div className="socials dark">
              <a href="#" aria-label="Instagram" className="icon-btn">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="icon-btn">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <Pillars style={{ marginTop: 60 }} />
      </section>
    </>
  );
}
