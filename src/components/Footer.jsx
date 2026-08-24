import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { NAV } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-mark" style={{ color: "#fff" }}>
            <span className="fizz-dot" />
            EMI
          </span>
          <p>Real fruit, real fizz, real good — a bottle for every mood.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram" className="icon-btn light">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="icon-btn light">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          {NAV.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <span>+234 911 454 1210</span>
          <span>udohgabriel588@gmail.com</span>
          <span>123 Main Street, City, Country</span>
        </div>

        <div className="footer-col">
          <h4>Branches</h4>
          <span>Lagos</span>
          <span>Los Santos</span>
          <span>Stanford</span>
        </div>
      </div>
      <div className="footer-bottom">© 2025–2026 Emi Drinks. All rights reserved.</div>
    </footer>
  );
}
