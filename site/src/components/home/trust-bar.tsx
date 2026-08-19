import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";

const stats = [
  { to: 10, suffix: "+", label: "Years in Goa Real Estate" },
  { to: 120, suffix: "+", label: "Properties Transacted" },
  { to: 98, suffix: "%", label: "Client Satisfaction" },
];

export function TrustBar() {
  return (
    <section className="border-b border-black/10 bg-white px-6 py-14 sm:px-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:flex-row sm:justify-between">
        <FadeIn className="flex flex-wrap justify-center gap-10 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl font-semibold text-navy-deep sm:text-5xl">
                <AnimatedCounter to={stat.to} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href="https://www.instagram.com/ab_realty_in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-terracotta underline-offset-4 hover:underline"
          >
            Follow @ab_realty_in on Instagram ↗
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
