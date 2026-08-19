import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

const reasons = [
  {
    title: "Steady Appreciation",
    body: "North Goa's villa and apartment markets have seen consistent year-on-year appreciation, driven by limited coastal land supply and sustained demand from Indian and overseas buyers.",
  },
  {
    title: "Tourism-Driven Rental Yield",
    body: "Goa's year-round tourism economy supports strong short and long-term rental yields — making a Goa property investment as much a lifestyle asset as a financial one.",
  },
  {
    title: "Transparent, Guided Dealings",
    body: "Every listing is vetted for legal clarity, title strength and resale potential, so NRIs and international buyers can invest with confidence from anywhere in the world.",
  },
  {
    title: "A Lifestyle Draw",
    body: "From whitewashed Portuguese architecture to paddy fields and coastline, Goa offers a quality of life that keeps owners — and renters — coming back.",
  },
];

export function WhyInvest() {
  return (
    <section className="bg-sand px-6 py-20 sm:px-14 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            Why Invest in Goa
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
            A Goa Real Estate Investment, Made Clear
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you&apos;re based in Mumbai, Dubai or London, AB Realty helps
            Indian and NRI investors navigate North Goa property investment —
            from luxury villas for sale in Goa to land and long-term rental
            assets — with clear guidance at every step.
          </p>
        </FadeIn>
      </div>

      <StaggerReveal className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {reasons.map((reason) => (
          <StaggerItem key={reason.title}>
            <div className="h-full rounded-2xl bg-white p-8 shadow-[0_10px_28px_rgba(0,0,0,0.05)]">
              <h3 className="font-heading text-xl font-semibold">{reason.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {reason.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
