import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { exchangeCodeForAccessToken, exchangeForLongLivedToken } from "@/lib/instagram";

function htmlPage(body: string) {
  return new NextResponse(
    `<!doctype html><html><head><meta charset="utf-8"><title>Instagram Connect</title>
    <style>body{font-family:system-ui,sans-serif;max-width:640px;margin:60px auto;padding:0 24px;line-height:1.6;color:#17150e}
    code{background:#f6f3e8;padding:2px 6px;border-radius:4px;word-break:break-all}
    .box{background:#fff7d6;border:1px solid rgba(152,131,52,.35);border-radius:12px;padding:20px;margin:16px 0}</style>
    </head><body>${body}</body></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const code = request.nextUrl.searchParams.get("code");
  const error = request.nextUrl.searchParams.get("error_description");

  if (error) {
    return htmlPage(`<h1>Instagram connection failed</h1><p>${error}</p>`);
  }
  if (!code) {
    return htmlPage(`<h1>Instagram connection failed</h1><p>No authorization code was returned.</p>`);
  }

  try {
    const shortLived = await exchangeCodeForAccessToken(code);
    const longLived = await exchangeForLongLivedToken(shortLived.access_token);

    return htmlPage(`
      <h1>Instagram connected</h1>
      <p>Copy these two values into your Vercel project's Environment Variables, then redeploy:</p>
      <div class="box">
        <p><strong>INSTAGRAM_ACCESS_TOKEN</strong></p>
        <code>${longLived.access_token}</code>
      </div>
      <div class="box">
        <p><strong>INSTAGRAM_USER_ID</strong></p>
        <code>${shortLived.user_id}</code>
      </div>
      <p>This token is valid for 60 days. Use the "Refresh Instagram Token" button in
      <a href="/admin">/admin</a> every couple of months to get a fresh one before it expires.</p>
    `);
  } catch (err) {
    return htmlPage(
      `<h1>Instagram connection failed</h1><p>${err instanceof Error ? err.message : "Unknown error"}</p>`
    );
  }
}
