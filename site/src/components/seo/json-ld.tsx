export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abrealty.in";

export function realEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AB Realty",
    founder: {
      "@type": "Person",
      name: "Amar Bernard",
    },
    telephone: "+91-9373136048",
    email: "abrealty@gmail.com",
    url: SITE_URL,
    image: `${SITE_URL}/assets/logo-original.png`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    areaServed: ["India", "United Arab Emirates", "United Kingdom"],
    sameAs: ["https://www.instagram.com/ab_realty_in"],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function propertyJsonLd(property: {
  title: string;
  slug: string;
  summary: string;
  location: string;
  price: string;
  image_url: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.summary,
    url: `${SITE_URL}/properties/${property.slug}`,
    image: property.image_url ? `${SITE_URL}${property.image_url}` : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "INR",
    },
  };
}
