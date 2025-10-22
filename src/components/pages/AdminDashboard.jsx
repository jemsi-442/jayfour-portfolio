import React from "react";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin");
  };

  return (
    <div className="bg-dark text-light min-vh-100 p-4">
      <Container>
        <h1 className="mb-4">📊 Admin Dashboard</h1>
        <Button variant="danger" onClick={handleLogout}>Logout</Button>

        <div className="mt-4">
          {/* Hapa ndio utaweka components zako za settings */}
          <p>✅ Manage Services</p>
          <p>✅ Manage Homepage Content</p>
          <p>✅ View Customer Requests</p>
        </div>
      </Container>
    </div>
  );
}
