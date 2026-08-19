import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const variants = {
  gold: "bg-gold text-navy-deep hover:bg-gold-soft",
  dark: "bg-navy-deep text-ivory hover:bg-navy",
  light: "bg-ivory text-navy-deep hover:bg-white",
  outline: "border border-ivory/40 text-ivory hover:bg-ivory/10",
};

export function CtaLink({
  href,
  children,
  variant = "gold",
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)]",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
