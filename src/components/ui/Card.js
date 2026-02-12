import { cn } from "@/lib/utils";

export default function Card({ children, className, hover = true }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-surface/60 backdrop-blur-sm border border-border p-6 transition-all duration-300",
        hover && "hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
