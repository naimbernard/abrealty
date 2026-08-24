import { CtaLink } from "@/components/brand/cta-link";
import { FadeIn } from "@/components/motion/fade-in";
import { waLinks } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* laterite facade seam: a crisp painted-edge boundary, not a soft fade */}
      <div className="relative flex flex-col justify-center border-gold bg-navy-deep px-6 py-20 text-ivory sm:px-14 sm:py-28 lg:border-r-4">
        <FadeIn>
          <p className="mb-3 text-xs font-bold tracking-widest text-gold uppercase">
            Start the Conversation
          </p>
          <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-5xl">
            Your Goa Property Journey Starts Here.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/80">
            Share what you&apos;re looking for and Amar will personally get
            back to you — usually within the hour.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaLink href={waLinks.general()} external variant="gold">
              Message on WhatsApp ↗︎
            </CtaLink>
            <CtaLink href="tel:+919373136048" variant="outline">
              +91 93731 36048
            </CtaLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-ivory/70">
            <a href="mailto:abrealtygoa@gmail.com" className="hover:text-ivory">
              abrealtygoa@gmail.com
            </a>
            <a
              href="https://www.instagram.com/ab_realty_in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory"
            >
              @ab_realty_in
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="min-h-[360px] bg-sand">
        <iframe
          title="AB Realty — Goa"
          src="https://www.google.com/maps?q=Goa,India&output=embed"
          className="h-full min-h-[360px] w-full border-0 grayscale-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
