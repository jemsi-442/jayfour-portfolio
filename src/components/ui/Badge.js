import { cn } from "@/lib/utils";

export default function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300",
        variant === "default" &&
          "bg-surface text-foreground-secondary border border-border hover:border-accent hover:text-accent",
        variant === "accent" &&
          "bg-accent/10 text-accent border border-accent/20",
        className
      )}
    >
      {children}
    </span>
  );
}
