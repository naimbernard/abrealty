"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteProperty, updatePropertyFlags } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import type { Property } from "@/lib/types";

export function PropertyList({ properties }: { properties: Property[] }) {
  const [pending, startTransition] = useTransition();
  const [busyId, setBusyId] = useState<string | null>(null);

  function toggle(id: string, patch: Parameters<typeof updatePropertyFlags>[1]) {
    setBusyId(id);
    startTransition(async () => {
      try {
        await updatePropertyFlags(id, patch);
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Update failed");
      } finally {
        setBusyId(null);
      }
    });
  }

  function remove(id: string) {
    if (!confirm("Delete this property?")) return;
    setBusyId(id);
    startTransition(async () => {
      try {
        await deleteProperty(id);
        toast.success("Property deleted");
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Delete failed");
      } finally {
        setBusyId(null);
      }
    });
  }

  return (
    <div className="mt-6 grid gap-3">
      {properties.map((property) => (
        <div
          key={property.id}
          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/10 bg-white p-4"
        >
          <div>
            <p className="font-semibold">{property.title}</p>
            <p className="text-xs text-muted-foreground">
              {property.location} · {property.status}
              {property.featured ? " · Featured" : ""}
              {!property.visible ? " · Hidden" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={pending && busyId === property.id}
              onClick={() => toggle(property.id, { featured: !property.featured })}
            >
              {property.featured ? "Unfeature" : "Feature"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={pending && busyId === property.id}
              onClick={() => toggle(property.id, { visible: !property.visible })}
            >
              {property.visible ? "Hide" : "Show"}
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              disabled={pending && busyId === property.id}
              onClick={() => remove(property.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
