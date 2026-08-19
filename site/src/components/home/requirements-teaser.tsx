import { getActiveRequirements } from "@/lib/data";
import { RequirementCard } from "@/components/requirements/requirement-card";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export async function RequirementsTeaser() {
  const requirements = (await getActiveRequirements()).slice(0, 3);
  if (requirements.length === 0) return null;

  return (
    <section className="px-6 py-20 sm:px-14 sm:py-32">
      <div className="mb-14 text-center">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            AB Realty Requirements
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
            Live Buyer &amp; Investor Requirements
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A daily-updated board of active client requirements. If you own or
            represent a matching property, reach out to Amar directly.
          </p>
        </FadeIn>
      </div>

      <StaggerReveal className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {requirements.map((requirement) => (
          <StaggerItem key={requirement.id}>
            <RequirementCard requirement={requirement} />
          </StaggerItem>
        ))}
      </StaggerReveal>

      <div className="mt-12 text-center">
        <CtaLink href="/requirements" variant="dark">
          See All Live Requirements ↘
        </CtaLink>
      </div>
    </section>
  );
}
