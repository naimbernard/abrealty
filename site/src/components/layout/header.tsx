"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CtaLink } from "@/components/brand/cta-link";
import { waLinks } from "@/lib/whatsapp";

const navLinks = [
  { href: "/properties", label: "Properties" },
  { href: "/requirements", label: "AB Realty Requirements" },
  { href: "/about", label: "About Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b-4 border-sand bg-navy-deep px-6 text-ivory sm:px-10">
      <Link
        href="/"
        className="font-heading text-xl font-medium tracking-[0.12em] sm:text-2xl"
      >
        AB REALTY
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium tracking-wide text-ivory/85 transition-colors hover:text-gold"
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
        <CtaLink href={waLinks.general()} external variant="gold">
          Talk to Amar ↗
        </CtaLink>
      </nav>

      <Sheet>
        <SheetTrigger className="text-ivory md:hidden" aria-label="Open menu">
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="border-none bg-navy-deep p-8 text-ivory [&_svg]:text-ivory"
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <nav className="mt-10 flex flex-col gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <CtaLink href={waLinks.general()} external variant="gold" className="mt-4 justify-center">
              Talk to Amar ↗
            </CtaLink>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
