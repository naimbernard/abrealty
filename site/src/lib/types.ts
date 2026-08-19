export type PropertyType = "Villa" | "Apartment" | "Plot" | "Land";
export type PropertyStatus = "Available" | "Under Offer" | "Sold";

export type Property = {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  badge: string | null;
  location: string;
  property_type: PropertyType;
  status: PropertyStatus;
  price: string;
  price_on_request: boolean;
  bua: string | null;
  sbua: string | null;
  plot_size: string | null;
  bedrooms: number | null;
  hook_line: string | null;
  summary: string;
  description: string | null;
  highlights: string | null;
  completion_date: string | null;
  image_url: string | null;
  media_url: string | null;
  media_type: string | null;
  gallery_urls: string[];
  featured: boolean;
  display_order: number;
  visible: boolean;
};

export type Requirement = {
  id: string;
  created_at: string;
  title: string;
  details: string;
  budget_range: string | null;
  locations: string | null;
  property_type: string | null;
  urgency: string | null;
  posted_at: string;
  active: boolean;
};
