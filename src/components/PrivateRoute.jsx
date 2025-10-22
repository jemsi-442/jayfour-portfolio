import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children, adminOnly = false }) {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/" replace />;
  if (adminOnly && user.role !== "admin") return <Navigate to="/" replace />;
  return children;
}
