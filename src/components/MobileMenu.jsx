import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { NAV } from "../data/content";

export default function MobileMenu({ onClose }) {
  return (
    <div className="mobile-overlay">
      <button className="mobile-close" onClick={onClose} aria-label="Close menu">
        <X size={26} />
      </button>
      <div className="mobile-overlay-inner">
        <div className="mobile-overlay-logo">Emi <span>Drinks!</span></div>
        <nav className="mobile-overlay-nav">
          {NAV.map((item) => (
            <div key={item.path}>
              {item.label === "Contact" && <span className="mobile-overlay-divider" />}
              <NavLink to={item.path} className="mobile-overlay-link" onClick={onClose}>
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
