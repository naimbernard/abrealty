import Link from "next/link";
import { CtaLink } from "@/components/brand/cta-link";
import { RooflineDivider } from "@/components/motifs/roofline-divider";
import { waLinks } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-gold-soft px-6 text-navy-deep sm:px-14">
      <RooflineDivider className="-mx-6 h-3.5 sm:-mx-14" />
      <div className="grid min-h-[260px] grid-cols-1 gap-10 pt-16 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <h2 className="font-heading text-2xl leading-tight font-light tracking-[0.08em] whitespace-nowrap sm:text-3xl">
            AB REALTY
          </h2>
          <div className="mt-8 flex flex-col gap-2 text-sm">
            <Link href="/properties" className="hover:text-navy">
              Properties
            </Link>
            <Link href="/about" className="hover:text-navy">
              About Us
            </Link>
            <Link href="/requirements" className="hover:text-navy">
              AB Realty Requirements
            </Link>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold tracking-wide">Contact</p>
          <a href="tel:+919373136048" className="block hover:text-navy">
            +91 93731 36048
          </a>
          <a href="mailto:abrealtygoa@gmail.com" className="mt-1 block hover:text-navy">
            abrealtygoa@gmail.com
          </a>
          <p className="mt-1">Based in Goa, India</p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold tracking-wide">Socials</p>
          <a
            href="https://www.instagram.com/ab_realty_in"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-navy"
          >
            Instagram
          </a>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide">Inquiries</p>
          <CtaLink href={waLinks.general()} external variant="dark">
            Speak to Amar ↗︎
          </CtaLink>
        </div>
      </div>

      <div className="-mx-6 flex flex-col gap-2 bg-navy-deep px-6 py-6 text-xs text-ivory/70 sm:-mx-14 sm:flex-row sm:justify-between sm:px-14">
        <span>Privacy Policy &nbsp;&nbsp;&nbsp; Accessibility Statement</span>
        <span>AB Realty {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
