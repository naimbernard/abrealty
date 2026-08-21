/**
 * A soft, warm, diffused glow referencing Goan oyster-shell (Xavier)
 * window panes — light filtered through a wooden lattice rather than a
 * flat gradient blur. Uses only existing brand tokens (gold/terracotta).
 * Decorative only; kept out of the a11y tree.
 *
 * `tone="dark"` (default) is calibrated to sit over the photographic
 * hero. `tone="light"` carries more warmth/contrast so it still reads
 * against pale sand/ivory sections instead of washing out.
 */
export function LatticeGlow({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const glowStops =
    tone === "dark"
      ? "color-mix(in oklch, var(--gold) 38%, transparent) 0%, color-mix(in oklch, var(--gold-soft) 18%, transparent) 45%, transparent 72%"
      : "color-mix(in oklch, var(--gold) 55%, var(--terracotta) 12%) 0%, color-mix(in oklch, var(--gold-soft) 45%, transparent) 42%, transparent 72%";
  const latticeColor =
    tone === "dark"
      ? "color-mix(in oklch, var(--gold-soft) 70%, transparent)"
      : "color-mix(in oklch, var(--terracotta) 55%, var(--gold) 30%)";
  const latticeOpacity = tone === "dark" ? 0.12 : 0.16;

  return (
    <div className={className} aria-hidden>
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${glowStops})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(52deg, ${latticeColor} 0, ${latticeColor} 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-52deg, ${latticeColor} 0, ${latticeColor} 1px, transparent 1px, transparent 26px)`,
          opacity: latticeOpacity,
          maskImage: "radial-gradient(circle, black 0%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 68%)",
        }}
      />
    </div>
  );
}
