import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProperties, getPropertyBySlug, getRelatedProperties } from "@/lib/data";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { PropertyCard } from "@/components/properties/property-card";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import { JsonLd, breadcrumbJsonLd, propertyJsonLd } from "@/components/seo/json-ld";
import { waLinks } from "@/lib/whatsapp";

export const revalidate = 60;

export async function generateStaticParams() {
  const properties = await getAllProperties();
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata(
  props: PageProps<"/properties/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const property = await getPropertyBySlug(slug);
  if (!property) return {};

  return {
    title: property.title,
    description: property.summary,
    alternates: { canonical: `/properties/${property.slug}` },
    openGraph: {
      title: property.title,
      description: property.summary,
      images: property.gallery_urls.length
        ? [property.gallery_urls[0]]
        : undefined,
    },
  };
}

export default async function PropertyDetailPage(
  props: PageProps<"/properties/[slug]">
) {
  const { slug } = await props.params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  const related = await getRelatedProperties(slug, 3);

  const specs = [
    property.bedrooms ? { label: "Bedrooms", value: `${property.bedrooms} BHK` } : null,
    property.bua ? { label: "Built-up Area", value: property.bua } : null,
    property.sbua ? { label: "Super Built-up Area", value: property.sbua } : null,
    property.plot_size ? { label: "Plot Size", value: property.plot_size } : null,
    { label: "Property Type", value: property.property_type },
    { label: "Status", value: property.status },
    property.completion_date ? { label: "Completion", value: property.completion_date } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: "/" },
          { name: "Properties", url: "/properties" },
          { name: property.title, url: `/properties/${property.slug}` },
        ])}
      />
      <JsonLd data={propertyJsonLd(property)} />

      <section className="px-6 pt-14 pb-8 sm:px-14">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            {property.badge || property.property_type}
          </p>
          <h1 className="font-heading text-4xl leading-tight tracking-tight sm:text-6xl">
            {property.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{property.location}</p>
        </FadeIn>
      </section>

      <section className="px-6 sm:px-14">
        <FadeIn>
          <PropertyGallery images={property.gallery_urls} title={property.title} />
        </FadeIn>
      </section>

      <section className="grid grid-cols-1 gap-12 px-6 py-16 sm:px-14 lg:grid-cols-3 lg:gap-16">
        <FadeIn className="lg:col-span-2">
          <h2 className="font-heading text-2xl font-semibold">Overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {property.description || property.summary}
          </p>
          {property.highlights && (
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-ink">Highlights: </span>
              {property.highlights}
            </p>
          )}

          <h3 className="mt-10 font-heading text-xl font-semibold">Specifications</h3>
          <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {specs.map((spec) => (
              <div key={spec.label} className="flex justify-between border-b border-black/10 pb-3">
                <dt className="text-sm text-muted-foreground">{spec.label}</dt>
                <dd className="text-sm font-semibold">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="sticky top-28 rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="mt-1 font-heading text-3xl">
              {property.price_on_request ? "Price on Request" : property.price}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              AED/GBP equivalents available on request for UAE and UK buyers.
            </p>
            <CtaLink
              href={waLinks.property(property.title)}
              external
              variant="gold"
              className="mt-6 w-full justify-center"
            >
              Enquire on WhatsApp ↗
            </CtaLink>
          </div>
        </FadeIn>
      </section>

      {related.length > 0 && (
        <section className="border-t border-black/10 px-6 py-20 sm:px-14 sm:py-28">
          <FadeIn>
            <h2 className="font-heading text-3xl leading-tight font-light tracking-tight sm:text-5xl">
              Related Properties
            </h2>
          </FadeIn>
          <StaggerReveal className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.id}>
                <PropertyCard property={item} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </section>
      )}
    </>
  );
}
