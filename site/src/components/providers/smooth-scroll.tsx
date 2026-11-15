"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";

function subscribe(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function useReducedMotionPreference() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotionPreference();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Lenis drives a continuous rAF loop for the life of the page - starting
    // it a beat after mount keeps it from competing with hydration for
    // main-thread time during the window Lighthouse scores TBT/TTI in.
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 1000 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(id);
  }, []);

  if (reducedMotion || !ready) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
