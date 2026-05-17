import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)]",
  secondary:
    "bg-white text-[var(--color-ink)] ring-1 ring-[var(--color-line-strong)] hover:bg-neutral-50",
  ghost:
    "bg-transparent text-[var(--color-ink)] hover:bg-neutral-100",
  dark:
    "bg-[var(--color-ink)] text-white hover:bg-black",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-paper)]";

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = Common & { href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className, children } = props;
  const merged = cn(base, styles[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={merged}>
        {children}
      </Link>
    );
  }
  const { variant: _v, className: _c, children: _ch, ...rest } = props as ButtonProps;
  return (
    <button className={merged} {...rest}>
      {children}
    </button>
  );
}
