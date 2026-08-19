"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { deleteRequirement, toggleRequirementActive } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import type { Requirement } from "@/lib/types";

export function RequirementList({ requirements }: { requirements: Requirement[] }) {
  const [pending, startTransition] = useTransition();
  const [busyId, setBusyId] = useState<string | null>(null);

  function toggle(id: string, active: boolean) {
    setBusyId(id);
    startTransition(async () => {
      try {
        await toggleRequirementActive(id, active);
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Update failed");
      } finally {
        setBusyId(null);
      }
    });
  }

  function remove(id: string) {
    if (!confirm("Delete this requirement?")) return;
    setBusyId(id);
    startTransition(async () => {
      try {
        await deleteRequirement(id);
        toast.success("Requirement deleted");
      } catch (err) {
        toast.error(err instanceof Error ? err.message : "Delete failed");
      } finally {
        setBusyId(null);
      }
    });
  }

  return (
    <div className="mt-6 grid gap-3">
      {requirements.map((requirement) => (
        <div
          key={requirement.id}
          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/10 bg-white p-4"
        >
          <div>
            <p className="font-semibold">{requirement.title}</p>
            <p className="text-xs text-muted-foreground">
              {requirement.locations} · {requirement.active ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={pending && busyId === requirement.id}
              onClick={() => toggle(requirement.id, !requirement.active)}
            >
              {requirement.active ? "Deactivate" : "Activate"}
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              disabled={pending && busyId === requirement.id}
              onClick={() => remove(requirement.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
