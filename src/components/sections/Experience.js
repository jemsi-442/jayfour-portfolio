"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/data";

const cardStyles = [
  { bg: "#0d1f17", accent: "#10b981" },
  { bg: "#101f10", accent: "#22c55e" },
  { bg: "#171f0d", accent: "#84cc16" },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;
      setInView(visible);

      if (visible) {
        const cards = sectionRef.current.querySelectorAll("[data-exp-card]");
        let current = 0;
        cards.forEach((card, i) => {
          const cardRect = card.getBoundingClientRect();
          if (cardRect.top <= window.innerHeight * 0.4) {
            current = i;
          }
        });
        setActiveIndex(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative">
      {/* Section header */}
      <div className="bg-background pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent mb-3">
            Work Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            A professional journey,
            <br />
            <span className="text-accent">from learning to leading</span>
          </h2>
        </div>
      </div>

      {/* Stacking cards - each sticks at top and gets covered by the next */}
      {experience.map((item, i) => (
        <div
          key={item.company}
          data-exp-card={i}
          className="sticky top-0 min-h-screen flex items-center"
          style={{
            zIndex: i + 10,
            background: `linear-gradient(160deg, ${cardStyles[i].bg} 0%, #0a0a0a 60%)`,
          }}
        >
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 hero-grid opacity-[0.12]" />

          {/* Top border accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ backgroundColor: cardStyles[i].accent + "30" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              {/* Left - Step number */}
              <div className="lg:col-span-3">
                <span
                  className="block text-7xl sm:text-8xl md:text-9xl font-bold font-mono leading-none select-none"
                  style={{ color: cardStyles[i].accent, opacity: 0.12 }}
                >
                  0{i + 1}
                </span>
                <div className="mt-3 flex items-center gap-2">
                  <div
                    className="w-8 h-0.5"
                    style={{ backgroundColor: cardStyles[i].accent }}
                  />
                  <span
                    className="text-[10px] sm:text-xs font-mono uppercase tracking-widest"
                    style={{ color: cardStyles[i].accent }}
                  >
                    Step 0{i + 1} of 0{experience.length}
                  </span>
                </div>
              </div>

              {/* Right - Content */}
              <div className="lg:col-span-9">
                {/* Year badge */}
                <span
                  className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full border mb-5"
                  style={{
                    color: cardStyles[i].accent,
                    borderColor: cardStyles[i].accent + "40",
                    backgroundColor: cardStyles[i].accent + "10",
                  }}
                >
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                {/* Company */}
                <p
                  className="text-base sm:text-lg md:text-xl font-medium mb-5 md:mb-6"
                  style={{ color: cardStyles[i].accent }}
                >
                  {item.company}
                </p>

                {/* Description */}
                <p className="text-foreground-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border"
                      style={{
                        color: cardStyles[i].accent,
                        borderColor: cardStyles[i].accent + "30",
                        backgroundColor: cardStyles[i].accent + "08",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint on last card */}
          {i === experience.length - 1 && (
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <span className="text-[10px] sm:text-xs text-foreground-muted font-mono uppercase tracking-wider">
                Continue
              </span>
              <div className="w-5 h-8 rounded-full border-2 border-foreground-muted/30 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-foreground-muted/50 animate-[bounce_1.5s_infinite]" />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Fixed progress dots - only visible when section is in view */}
      <div
        className="fixed right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40 transition-opacity duration-300"
        style={{ opacity: inView ? 1 : 0, pointerEvents: inView ? "auto" : "none" }}
      >
        {experience.map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full transition-all duration-500"
            style={{
              backgroundColor: activeIndex === i ? cardStyles[i].accent : "var(--border)",
              transform: activeIndex === i ? "scale(1.5)" : "scale(1)",
              boxShadow: activeIndex === i ? `0 0 10px ${cardStyles[i].accent}` : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}
