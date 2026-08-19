import type { Metadata } from "next";
import { getActiveRequirements } from "@/lib/data";
import { RequirementCard } from "@/components/requirements/requirement-card";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerReveal, StaggerItem } from "@/components/motion/stagger-reveal";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "AB Realty Requirements Board",
  description:
    "Live buyer and investor property requirements from AB Realty's client network in Goa. Match a requirement and reach Amar directly on WhatsApp.",
  alternates: { canonical: "/requirements" },
};

export default async function RequirementsPage() {
  const requirements = await getActiveRequirements();

  return (
    <>
      <section className="bg-sand px-6 py-20 sm:px-14 sm:py-28">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            AB Realty Requirements
          </p>
          <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-7xl">
            Live Property Requirements
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore active buyer and investor requirements from AB Realty&apos;s
            client network. If you own or represent a property that matches
            one of these, contact Amar directly — this board changes daily.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 py-20 sm:px-14 sm:py-28">
        {requirements.length === 0 ? (
          <p className="text-muted-foreground">
            No active requirements right now — check back soon.
          </p>
        ) : (
          <StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((requirement) => (
              <StaggerItem key={requirement.id}>
                <RequirementCard requirement={requirement} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        )}
      </section>
    </>
  );
}
