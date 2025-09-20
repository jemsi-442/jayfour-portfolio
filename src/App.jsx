import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Analytics from "./components/pages/Dashboard/Analytics";
import Settings from "./components/pages/Dashboard/Settings";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

// Navbar
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const linkClass = ({ isActive }) => isActive ? "text-primary mx-2 fw-bold" : "text-light mx-2";

  return (
    <nav className="p-3 bg-black shadow-lg sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="m-0 text-primary">JAYFOURx TECH CAMP</h3>
        <div className="d-flex align-items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>

          {user && user.role === "admin" && (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              <NavLink to="/analytics" className={linkClass}>Analytics</NavLink>
              <NavLink to="/settings" className={linkClass}>Settings</NavLink>
            </>
          )}

          {!user ? (
            <>
              <NavLink to="/login" className={linkClass}>Login</NavLink>
              <NavLink to="/signup" className={linkClass}>Signup</NavLink>
            </>
          ) : (
            <button className="btn btn-sm btn-danger mx-2" onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
}

// App
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-dark text-light min-vh-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />

            <Route path="/dashboard" element={<PrivateRoute adminOnly={true}><Dashboard /></PrivateRoute>} />
            <Route path="/analytics" element={<PrivateRoute adminOnly={true}><Analytics /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute adminOnly={true}><Settings /></PrivateRoute>} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
