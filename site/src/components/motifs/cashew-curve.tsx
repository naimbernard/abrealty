/**
 * The site's one cashew-apple reference: an abstracted hanging-fruit curve,
 * not a literal fruit illustration. Secondary signature - appears exactly
 * once, as a quiet background form behind the About page founder photo.
 */
export function CashewCurve({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 220 320" fill="none">
      <path
        d="M132 8C108 44 96 84 100 126C103 158 122 186 118 220C115 246 96 270 62 286C122 296 176 262 190 208C202 162 182 122 190 82C196 52 216 30 220 4"
        stroke="var(--gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M96 40C78 78 72 116 84 152C94 182 118 202 116 232C114 256 96 278 66 292"
        stroke="var(--terracotta)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}
