// src/components/pages/Dashboard/Dashboard.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Analytics from "./Analytics";
import Settings from "./Settings";
import Questions from "./Questions";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("questions"); // default tab

  if (!user || user.role !== "admin") {
    return <p className="text-center mt-5">Access Denied</p>;
  }

  return (
    <div className="p-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Tabs */}
      <div className="mb-4 d-flex gap-2 flex-wrap">
        <Button
          variant={activeTab === "questions" ? "primary" : "secondary"}
          onClick={() => setActiveTab("questions")}
        >
          Questions
        </Button>
        <Button
          variant={activeTab === "analytics" ? "primary" : "secondary"}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </Button>
        <Button
          variant={activeTab === "settings" ? "primary" : "secondary"}
          onClick={() => setActiveTab("settings")}
        >
          Settings
        </Button>
      </div>

      {/* Active Tab */}
      {activeTab === "questions" && <Questions />}
      {activeTab === "analytics" && <Analytics />}
      {activeTab === "settings" && <Settings />}
    </div>
  );
}
