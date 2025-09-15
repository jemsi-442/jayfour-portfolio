import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark text-light text-center">
      <h1>Welcome to JAYFOUR Portfolio</h1>
      <p className="lead mt-3">
        {user ? `Logged in as ${user.name}` : "Please login or signup to continue."}
      </p>
      {!user && (
        <div className="mt-4">
          <Link to="/signup" className="btn btn-primary me-2">Signup</Link>
          <Link to="/login" className="btn btn-secondary">Login</Link>
        </div>
      )}
    </div>
  );
}
