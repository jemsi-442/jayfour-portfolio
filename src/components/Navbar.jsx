import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css"; // ensure it's linked

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <h2 className="logo">JAYFOUR TECH</h2>

        {/* HAMBURGER */}
        <div className={`hamburger ${open ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink onClick={closeMenu} to="/">Home</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/services">Services</NavLink></li>
        </ul>

      </div>
    </nav>
  );
}
