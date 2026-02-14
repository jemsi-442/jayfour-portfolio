import Image from "next/image";
import { profile, stats } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <AnimateOnScroll>
          <SectionHeading
            title="Engineering Philosophy"
            subtitle="Systems over features. Architecture over shortcuts."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Profile Image */}
          <AnimateOnScroll animation="animate-slide-in-left">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 bg-linear-to-r from-accent/10 to-accent/5 rounded-2xl blur-xl" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src={profile.profileImage}
                  alt={`${profile.name} - Backend Systems Engineer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 384px, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Right - Authority Text */}
          <div>
            <AnimateOnScroll animation="animate-slide-in-right">
              <div className="space-y-6 mb-8">

                <p className="text-foreground-secondary leading-relaxed text-base md:text-lg">
                  I approach software engineering from a systems perspective. 
                  My work focuses on designing structured backend architectures, 
                  scalable APIs, and secure authentication-driven workflows that 
                  remain maintainable as complexity grows.
                </p>

                <p className="text-foreground-secondary leading-relaxed text-base md:text-lg">
                  Rather than building isolated features, I design foundations — 
                  role-based access control systems, structured business logic layers, 
                  modular service architecture, and database models optimized 
                  for performance and long-term extensibility.
                </p>

                <p className="text-foreground-secondary leading-relaxed text-base md:text-lg">
                  My engineering mindset is guided by clean architecture principles, 
                  security awareness, and production-readiness. Every system I build 
                  is designed to be resilient, logically structured, and capable of 
                  evolving without breaking under scale.
                </p>

                <p className="text-foreground-secondary leading-relaxed text-base md:text-lg">
                  Working primarily within Linux-based environments, I emphasize 
                  backend performance optimization, API integrity, structured 
                  validation, and secure system design practices that align with 
                  real-world deployment standards.
                </p>

              </div>
            </AnimateOnScroll>

            {/* Stats - Repositioned as Engineering Indicators */}
            <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-surface/60 border border-border hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-foreground-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
}
