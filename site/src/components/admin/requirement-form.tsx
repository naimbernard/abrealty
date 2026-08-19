"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { createRequirement } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function RequirementForm() {
  const [state, action, pending] = useActionState(createRequirement, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Requirement posted");
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
        <p className="mb-1 text-sm font-semibold">Post a requirement</p>
        <p className="text-xs text-muted-foreground">Takes under a minute — this goes live immediately.</p>
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="req-title">Title</Label>
        <Input id="req-title" name="title" placeholder="3BHK sea-view apartment, Candolim" required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="locations">Preferred location(s)</Label>
        <Input id="locations" name="locations" placeholder="Candolim" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="req-property-type">Property type</Label>
        <Input id="req-property-type" name="property_type" placeholder="Apartment" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="budget_range">Budget range</Label>
        <Input id="budget_range" name="budget_range" placeholder="₹2.5Cr – ₹3.2Cr" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="urgency">Timeline / urgency</Label>
        <Input id="urgency" name="urgency" placeholder="Within 2 months" />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <Label htmlFor="details">Full details</Label>
        <Textarea id="details" name="details" rows={4} required />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" disabled={pending}>
          {pending ? "Posting…" : "Post Requirement"}
        </Button>
      </div>
    </form>
  );
}
