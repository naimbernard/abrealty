"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.19, 1, 0.22, 1] as const;

/**
 * The site's one signature scroll-reveal: content resolves from behind a
 * soft, warm, lattice-textured veil - like light easing through an
 * oyster-shell (Xavier) window - instead of a generic fade-up. Reserved
 * for the handful of moments that should feel special (see design plan);
 * everywhere else keeps the lighter FadeIn/StaggerReveal. GPU-cheap: only
 * opacity, transform and a brief blur are animated.
 */
export function LatticeReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className} style={{ position: "relative" }}>
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 0, scale: 1.08 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, delay: delay + 0.05, ease: EASE }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(52deg, color-mix(in oklch, var(--gold) 55%, transparent) 0, color-mix(in oklch, var(--gold) 55%, transparent) 1.5px, transparent 1.5px, transparent 15px), repeating-linear-gradient(-52deg, color-mix(in oklch, var(--gold) 55%, transparent) 0, color-mix(in oklch, var(--gold) 55%, transparent) 1.5px, transparent 1.5px, transparent 15px), linear-gradient(color-mix(in oklch, var(--ivory) 85%, transparent), color-mix(in oklch, var(--ivory) 85%, transparent))",
        }}
      />
    </div>
  );
}
