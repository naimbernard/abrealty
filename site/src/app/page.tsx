import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { InstagramRail } from "@/components/home/instagram-rail";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { WhyInvest } from "@/components/home/why-invest";
import { RequirementsTeaser } from "@/components/home/requirements-teaser";
import { AboutAmar } from "@/components/home/about-amar";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Faq, FAQ_ITEMS } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd, faqJsonLd } from "@/components/seo/json-ld";

// Statically cached and refreshed in the background at most once a minute,
// so admin edits still show up quickly without every visitor paying for a
// live Supabase round-trip.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "AB Realty | Luxury Villas & Investment Property in Goa",
  description:
    "Goa's trusted boutique real estate advisory for luxury villas, apartments, plots and investment property — serving buyers and NRIs across India, the UAE and the UK.",
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "en-AE": "/", "en-GB": "/", "x-default": "/" },
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />
      <Hero />
      <TrustBar />
      <InstagramRail />
      <FeaturedProperties />
      <WhyInvest />
      <RequirementsTeaser />
      <AboutAmar />
      <ProcessTimeline />
      <Faq />
      <FinalCta />
    </>
  );
}
