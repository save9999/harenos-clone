import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  dot = false,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)] ring-1 ring-[var(--color-line)]",
        className,
      )}
    >
      {dot && <span className="size-1.5 rounded-full bg-[var(--color-brand)]" />}
      {children}
    </span>
  );
}
