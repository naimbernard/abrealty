import { getFeaturedProperties } from "@/lib/data";
import { PropertyCard } from "@/components/properties/property-card";
import { CtaLink } from "@/components/brand/cta-link";
import { LatticeReveal } from "@/components/motifs/lattice-reveal";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export async function FeaturedProperties() {
  const properties = await getFeaturedProperties(3);
  const [first, second, third] = properties;

  return (
    <section className="relative bg-[linear-gradient(to_bottom,var(--sand),var(--ivory)_140px)] px-6 py-20 sm:px-14 sm:py-32">
      {/* rajangan: a centered axis the cards gather around, rather than a
          left-heading/right-CTA horizontal band */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-24 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent lg:block"
      />

      <LatticeReveal className="relative mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
          Featured Properties
        </p>
        <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
          We Find Spaces You&apos;ll Love
        </h2>
        <div className="mt-8">
          <CtaLink href="/properties" variant="dark">
            All Properties ↘︎
          </CtaLink>
        </div>
      </LatticeReveal>

      {properties.length === 3 ? (
        <StaggerReveal className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-3">
          <StaggerItem>
            <PropertyCard property={first} />
          </StaggerItem>
          <StaggerItem className="md:-translate-y-10">
            <PropertyCard property={second} />
          </StaggerItem>
          <StaggerItem>
            <PropertyCard property={third} />
          </StaggerItem>
        </StaggerReveal>
      ) : (
        <StaggerReveal className="relative mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      )}
    </section>
  );
}
