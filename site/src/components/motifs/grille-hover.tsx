/**
 * A fine line-drawing that traces in on hover/keyboard focus, in the
 * spirit of decorative wrought-iron balcony grillwork — not a generic
 * box-shadow or scale effect. Pure CSS (stroke-dashoffset transition
 * driven by the parent's `group` hover/focus-within state); doubles as
 * the visible keyboard-focus treatment. Parent must have `class="group"`
 * (and `relative` positioning).
 */
export function GrilleHover({ variant = "card" }: { variant?: "card" | "pill" }) {
  const pill = variant === "pill";
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx={pill ? "9999" : "15"}
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        pathLength="100"
        strokeDasharray="100"
        className="[stroke-dashoffset:100] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0] group-focus-within:[stroke-dashoffset:0]"
      />
      {!pill &&
        Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1={`${10 + i * 12}%`}
            y1="1"
            x2={`${10 + i * 12}%`}
            y2="14"
            stroke="var(--gold)"
            strokeWidth="1.5"
            pathLength="100"
            strokeDasharray="100"
            className="[stroke-dashoffset:100] transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0] group-focus-within:[stroke-dashoffset:0]"
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        ))}
    </svg>
  );
}
