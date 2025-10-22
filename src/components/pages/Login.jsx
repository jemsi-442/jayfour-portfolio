import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    const { user, token } = res.data;
    setUser({ ...user, token });
    localStorage.setItem("token", token);

    navigate("/");
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light">
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-black rounded shadow-lg"
        style={{ width: "350px" }}
      >
        <h3 className="mb-3">Login</h3>

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="mb-2 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <span
            style={{ position: "absolute", top: "8px", right: "10px", cursor: "pointer" }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <Link to="/forgot-password" className="text-primary small">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
