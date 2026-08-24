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
      </g>
      {/* right column, set further out so it frames rather than boxes the text */}
      <g stroke="var(--gold)" strokeWidth="0.35" opacity="0.4">
        <line x1="98" y1="10" x2="98" y2="90" />
      </g>
    </svg>
  );
}
