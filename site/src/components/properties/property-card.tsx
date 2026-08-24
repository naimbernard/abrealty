import Image from "next/image";
import Link from "next/link";
import { CtaLink } from "@/components/brand/cta-link";
import { GrilleHover } from "@/components/motifs/grille-hover";
import { TileMotif } from "@/components/motifs/tile-motif";
import { LatticeReveal } from "@/components/motifs/lattice-reveal";
import { waLinks } from "@/lib/whatsapp";
import { isOptimizableImage } from "@/lib/utils";
import type { Property } from "@/lib/types";

export function PropertyCard({ property }: { property: Property }) {
  const image = property.media_url || property.image_url || "/assets/landing-wide.png";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(12,10,4,0.18)]">
      <GrilleHover />
      <LatticeReveal className="block h-[320px] overflow-hidden sm:h-[380px]">
        <Link href={`/properties/${property.slug}`} className="relative block h-full w-full">
          <Image
            src={image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized={!isOptimizableImage(image)}
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {property.status !== "Available" && (
            <span className="absolute top-4 right-4 rounded-full bg-navy-deep px-3 py-1 text-xs font-semibold text-ivory">
              {property.status}
            </span>
          )}
        </Link>
      </LatticeReveal>

      <div className="p-6 sm:p-7">
        <div className="mb-4 inline-flex items-stretch overflow-hidden rounded-lg border border-black/10">
          <TileMotif className="h-auto w-7 shrink-0" />
          <span className="flex items-center bg-sand px-2.5 text-[11px] font-bold tracking-wide text-navy-deep uppercase">
            {property.badge || property.property_type}
          </span>
        </div>
        <h3 className="font-heading text-2xl leading-tight tracking-tight sm:text-[28px]">
          <Link href={`/properties/${property.slug}`} className="hover:text-terracotta">
            {property.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-semibold text-ink">{property.location}</span>
          {" · "}
          {property.price_on_request ? "Price on Request" : property.price}
        </p>
        <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-muted-foreground">
          {property.hook_line || property.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[property.bedrooms ? `${property.bedrooms} BHK` : null, property.bua, property.sbua]
            .filter(Boolean)
            .map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {chip}
              </span>
            ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <CtaLink href={waLinks.property(property.title)} external variant="dark" className="text-xs">
            Enquire Now ↗︎
          </CtaLink>
          <Link
            href={`/properties/${property.slug}`}
            className="text-sm font-medium text-terracotta underline-offset-4 hover:underline"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
