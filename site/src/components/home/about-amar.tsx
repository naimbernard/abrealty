import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaLink } from "@/components/brand/cta-link";

export function AboutAmar() {
  return (
    <section className="grid grid-cols-1 items-center gap-12 bg-white px-6 py-20 sm:px-14 sm:py-32 lg:grid-cols-2 lg:gap-20">
      <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_70px_rgba(12,10,4,0.18)]">
        <Image
          src="/assets/landing-vertical.png"
          alt="AB Realty branding at a whitewashed Goa coastal residence"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
          About the Founder
        </p>
        <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-5xl">
          Amar Bernard
        </h2>
        <blockquote className="mt-6 border-l-2 border-gold pl-5 font-heading text-2xl leading-snug text-navy-deep italic">
          &ldquo;Every property tells a story — I make sure it&rsquo;s a
          profitable one.&rdquo;
        </blockquote>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          At the heart of AB Realty is founder Amar Bernard — driven by a
          genuine passion for helping people find a place they can call home,
          and a belief that real estate is fundamentally about trust,
          relationships and lasting opportunity.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          He built AB Realty on honesty, dedication and care, with a mission
          to make buying, selling or investing in Goa property transparent,
          supportive and rewarding — treating every client, regardless of the
          size of their goals, with the same respect and attention.
        </p>
        <div className="mt-8">
          <CtaLink href="/about" variant="dark">
            Read More ↘︎
          </CtaLink>
        </div>
      </FadeIn>
    </section>
  );
}
