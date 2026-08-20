import Image from "next/image";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { waLinks } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-80px)] items-end overflow-hidden bg-navy-deep sm:items-center">
      <Image
        src="/assets/landing-wide.png"
        alt="AB Realty — whitewashed coastal architecture overlooking the Goa shoreline"
        fill
        priority
        sizes="100vw"
        className="hero-kenburns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/35 sm:to-black/10" />

      <div className="relative z-10 max-w-3xl px-6 pb-16 sm:px-14 sm:pb-0">
        <FadeIn>
          <h1 className="font-heading text-[44px] leading-[1.05] font-bold tracking-tight text-ivory sm:text-[76px] lg:text-[96px]">
            Building Trust,
            <br />
            Selling Dreams.
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 sm:text-2xl">
            Goa&apos;s trusted partner for villas, plots and investment property —
            for buyers, investors and NRIs building a future on the coast.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaLink href={waLinks.general()} external variant="gold">
              Talk to Amar on WhatsApp ↗︎
            </CtaLink>
            <CtaLink href="/properties" variant="outline">
              View Properties ↘︎
            </CtaLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
