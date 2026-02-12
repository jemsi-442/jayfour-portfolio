import { profile, navLinks } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="text-xl font-bold text-foreground hover:text-accent transition-colors duration-300"
            >
              <span className="text-accent">&lt;</span>
              {profile.name.split(" ")[0]}
              <span className="text-accent"> /&gt;</span>
            </a>
            <p className="mt-3 text-foreground-secondary text-sm leading-relaxed max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground-secondary hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-full text-foreground-secondary hover:text-accent hover:bg-surface transition-all duration-200"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full text-foreground-secondary hover:text-accent hover:bg-surface transition-all duration-200"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={profile.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full text-foreground-secondary hover:text-[#25D366] hover:bg-surface transition-all duration-200"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2 rounded-full text-foreground-secondary hover:text-accent hover:bg-surface transition-all duration-200"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex items-center justify-center">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
