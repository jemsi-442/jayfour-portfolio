import Badge from "./Badge";
import { ExternalLinkIcon, GithubIcon } from "@/components/icons";

export default function ProjectCard({
  title,
  description,
  tags = [],
  liveUrl,
  sourceUrl,
  placeholder = false,
}) {
  return (
    <div className="group rounded-2xl bg-surface/60 backdrop-blur-sm border border-border overflow-hidden transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-glow">
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-accent/5 via-background-secondary to-accent/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors duration-300 select-none">
            {title.charAt(0)}
          </div>
        </div>
        {/* Decorative grid overlay */}
        <div className="absolute inset-0 hero-grid opacity-30" />
        {placeholder && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-mono bg-accent/20 text-accent rounded-md">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          {liveUrl && (
            <a
              href={liveUrl}
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent transition-colors duration-200"
              aria-label={`Live demo of ${title}`}
            >
              <ExternalLinkIcon size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-accent transition-colors duration-200"
              aria-label={`Source code of ${title}`}
            >
              <GithubIcon size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
