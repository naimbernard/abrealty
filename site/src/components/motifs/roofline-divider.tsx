/**
 * A restrained echo of Goa's overlapping Mangalore clay roof tiles, used
 * as a section-boundary texture rather than a literal illustration.
 * Single-tone, low-opacity. `tone` picks the dot color so it stays visible
 * against whichever field it sits on (terracotta dots read on pale grounds;
 * ivory dots read on the bold terracotta/navy color-blocks).
 */
export function RooflineDivider({
  className,
  tone = "terracotta",
}: {
  className?: string;
  tone?: "terracotta" | "ivory";
}) {
  const dot = tone === "ivory" ? "var(--ivory)" : "var(--terracotta)";
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `radial-gradient(circle at 8px 0, ${dot} 8px, transparent 8.5px)`,
        backgroundSize: "16px 14px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center",
        opacity: tone === "ivory" ? 0.45 : 0.35,
      }}
    />
  );
}
