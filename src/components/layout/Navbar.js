"use client";

import { useState, useEffect } from "react";
import { navLinks, profile } from "@/lib/data";
import useScrollSpy from "@/hooks/useScrollSpy";
import { MenuIcon, XIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        scrolled
          ? "bg-background/70 border-border shadow-lg shadow-black/10"
          : "bg-background/30 border-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold text-foreground hover:text-accent transition-colors duration-300"
        >
          <span className="text-accent">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="text-accent"> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  activeId === id
                    ? "text-accent bg-accent/10"
                    : "text-foreground-secondary hover:text-foreground hover:bg-surface"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground-secondary hover:text-accent transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 z-40 transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Menu */}
        <div
          className={cn(
            "relative bg-surface border-b border-border p-6 transition-transform duration-300",
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-xl transition-all duration-200",
                    activeId === id
                      ? "text-accent bg-accent/10"
                      : "text-foreground-secondary hover:text-foreground hover:bg-background"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
