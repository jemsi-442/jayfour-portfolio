"use client";

import { education } from "@/lib/data";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Education & System Mastery"
            subtitle="Structured learning that shaped my backend architecture expertise"
          />
        </AnimateOnScroll>

        <div className="mt-12 relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full border-l-2 border-accent/30" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <AnimateOnScroll
                key={`${item.institution}-${index}`}
                animation="animate-fade-in-up"
                delay={index * 150}
              >
                <div className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-accent mt-1.5" />
                  </div>

                  {/* Education content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-sm text-foreground-muted">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-foreground-secondary text-sm md:text-base mt-1.5 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-foreground-secondary text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Optional: highlight backend/system focus */}
                    {item.title.toLowerCase().includes("software") && (
                      <p className="mt-2 text-xs sm:text-sm font-mono text-accent">
                        Focus: Backend Architecture, System Design, Secure Development
                      </p>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
