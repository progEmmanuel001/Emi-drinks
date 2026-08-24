import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { NAV } from "../data/content";
import MobileMenu from "./MobileMenu";

function NavPill() {
  return (
    <nav className="desktop-nav">
      {NAV.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) => "nav-link" + (isActive ? " nav-link-active" : "")}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo" aria-label="Emi Drinks home">
          <span className="logo-mark">
            <span className="fizz-dot" />
            EMI
          </span>
          <span className="logo-sub">drinks</span>
        </NavLink>

        <div className="nav-desktop-wrap">
          <NavPill />
        </div>

        <div className="header-actions">
          <button className="btn-primary btn-sm" onClick={() => navigate("/contact")}>
            <ShoppingBag size={16} />
            Order Now
          </button>
          <button className="icon-btn nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}
