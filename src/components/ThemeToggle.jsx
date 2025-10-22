import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.theme === "dark" || false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-auto px-3 py-1 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
