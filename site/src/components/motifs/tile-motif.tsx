/**
 * A custom geometric tile unit in the spirit of azulejo — hand-painted
 * Portuguese ceramic tilework — built from the existing brand palette
 * (navy/terracotta/ivory), not literal blue-and-white. A genuine repeating
 * structural motif, not a stock background pattern: used as the property
 * card badge treatment and as the Requirements Board's divider band.
 */
export function TileMotif({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="azulejo-unit" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="var(--ivory)" />
          <rect width="10" height="10" fill="color-mix(in oklch, var(--navy-deep) 92%, transparent)" />
          <rect x="10" y="10" width="10" height="10" fill="color-mix(in oklch, var(--navy-deep) 92%, transparent)" />
          <path d="M10 1.5 L18.5 10 L10 18.5 L1.5 10 Z" fill="none" stroke="var(--gold)" strokeWidth="0.9" />
          <circle cx="10" cy="10" r="2.1" fill="var(--terracotta)" />
        </pattern>
      </defs>
      <rect width="40" height="40" fill="url(#azulejo-unit)" />
    </svg>
  );
}
