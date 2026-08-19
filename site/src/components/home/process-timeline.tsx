import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Share your budget, goals and must-haves — we translate them into a shortlist worth your time.",
  },
  {
    n: "02",
    title: "Shortlist",
    body: "A curated set of villas, apartments, plots or land, each vetted for location, design and resale potential.",
  },
  {
    n: "03",
    title: "Site Visit",
    body: "Walk each property in person or via guided video, with honest context on every trade-off.",
  },
  {
    n: "04",
    title: "Close",
    body: "Transparent, legally sound closing — with Amar coordinating every step to a clean handover.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-navy-deep px-6 py-20 text-ivory sm:px-14 sm:py-32">
      <div className="mb-14 max-w-2xl">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-gold uppercase">
            How It Works
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
            A Clear Path From Search to Close
          </h2>
        </FadeIn>
      </div>

      <StaggerReveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((step) => (
          <StaggerItem key={step.n}>
            <div className="border-t border-ivory/20 pt-6">
              <span className="font-heading text-lg text-gold">{step.n}</span>
              <h3 className="mt-3 font-heading text-2xl font-medium">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ivory/75">
                {step.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
