import Image from "next/image";
import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { LatticeGlow } from "@/components/motifs/lattice-glow";
import { LatticeReveal } from "@/components/motifs/lattice-reveal";
import { BalcaoFrame } from "@/components/motifs/balcao-frame";
import { RooflineDivider } from "@/components/motifs/roofline-divider";
import { waLinks } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[100svh] flex-col items-stretch overflow-hidden bg-navy-deep">
      <div className="relative flex flex-1 items-end sm:items-center">
        <Image
          src="/assets/landing-wide.png"
          alt="AB Realty - whitewashed coastal architecture overlooking the Goa shoreline"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover"
        />
        {/* golden-hour grounding: navy-tinted dusk light, not a generic black vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, color-mix(in oklch, var(--navy-deep) 82%, black) 0%, color-mix(in oklch, var(--navy-deep) 55%, black 45%) 45%, color-mix(in oklch, var(--navy-deep) 20%, transparent) 85%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklch, var(--navy-deep) 65%, black 35%), transparent)",
          }}
        />
        {/* threshold: a deeper shaded zone directly behind the text, like standing under a porch roof before the open view beyond */}
        <div className="absolute inset-y-0 left-0 w-full max-w-2xl bg-gradient-to-r from-black/35 to-transparent sm:max-w-3xl" />

        <BalcaoFrame className="pointer-events-none absolute inset-y-8 left-2 w-[calc(100%-16px)] sm:inset-y-12 sm:left-6 sm:w-[calc(100%-48px)]" />

        <div className="relative z-10 flex max-w-3xl flex-col items-center px-8 pb-16 text-center sm:px-16 sm:pb-0 lg:ml-10">
          <LatticeReveal className="relative isolate mx-auto w-fit">
            <LatticeGlow className="pointer-events-none absolute -inset-x-20 -inset-y-24 -z-10 sm:-inset-y-32" />
            <h1>
              <span className="sr-only">AB Realty - Building Trust, Selling Dreams.</span>
              <Image
                src="/assets/ab-realty-logo.png"
                alt=""
                width={1156}
                height={1200}
                loading="eager"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 300px, 220px"
                className="mx-auto h-auto w-[220px] sm:w-[300px] lg:w-[360px]"
              />
            </h1>
          </LatticeReveal>
          <FadeIn delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/90 sm:text-2xl">
              Goa&apos;s trusted partner for villas, plots and investment property -
              for buyers, investors and NRIs building a future on the coast.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <CtaLink href={waLinks.general()} external variant="gold">
                Talk to Amar on WhatsApp ↗︎
              </CtaLink>
              <CtaLink href="/properties" variant="outline">
                View Properties ↘︎
              </CtaLink>
            </div>
            {/* the balcão's built-in stone seating, abstracted to a ledge line */}
            <div className="mx-auto mt-8 h-px w-full max-w-md bg-gradient-to-r from-transparent via-ivory/40 to-transparent" />
          </FadeIn>
        </div>
      </div>

      <RooflineDivider className="h-3.5 w-full shrink-0" />
    </section>
  );
}
