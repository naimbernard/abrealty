import { Badge } from "@/components/ui/badge";
import { CtaLink } from "@/components/brand/cta-link";
import { daysAgo, isStale } from "@/lib/data";
import { waLinks } from "@/lib/whatsapp";
import type { Requirement } from "@/lib/types";

export function RequirementCard({ requirement }: { requirement: Requirement }) {
  const stale = isStale(requirement.posted_at);

  return (
    <article className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_28px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_18px_44px_rgba(0,0,0,0.09)]">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {requirement.property_type && (
          <Badge className="rounded-full bg-sand text-[11px] font-bold tracking-wide text-navy-deep uppercase">
            {requirement.property_type}
          </Badge>
        )}
        {requirement.urgency && (
          <Badge className="rounded-full bg-terracotta/15 text-[11px] font-bold tracking-wide text-terracotta uppercase">
            {requirement.urgency}
          </Badge>
        )}
        <span className="ml-auto text-xs text-muted-foreground">
          {stale ? "Posted a while ago" : daysAgo(requirement.posted_at)}
        </span>
      </div>

      <h3 className="font-heading text-2xl leading-tight tracking-tight">
        {requirement.title}
      </h3>
      <p className="mt-1 text-sm font-semibold text-ink">
        {requirement.locations}
        {requirement.budget_range ? ` · ${requirement.budget_range}` : ""}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
        {requirement.details}
      </p>

      <div className="mt-6">
        <CtaLink
          href={waLinks.requirementMatch(requirement.title, requirement.id)}
          external
          variant="dark"
        >
          I Have a Match ↗
        </CtaLink>
      </div>
    </article>
  );
}
