/**
 * An abstracted reading of the balcão — the covered porch/entrance of a
 * Goan-Portuguese house: flanking columns, a shaded threshold, built-in
 * stone seating. Not a literal porch cutout — thin architectural verticals
 * marking an entrance, and a ledge line where the seating would run.
 * Decorative only; kept out of the a11y tree.
 */
export function BalcaoFrame({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* left column */}
      <g stroke="var(--ivory)" strokeWidth="0.35" opacity="0.55">
        <line x1="2" y1="6" x2="2" y2="94" />
        <path d="M0.3 6 L2 3 L3.7 6" />
        <path d="M0.3 94 L2 97 L3.7 94" />
      </g>
      {/* right column, set further out so it frames rather than boxes the text */}
      <g stroke="var(--gold)" strokeWidth="0.35" opacity="0.4">
        <line x1="98" y1="10" x2="98" y2="90" />
        <path d="M96.3 10 L98 7 L99.7 10" />
        <path d="M96.3 90 L98 93 L99.7 90" />
      </g>
    </svg>
  );
}
