import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Jayfour Portfolio</h3>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#contact">Contact</Link>
      </div>
    </nav>
  );
}
