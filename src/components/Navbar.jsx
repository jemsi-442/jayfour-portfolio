import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // hakikisha hii ipo

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-black text-light shadow-lg py-3 sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="mb-0">JAYFOUR Ghost Dashboard</h2>

        <div className="d-flex gap-4 align-items-center">
          <Link to="/" className="text-light hover-glow">Home</Link>
          <Link to="/services" className="text-light hover-glow">Services</Link>
          <Link to="/analytics" className="text-light hover-glow">Analytics</Link>
          <Link to="/settings" className="text-light hover-glow">Settings</Link>

          {/* Dashboard itaonekana kwa admin pekee */}
          {user?.role === "admin" && (
            <Link to="/dashboard" className="text-light hover-glow">
              Dashboard
            </Link>
          )}

          {/* Auth controls */}
          {!user ? (
            <>
              <Link to="/login" className="text-light hover-glow">Login</Link>
              <Link to="/signup" className="text-light hover-glow">Signup</Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="btn btn-sm btn-danger ms-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
