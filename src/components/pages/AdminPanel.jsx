import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function AdminPanel() {
  const { logoutAdmin } = useContext(AuthContext);

  return (
    <div className="container py-5 text-light">
      <h1 className="text-primary mb-4">Admin Panel ⚙️</h1>
      <p>Karibu kwenye sehemu ya settings ya admin.</p>

      <button className="btn btn-danger mt-3" onClick={logoutAdmin}>
        Logout
      </button>
    </div>
  );
}
