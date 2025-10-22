import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="d-flex justify-content-between align-items-center p-3 bg-dark text-light">
      <Link to="/" className="text-light text-decoration-none fw-bold">
        JAYFOUR
      </Link>

      <div>
        {user ? (
          <>
            <span className="me-3">👋 {user.name}</span>
            <button
              className="btn btn-sm btn-danger"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary me-2">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-success">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
