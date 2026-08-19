"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (shouldReduceMotion) {
      node.textContent = `${prefix}${to}${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.19, 1, 0.22, 1],
      onUpdate(value) {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, to, suffix, prefix, duration, shouldReduceMotion]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
