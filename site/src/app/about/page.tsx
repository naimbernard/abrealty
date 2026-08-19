import type { Metadata } from "next";
import Image from "next/image";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { waLinks } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About AB Realty",
  description:
    "AB Realty is a boutique Goa real estate consultancy founded by Amar Bernard, helping clients buy, sell, rent, invest and manage property with honest guidance and trusted local support.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-sand px-6 py-20 sm:px-14 sm:py-28">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
            About AB Realty
          </p>
          <h1 className="font-heading text-5xl leading-tight tracking-tight sm:text-7xl">
            Amar Bernard
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A boutique Goa real estate consultancy built on trust, transparency
            and personalised guidance — for buyers, sellers, renters and
            investors alike.
          </p>
        </FadeIn>
      </section>

      <section className="grid grid-cols-1 items-center gap-12 px-6 py-20 sm:px-14 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <blockquote className="border-l-2 border-gold pl-5 font-heading text-3xl leading-snug text-navy-deep italic sm:text-4xl">
            &ldquo;Every property tells a story — I make sure it&rsquo;s a
            profitable one.&rdquo;
          </blockquote>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            At the heart of AB Realty is founder Amar Bernard — driven by a
            genuine passion for helping people find a place they can call
            home, and a belief that real estate is fundamentally about trust,
            relationships and lasting opportunity.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            He built AB Realty on honesty, dedication and care, with a mission
            to make buying, selling or investing in Goa property transparent,
            supportive and rewarding — treating every client, regardless of
            the size of their goals, with the same respect and attention.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            With roots in London and years of family experience in Goa&rsquo;s
            property market, Amar brings a rare mix of international
            perspective and local insight — working with HNIs, NRIs and
            serious buyers looking for luxury villas, apartments, land and
            high-value investment opportunities.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(12,10,4,0.18)]">
          <Image
            src="/assets/landing-wide.png"
            alt="AB Realty branding at a whitewashed Goa coastal residence"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </FadeIn>
      </section>

      <section className="bg-navy-deep px-6 py-20 text-ivory sm:px-14 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-3xl leading-tight font-light tracking-tight sm:text-5xl">
              A Responsible Future for Goa Real Estate
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ivory/80">
              Goa is one of the most special places in the world, and real
              estate here has to be handled with respect. It is not just
              about buying land, selling homes or building value — it is
              about understanding the balance between people, property,
              nature and the future of the place we call home.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ivory/80">
              I do not believe in pushing every listing. I believe in showing
              properties that make sense — homes, land, rentals and
              investment opportunities approached with honesty, care and
              practical guidance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ivory/80">
              The goal is simple: to make real estate in Goa feel clearer,
              safer and more personal, while respecting the land, the
              community and the future being built here.
            </p>
            <p className="mt-8 font-heading text-xl">
              Amar Bernard
              <span className="mt-1 block text-sm font-sans font-normal text-ivory/60">
                Founder, AB Realty
              </span>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-14 sm:py-28">
        <FadeIn>
          <h2 className="font-heading text-3xl leading-tight font-light tracking-tight sm:text-5xl">
            Accountability, End to End
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We take responsibility for the guidance we give and the people we
            connect you with. From property details to contractors,
            renovations and local support, AB Realty aims to keep
            communication clear, expectations realistic and every step
            handled with care.
          </p>
          <div className="mt-9">
            <CtaLink href={waLinks.general()} external variant="gold">
              Talk to Amar on WhatsApp ↗
            </CtaLink>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
