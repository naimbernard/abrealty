import { FadeIn } from "@/components/motion/fade-in";
import { waLinks } from "@/lib/whatsapp";

const locations = [
  "Candolim",
  "Calangute",
  "Guirim",
  "Pilerne",
  "Siolim",
  "Porvorim",
  "Nerul",
  "Dona Paula",
];

export function Locations() {
  return (
    <section className="px-6 py-20 sm:px-14 sm:py-28">
      <FadeIn className="text-center">
        <p className="mb-3 text-xs font-bold tracking-widest text-terracotta uppercase">
          Locations We Cover
        </p>
        <h2 className="font-heading text-4xl leading-tight font-light tracking-tight sm:text-6xl">
          North Goa&apos;s Best Addresses
        </h2>
      </FadeIn>

      <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
        {locations.map((location) => (
          <a
            key={location}
            href={waLinks.enquiry(`Hi Amar, I'm interested in properties around ${location}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-gold hover:bg-sand"
          >
            {location}
          </a>
        ))}
      </div>
    </section>
  );
}
