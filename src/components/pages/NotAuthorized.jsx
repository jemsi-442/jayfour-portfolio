import React from "react";
import { Link } from "react-router-dom";

export default function NotAuthorized() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light">
      <h1 className="text-danger mb-3">Access Denied 🚫</h1>
      <p>Huna ruhusa kufikia ukurasa huu.</p>
      <Link to="/" className="btn btn-primary mt-3">Rudi Nyumbani</Link>
    </div>
  );
}
