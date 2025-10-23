import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

import Home from "./components/pages/Home.jsx";
import Services from "./components/pages/Services.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";
import Analytics from "./components/pages/Dashboard/Analytics.jsx";
import Settings from "./components/pages/Dashboard/Settings.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="p-3 bg-black shadow-lg sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h3 className="m-0 text-primary">JAYFOUR X JEMSI DEV</h3>
        <div className="d-flex align-items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>

          {user && user.role === "admin" && (
            <>
              <NavLink to="/dashboard" className="text-light mx-2">Dashboard</NavLink>
              <NavLink to="/analytics" className="text-light mx-2">Analytics</NavLink>
              <NavLink to="/settings" className="text-light mx-2">Settings</NavLink>
              <button className="btn btn-sm btn-danger mx-2" onClick={logout}>Logout</button>
            </>
          )}
          {!user && (
            <>
              <NavLink to="/login" className="text-light mx-2">Login</NavLink>
              <NavLink to="/signup" className="text-light mx-2">Signup</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute adminOnly={true}><Dashboard /></PrivateRoute>} />
          <Route path="/analytics" element={<PrivateRoute adminOnly={true}><Analytics /></PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute adminOnly={true}><Settings /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
