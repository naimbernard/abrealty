import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { refreshLongLivedToken } from "@/lib/instagram";

export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!currentToken) {
    return NextResponse.json({ error: "Instagram is not connected yet" }, { status: 400 });
  }

  try {
    const refreshed = await refreshLongLivedToken(currentToken);
    return NextResponse.json({
      access_token: refreshed.access_token,
      expires_in_days: Math.round(refreshed.expires_in / 86400),
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Refresh failed" },
      { status: 500 }
    );
  }
}
