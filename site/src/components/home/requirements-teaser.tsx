import { getActiveRequirements } from "@/lib/data";
import { RequirementCard } from "@/components/requirements/requirement-card";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";
import { TileMotif } from "@/components/motifs/tile-motif";
import { RooflineDivider } from "@/components/motifs/roofline-divider";

export async function RequirementsTeaser() {
  const requirements = (await getActiveRequirements()).slice(0, 3);
  if (requirements.length === 0) return null;

  return (
    <section className="relative bg-terracotta px-6 py-20 sm:px-14 sm:py-32">
      {/* azulejo band: the section's structural top edge, not wallpaper */}
      <div className="absolute inset-x-0 top-0 h-3 overflow-hidden">
        <TileMotif className="h-full w-full" />
      </div>

      <div className="relative mb-14 text-center">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-navy-deep uppercase">
            AB Realty Requirements
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight text-ivory sm:text-6xl">
            Live Buyer &amp; Investor Requirements
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/85">
            A daily-updated board of active client requirements. If you own or
            represent a matching property, reach out to Amar directly.
          </p>
        </FadeIn>
      </div>

      <StaggerReveal className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {requirements.map((requirement) => (
          <StaggerItem key={requirement.id}>
            <RequirementCard requirement={requirement} />
          </StaggerItem>
        ))}
      </StaggerReveal>

      <div className="relative mt-12 text-center">
        <CtaLink href="/requirements" variant="outline">
          See All Live Requirements ↘︎
        </CtaLink>
      </div>

      <RooflineDivider tone="ivory" className="absolute inset-x-0 bottom-0 h-3.5 w-full" />
    </section>
  );
}
