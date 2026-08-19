import "server-only";

const AUTHORIZE_URL = "https://www.instagram.com/oauth/authorize";
const TOKEN_URL = "https://api.instagram.com/oauth/access_token";
const GRAPH_URL = "https://graph.instagram.com";

export type InstagramPost = {
  id: string;
  caption: string | null;
  permalink: string;
  imageUrl: string;
  timestamp: string;
};

function env(name: string) {
  return process.env[name] || "";
}

export function isInstagramConnected() {
  return Boolean(env("INSTAGRAM_ACCESS_TOKEN") && env("INSTAGRAM_USER_ID"));
}

export function buildInstagramAuthorizeUrl(state: string) {
  const params = new URLSearchParams({
    client_id: env("INSTAGRAM_APP_ID"),
    redirect_uri: env("INSTAGRAM_REDIRECT_URI"),
    response_type: "code",
    scope: "instagram_business_basic",
    state,
  });
  return `${AUTHORIZE_URL}?${params.toString()}`;
}

export async function exchangeCodeForAccessToken(code: string) {
  const body = new URLSearchParams({
    client_id: env("INSTAGRAM_APP_ID"),
    client_secret: env("INSTAGRAM_APP_SECRET"),
    grant_type: "authorization_code",
    redirect_uri: env("INSTAGRAM_REDIRECT_URI"),
    code,
  });

  const res = await fetch(TOKEN_URL, { method: "POST", body });
  if (!res.ok) throw new Error(`Instagram token exchange failed: ${await res.text()}`);
  return (await res.json()) as { access_token: string; user_id: string };
}

export async function exchangeForLongLivedToken(shortLivedToken: string) {
  const params = new URLSearchParams({
    grant_type: "ig_exchange_token",
    client_secret: env("INSTAGRAM_APP_SECRET"),
    access_token: shortLivedToken,
  });

  const res = await fetch(`${GRAPH_URL}/access_token?${params.toString()}`);
  if (!res.ok) throw new Error(`Long-lived token exchange failed: ${await res.text()}`);
  return (await res.json()) as { access_token: string; token_type: string; expires_in: number };
}

export async function refreshLongLivedToken(currentToken: string) {
  const params = new URLSearchParams({
    grant_type: "ig_refresh_token",
    access_token: currentToken,
  });

  const res = await fetch(`${GRAPH_URL}/refresh_access_token?${params.toString()}`);
  if (!res.ok) throw new Error(`Token refresh failed: ${await res.text()}`);
  return (await res.json()) as { access_token: string; token_type: string; expires_in: number };
}

export async function getRecentInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const token = env("INSTAGRAM_ACCESS_TOKEN");
  const userId = env("INSTAGRAM_USER_ID");
  if (!token || !userId) return [];

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
    limit: String(limit),
    access_token: token,
  });

  try {
    const res = await fetch(`${GRAPH_URL}/${userId}/media?${params.toString()}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn("getRecentInstagramPosts:", await res.text());
      return [];
    }
    const json = (await res.json()) as {
      data: {
        id: string;
        caption?: string;
        media_type: string;
        media_url: string;
        thumbnail_url?: string;
        permalink: string;
        timestamp: string;
      }[];
    };

    return json.data
      .filter((item) => item.media_type !== "VIDEO" || item.thumbnail_url)
      .map((item) => ({
        id: item.id,
        caption: item.caption ?? null,
        permalink: item.permalink,
        imageUrl: item.media_type === "VIDEO" ? item.thumbnail_url! : item.media_url,
        timestamp: item.timestamp,
      }));
  } catch (err) {
    console.warn("getRecentInstagramPosts:", err);
    return [];
  }
}
