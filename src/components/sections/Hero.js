import { profile } from "@/lib/data";
import Button from "@/components/ui/Button";
import TechFlow from "@/components/ui/TechFlow";
import { GithubIcon, LinkedinIcon, ChevronDownIcon, WhatsAppIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-40" />

      {/* Subtle glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-75 h-75 bg-accent/3 rounded-full blur-2xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Authority Content */}
          <div className="order-2 lg:order-1">

            <div className="animate-fade-in-up">
              <span className="inline-block font-mono text-accent text-sm md:text-base mb-4 tracking-wide">
                Backend Systems Engineer
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Architecting
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight">
                Scalable & Secure Systems
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200 mt-6 text-base md:text-lg text-foreground-secondary max-w-xl leading-relaxed">
              I design and engineer production-grade backend architectures, 
              structured APIs, and authentication-driven systems built for 
              scalability, security, and long-term maintainability. 
              My focus is not just writing code but building systems 
              that remain reliable under real-world conditions.
            </p>

            {/* Strategic positioning line */}
            <p className="animate-fade-in-up delay-300 mt-4 text-sm md:text-base text-foreground-muted max-w-lg">
              Specializing in backend architecture, role-based access control,
              API security, structured business logic, and performance-focused
              system design.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 mt-8 mb-8">
              <Button href="#projects" size="lg">
                Explore Systems
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Discuss a Project
              </Button>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-4">
              <span className="text-sm text-foreground-muted">Connect</span>
              <div className="h-px w-8 bg-border" />

              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 text-foreground-secondary hover:text-accent transition-colors duration-200"
              >
                <GithubIcon size={22} />
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 text-foreground-secondary hover:text-accent transition-colors duration-200"
              >
                <LinkedinIcon size={22} />
              </a>

              <a
                href={profile.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 text-foreground-secondary hover:text-[#25D366] transition-colors duration-200"
              >
                <WhatsAppIcon size={22} />
              </a>
            </div>
          </div>

          {/* Right - Tech Visualization */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="animate-scale-in delay-200">
              <TechFlow />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-foreground-muted hover:text-accent transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono tracking-wide">
            View Architecture Philosophy
          </span>
          <ChevronDownIcon size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
