import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hapa unaweza kuunganisha na backend (API) — kwa sasa simple check tu
    if (credentials.username === "admin" && credentials.password === "1234") {
      login({ username: "admin", role: "admin" });
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <Container style={{ maxWidth: "400px" }}>
        <Card className="p-4 bg-black border border-secondary shadow-lg">
          <h3 className="mb-4 text-center">Admin Panel</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" className="w-100 btn btn-primary">
              Login
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
