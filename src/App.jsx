import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from "./layouts/PublicLayout";

// Public pages
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import NotFound from "./components/pages/NotFound";

// Dashboard
import Analytics from "./components/pages/Dashboard/Analytics";
import Settings from "./components/pages/Dashboard/Settings";

function App() {
  return (
    <Router>
      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* DASHBOARD - NO NAVBAR */}
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/settings" element={<Settings />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
