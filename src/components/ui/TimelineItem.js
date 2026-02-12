import Badge from "./Badge";
import Card from "./Card";

export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
  tags = [],
  isLast = false,
}) {
  return (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[15px] top-6 bottom-0 w-px bg-border group-hover:bg-accent/30 transition-colors duration-300" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1 top-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-background border-2 border-accent flex items-center justify-center z-10">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-accent" />
      </div>

      {/* Year badge */}
      <span className="inline-block font-mono text-sm text-accent font-semibold mb-3">
        {year}
      </span>

      {/* Content card */}
      <Card className="ml-0">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
          {title}
        </h3>
        <p className="text-accent font-medium mb-3">{subtitle}</p>
        {description && (
          <p className="text-foreground-secondary text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="accent">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
