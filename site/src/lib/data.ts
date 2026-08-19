import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/slug";
import type { Property, Requirement } from "@/lib/types";

const STALE_DAYS = 14;

const FALLBACK_PROPERTIES: Property[] = [
  {
    id: "seed-guirim-villa",
    created_at: "2026-01-01T00:00:00Z",
    title: "The Guirim Villa",
    slug: "the-guirim-villa",
    badge: "New Launch",
    location: "Guirim, North Goa",
    property_type: "Villa",
    status: "Available",
    price: "Price on Request",
    price_on_request: true,
    bua: "~3,900 sq.ft",
    sbua: "~5,900 sq.ft",
    plot_size: null,
    bedrooms: 4,
    hook_line: "A contemporary 4BHK villa with an infinity pool over paddy fields.",
    summary:
      "Contemporary 4BHK luxury villa in Guirim with an infinity pool, paddy field views, and easy access to North Goa's beaches and lifestyle hubs.",
    description:
      "The Guirim Villa is a contemporary 4BHK residence set against open paddy fields in North Goa, completing January 2026. An infinity pool anchors the outdoor living space, with generous BUA and SBUA across three levels, close to Goa's best beaches and social hubs.",
    highlights: "4BHK, infinity pool, paddy field views, completion January 2026",
    completion_date: "January 2026",
    image_url: "/assets/landing-wide.png",
    media_url: "/assets/landing-wide.png",
    media_type: "image",
    gallery_urls: ["/assets/landing-wide.png", "/assets/hero-screen.png"],
    featured: true,
    display_order: 1,
    visible: true,
  },
  {
    id: "seed-pilerne-villa",
    created_at: "2026-01-01T00:00:00Z",
    title: "The Pilerne Villa",
    slug: "the-pilerne-villa",
    badge: "Boutique Collection",
    location: "Pilerne, North Goa",
    property_type: "Villa",
    status: "Available",
    price: "Price on Request",
    price_on_request: true,
    bua: "5,447–5,961 sq.ft",
    sbua: "~5,622 sq.ft",
    plot_size: "334–447 sqm",
    bedrooms: 4,
    hook_line: "Six boutique villas with private pools, close to Candolim and Calangute.",
    summary:
      "A boutique collection of six 4BHK luxury villas in Pilerne offering privacy, elegance and strong investment potential, with hill views and private pools.",
    description:
      "The Pilerne Villa collection is six independent 4BHK villas designed around double-height living areas, private pools with jacuzzi, manicured gardens and spacious outdoor decks — a short drive from Candolim and Calangute beaches.",
    highlights: "4BHK, private pool + jacuzzi, hill views, 334–447 sqm plots",
    completion_date: "Ready to move select units",
    image_url: "/assets/landing-vertical.png",
    media_url: "/assets/landing-vertical.png",
    media_type: "image",
    gallery_urls: ["/assets/landing-vertical.png", "/assets/brand-ad.png"],
    featured: true,
    display_order: 2,
    visible: true,
  },
  {
    id: "seed-ocean-view-apartments",
    created_at: "2026-01-01T00:00:00Z",
    title: "Ocean View Apartments",
    slug: "ocean-view-apartments",
    badge: "Sea View",
    location: "Dona Paula, North Goa",
    property_type: "Apartment",
    status: "Available",
    price: "Price on Request",
    price_on_request: true,
    bua: null,
    sbua: null,
    plot_size: null,
    bedrooms: 3,
    hook_line: "270° ocean views with a rooftop pool, completing June 2026.",
    summary:
      "Luxury 3BHK sea-view apartments in Dona Paula with 270° ocean views, a private jacuzzi, rooftop pool and premium amenities in a gated society.",
    description:
      "Ocean View Apartments sit above Dona Paula's coastline, offering 3BHK residences with 270° ocean views, private jacuzzis and a shared rooftop pool. Completion is expected June 2026, inside a fully gated, amenity-rich society.",
    highlights: "3BHK, 270° ocean views, rooftop pool, gated society",
    completion_date: "June 2026",
    image_url: "/assets/brand-ad.png",
    media_url: "/assets/brand-ad.png",
    media_type: "image",
    gallery_urls: ["/assets/brand-ad.png", "/assets/hero-screen.png"],
    featured: true,
    display_order: 3,
    visible: true,
  },
];

