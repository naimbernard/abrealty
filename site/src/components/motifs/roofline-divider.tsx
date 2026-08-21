/**
 * A restrained echo of Goa's overlapping Mangalore clay roof tiles, used
 * as a section-boundary texture rather than a literal illustration.
 * Single-tone, low-opacity, built from the existing terracotta token.
 */
export function RooflineDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage:
          "radial-gradient(circle at 8px 0, var(--terracotta) 8px, transparent 8.5px)",
        backgroundSize: "16px 14px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top center",
        opacity: 0.35,
      }}
    />
  );
}
