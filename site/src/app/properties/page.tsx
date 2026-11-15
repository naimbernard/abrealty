import type { Metadata } from "next";
import { getAllProperties } from "@/lib/data";
import { PropertyCard } from "@/components/properties/property-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Properties for Sale in Goa",
  description:
    "Browse AB Realty's curated villas, apartments, plots and land for sale across North Goa - vetted for location, design and resale potential.",
  alternates: { canonical: "/properties" },
};

export default async function PropertiesPage() {
  const properties = await getAllProperties();

  return (
    <>
      <section className="bg-sand px-6 py-20 sm:px-14 sm:py-28">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            Featured Properties
          </p>
          <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-7xl">
            Our Properties
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We only share properties we believe are worth your time. From
            villas and apartments to land and resale opportunities, explore
            Goa real estate with clear information and no pressure.
          </p>
        </FadeIn>
      </section>

      <section className="bg-[linear-gradient(to_bottom,var(--sand),var(--ivory)_140px)] px-6 py-20 sm:px-14 sm:py-28">
        <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <StaggerItem key={property.id}>
              <PropertyCard property={property} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>
    </>
  );
}
