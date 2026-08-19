import { getFeaturedProperties } from "@/lib/data";
import { PropertyCard } from "@/components/properties/property-card";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export async function FeaturedProperties() {
  const properties = await getFeaturedProperties(3);

  return (
    <section className="px-6 py-20 sm:px-14 sm:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            Featured Properties
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
            We Find Spaces You&apos;ll Love
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <CtaLink href="/properties" variant="dark">
            All Properties ↘
          </CtaLink>
        </FadeIn>
      </div>

      <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <StaggerItem key={property.id}>
            <PropertyCard property={property} />
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  );
}
