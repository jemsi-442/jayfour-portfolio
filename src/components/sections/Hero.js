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

      {/* Emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-75 h-75 bg-accent/3 rounded-full blur-2xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up">
              <span className="inline-block font-mono text-accent text-sm md:text-base mb-4">
                Hello, I&apos;m
              </span>
            </div>

            <h1 className="animate-fade-in-up delay-100">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {profile.name.split(" ")[0]}
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent leading-tight">
                {profile.name.split(" ")[1]}
              </span>
            </h1>

            {/* Title with typing cursor */}
            <div className="animate-fade-in-up delay-200 mt-4 mb-6">
              <span className="text-lg md:text-xl text-foreground-secondary font-mono border-r-2 border-accent pr-1 animate-[typing-cursor_1s_ease-in-out_infinite]">
                {profile.title}
              </span>
            </div>

            <p className="animate-fade-in-up delay-300 text-foreground-secondary text-base md:text-lg max-w-lg leading-relaxed mb-8">
              {profile.tagline}
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 mb-8">
              <Button href="#projects" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="animate-fade-in-up delay-500 flex items-center gap-4">
              <span className="text-sm text-foreground-muted">Find me on</span>
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

          {/* Right - Tech Flow Visualization */}
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
          <span className="text-xs font-mono">Scroll</span>
          <ChevronDownIcon size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
