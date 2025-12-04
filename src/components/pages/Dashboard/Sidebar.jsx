import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">JAYFOUR Admin</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-purple-400"> Dashboard</Link>
        <Link to="/services" className="hover:text-purple-400"> Services</Link>
        <Link to="/analytics" className="hover:text-purple-400">Analytics</Link>
        <Link to="/settings" className="hover:text-purple-400">⚡ Settings</Link>
      </nav>
    </div>
  );
}