const FALLBACK_REQUIREMENTS: Requirement[] = [
  {
    id: "seed-req-1",
    created_at: "2026-08-10T00:00:00Z",
    title: "3BHK sea-view apartment, Candolim",
    details:
      "Buyer looking for a 3BHK sea-view apartment in Candolim, ready to move or under-construction with a firm completion date. Vastu-friendly layout preferred.",
    budget_range: "₹2.5Cr – ₹3.2Cr",
    locations: "Candolim",
    property_type: "Apartment",
    urgency: "Within 2 months",
    posted_at: "2026-08-10T00:00:00Z",
    active: true,
  },
  {
    id: "seed-req-2",
    created_at: "2026-08-15T00:00:00Z",
    title: "Premium 4BHK villa, long-term rental",
    details:
      "Family seeking a long-term villa rental with a garden, bright interiors, dedicated parking and peaceful surroundings in North Goa.",
    budget_range: "Up to ₹2.25L/month",
    locations: "North Goa",
    property_type: "Villa",
    urgency: "Immediate",
    posted_at: "2026-08-15T00:00:00Z",
    active: true,
  },
];

function mapProperty(row: Record<string, unknown>, index: number): Property {
  const title = (row.title as string) || "Untitled Property";
  return {
    id: (row.id as string) ?? `row-${index}`,
    created_at: (row.created_at as string) ?? new Date().toISOString(),
    title,
    slug: (row.slug as string) || slugify(title) || `property-${index}`,
    badge: (row.badge as string) ?? null,
    location: (row.location as string) ?? "",
    property_type: (row.property_type as Property["property_type"]) ?? "Villa",
    status: (row.status as Property["status"]) ?? "Available",
    price: (row.price as string) || "Price on Request",
    price_on_request: (row.price_on_request as boolean) ?? true,
    bua: (row.bua as string) ?? null,
    sbua: (row.sbua as string) ?? null,
    plot_size: (row.plot_size as string) ?? null,
    bedrooms: (row.bedrooms as number) ?? null,
    hook_line: (row.hook_line as string) ?? null,
    summary: (row.summary as string) ?? "",
    description: (row.description as string) ?? (row.summary as string) ?? null,
    highlights: (row.highlights as string) ?? null,
    completion_date: (row.completion_date as string) ?? null,
    image_url: (row.image_url as string) ?? null,
    media_url: (row.media_url as string) ?? (row.image_url as string) ?? null,
    media_type: (row.media_type as string) ?? null,
    gallery_urls:
      (row.gallery_urls as string[]) ??
      [(row.media_url as string) || (row.image_url as string)].filter(
        Boolean
      ),
    featured: (row.featured as boolean) ?? true,
    display_order: (row.display_order as number) ?? 0,
    visible: (row.visible as boolean) ?? true,
  };
}

function mapRequirement(row: Record<string, unknown>, index: number): Requirement {
  return {
    id: (row.id as string) ?? `req-${index}`,
    created_at: (row.created_at as string) ?? new Date().toISOString(),
    title: (row.title as string) || "Live Requirement",
    details: (row.details as string) ?? "",
    budget_range: (row.budget_range as string) ?? null,
    locations: (row.locations as string) ?? null,
    property_type: (row.property_type as string) ?? null,
    urgency: (row.urgency as string) ?? null,
    posted_at: (row.posted_at as string) ?? (row.created_at as string) ?? new Date().toISOString(),
    active: (row.active as boolean) ?? true,
  };
}

export async function getAllProperties(): Promise<Property[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("visible", true)
    .order("created_at", { ascending: false });

  if (error || !data || data.length === 0) {
    if (error) console.warn("getAllProperties:", error.message);
    return FALLBACK_PROPERTIES;
  }

  return data
    .map(mapProperty)
    .sort((a, b) => a.display_order - b.display_order);
}

export async function getFeaturedProperties(limit = 3): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.featured).slice(0, limit);
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  const all = await getAllProperties();
  return all.find((p) => p.slug === slug) ?? null;
}

export async function getRelatedProperties(
  currentSlug: string,
  limit = 3
): Promise<Property[]> {
  const all = await getAllProperties();
  return all.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export async function getAllPropertiesForAdmin(): Promise<Property[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.warn("getAllPropertiesForAdmin:", error.message);
    return [];
  }
  return (data ?? []).map(mapProperty);
}

export async function getAllRequirementsForAdmin(): Promise<Requirement[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("requirements")
    .select("*")
    .order("posted_at", { ascending: false });

  if (error) {
    console.warn("getAllRequirementsForAdmin:", error.message);
    return [];
  }
  return (data ?? []).map(mapRequirement);
}

export async function getActiveRequirements(): Promise<Requirement[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("requirements")
    .select("*")
    .eq("active", true)
    .order("posted_at", { ascending: false });

  if (error || !data || data.length === 0) {
    if (error) console.warn("getActiveRequirements:", error.message);
    return FALLBACK_REQUIREMENTS;
  }

  return data.map(mapRequirement);
}

export function isStale(postedAt: string) {
  const days = (Date.now() - new Date(postedAt).getTime()) / 86_400_000;
  return days > STALE_DAYS;
}

export function daysAgo(postedAt: string) {
  const days = Math.floor(
    (Date.now() - new Date(postedAt).getTime()) / 86_400_000
  );
  if (days <= 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}
