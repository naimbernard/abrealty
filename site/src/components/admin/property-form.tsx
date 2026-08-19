"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { createProperty } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const selectClass =
  "h-9 rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function PropertyForm() {
  const [state, action, pending] = useActionState(createProperty, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Property added");
      formRef.current?.reset();
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={action}
      className="grid grid-cols-1 gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(0,0,0,0.05)] sm:grid-cols-2"
    >
      <div className="sm:col-span-2">
        <p className="mb-1 text-sm font-semibold">Add a property</p>
        <p className="text-xs text-muted-foreground">
          Uploads go live on the site immediately after submitting.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" placeholder="The Guirim Villa" required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="badge">Badge</Label>
        <Input id="badge" name="badge" placeholder="New Launch" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" placeholder="Guirim, North Goa" required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="property_type">Property Type</Label>
        <select id="property_type" name="property_type" className={selectClass} defaultValue="Villa">
          <option>Villa</option>
          <option>Apartment</option>
          <option>Plot</option>
          <option>Land</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="status">Status</Label>
        <select id="status" name="status" className={selectClass} defaultValue="Available">
          <option>Available</option>
          <option>Under Offer</option>
          <option>Sold</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="bedrooms">Bedrooms</Label>
        <Input id="bedrooms" name="bedrooms" type="number" min={0} placeholder="4" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="bua">Built-up Area (BUA)</Label>
        <Input id="bua" name="bua" placeholder="~3,900 sq.ft" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="sbua">Super Built-up Area (SBUA)</Label>
        <Input id="sbua" name="sbua" placeholder="~5,900 sq.ft" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="plot_size">Plot Size</Label>
        <Input id="plot_size" name="plot_size" placeholder="334 sqm" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="completion_date">Completion</Label>
        <Input id="completion_date" name="completion_date" placeholder="January 2026" />
      </div>

      <div className="flex items-center gap-2 sm:col-span-2">
        <input id="price_on_request" name="price_on_request" type="checkbox" defaultChecked className="size-4" />
        <Label htmlFor="price_on_request" className="font-normal">
          Price on Request
        </Label>
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="price">Price (if not &quot;on request&quot;)</Label>
        <Input id="price" name="price" placeholder="₹2.5 Cr" />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="hook_line">One-line hook (for card)</Label>
        <Input id="hook_line" name="hook_line" placeholder="A contemporary 4BHK villa with an infinity pool." />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="summary">Short summary</Label>
        <Textarea id="summary" name="summary" rows={3} required />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="description">Full description</Label>
        <Textarea id="description" name="description" rows={5} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="highlights">Highlights (comma separated)</Label>
        <Input id="highlights" name="highlights" placeholder="Infinity pool, paddy field views, gated enclave" />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="images">Photos (multiple allowed)</Label>
        <input
          id="images"
          name="images"
          type="file"
          accept="image/*,video/*"
          multiple
          className="rounded-lg border border-dashed border-gold/60 bg-sand/40 p-3 text-sm"
        />
        <p className="text-xs text-muted-foreground">First photo becomes the cover image.</p>
      </div>

      <div className="flex items-center gap-2">
        <input id="featured" name="featured" type="checkbox" defaultChecked className="size-4" />
        <Label htmlFor="featured" className="font-normal">
          Featured on homepage
        </Label>
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="display_order">Display order</Label>
        <Input id="display_order" name="display_order" type="number" defaultValue={0} />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" disabled={pending}>
          {pending ? "Submitting…" : "Submit Property"}
        </Button>
      </div>
    </form>
  );
}
