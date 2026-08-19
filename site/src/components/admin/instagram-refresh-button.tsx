"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function InstagramRefreshButton() {
  const [pending, setPending] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  async function refresh() {
    setPending(true);
    setToken(null);
    try {
      const res = await fetch("/api/instagram/refresh", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Refresh failed");
      setToken(data.access_token);
      toast.success(`New token valid for ~${data.expires_in_days} days`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Refresh failed");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Button type="button" variant="outline" onClick={refresh} disabled={pending} className="w-fit">
        {pending ? "Refreshing…" : "Refresh Instagram Token"}
      </Button>
      {token && (
        <div className="rounded-lg border border-black/10 bg-sand/40 p-3 text-xs break-all">
          <p className="mb-1 font-semibold">
            New INSTAGRAM_ACCESS_TOKEN — copy this into Vercel and redeploy:
          </p>
          <code>{token}</code>
        </div>
      )}
    </div>
  );
}
