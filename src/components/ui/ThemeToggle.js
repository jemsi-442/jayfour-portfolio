"use client";

import { useSyncExternalStore, useCallback } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

function getThemeSnapshot() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") || "dark";
}

function getServerSnapshot() {
  return "dark";
}

function subscribeToTheme(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  // Sync data-theme attribute
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
    // Dispatch storage event to trigger re-render
    window.dispatchEvent(new StorageEvent("storage", { key: "theme", newValue: next }));
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-foreground-secondary hover:text-accent hover:bg-surface transition-all duration-300 cursor-pointer"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}
