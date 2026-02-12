import { cn } from "@/lib/utils";

export default function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
