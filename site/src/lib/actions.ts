"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/slug";

async function requireSession() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return supabase;
}

export async function signIn(_prevState: unknown, formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

async function uploadMedia(supabase: Awaited<ReturnType<typeof createClient>>, file: File) {
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.\-_]+/g, "-");
  const path = `properties/${Date.now()}-${safeName}`;
  const { error } = await supabase.storage
    .from("property-media")
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || "application/octet-stream",
    });
  if (error) throw error;
  const { data } = supabase.storage.from("property-media").getPublicUrl(path);
  return { url: data.publicUrl, type: file.type || "" };
}

export async function createProperty(_prevState: unknown, formData: FormData) {
  const supabase = await requireSession();

  const title = String(formData.get("title") || "").trim();
  if (!title) return { error: "Title is required" };

  const files = formData
    .getAll("images")
    .filter((f): f is File => f instanceof File && f.size > 0);

  let galleryUrls: string[] = [];
  let mediaType = "";
  try {
    if (files.length) {
      const uploaded = await Promise.all(files.map((f) => uploadMedia(supabase, f)));
      galleryUrls = uploaded.map((u) => u.url);
      mediaType = uploaded[0].type;
    }
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Upload failed" };
  }

  const priceOnRequest = formData.get("price_on_request") === "on";
  const slugInput = String(formData.get("slug") || "") || title;

  const { error } = await supabase.from("properties").insert({
    title,
    slug: slugify(slugInput),
    badge: String(formData.get("badge") || "") || null,
    location: String(formData.get("location") || ""),
    property_type: String(formData.get("property_type") || "Villa"),
    status: String(formData.get("status") || "Available"),
    price: priceOnRequest ? "Price on Request" : String(formData.get("price") || ""),
    price_on_request: priceOnRequest,
    bua: String(formData.get("bua") || "") || null,
    sbua: String(formData.get("sbua") || "") || null,
    plot_size: String(formData.get("plot_size") || "") || null,
    bedrooms: formData.get("bedrooms") ? Number(formData.get("bedrooms")) : null,
    hook_line: String(formData.get("hook_line") || "") || null,
    summary: String(formData.get("summary") || ""),
    description: String(formData.get("description") || "") || null,
    highlights: String(formData.get("highlights") || "") || null,
    completion_date: String(formData.get("completion_date") || "") || null,
    image_url: galleryUrls[0] || "/assets/landing-wide.png",
    media_url: galleryUrls[0] || "/assets/landing-wide.png",
    media_type: mediaType,
    gallery_urls: galleryUrls,
    featured: formData.get("featured") === "on",
    display_order: formData.get("display_order") ? Number(formData.get("display_order")) : 0,
    visible: true,
  });

  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  return { success: true };
}

export async function updatePropertyFlags(
  id: string,
  patch: { visible?: boolean; featured?: boolean; status?: string }
) {
  const supabase = await requireSession();
  const { error } = await supabase.from("properties").update(patch).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}

export async function deleteProperty(id: string) {
  const supabase = await requireSession();
  const { error } = await supabase.from("properties").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}

export async function createRequirement(_prevState: unknown, formData: FormData) {
  const supabase = await requireSession();

  const title = String(formData.get("title") || "").trim();
  if (!title) return { error: "Title is required" };

  const { error } = await supabase.from("requirements").insert({
    title,
    details: String(formData.get("details") || ""),
    budget_range: String(formData.get("budget_range") || "") || null,
    locations: String(formData.get("locations") || "") || null,
    property_type: String(formData.get("property_type") || "") || null,
    urgency: String(formData.get("urgency") || "") || null,
    active: true,
  });

  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  return { success: true };
}

export async function toggleRequirementActive(id: string, active: boolean) {
  const supabase = await requireSession();
  const { error } = await supabase.from("requirements").update({ active }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}

export async function deleteRequirement(id: string) {
  const supabase = await requireSession();
  const { error } = await supabase.from("requirements").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/", "layout");
}
