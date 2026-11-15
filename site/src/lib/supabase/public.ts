import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { fetchWithTimeout } from "@/lib/supabase/fetch-with-timeout";

/**
 * For anonymous, public reads only (property/requirement listings). Unlike
 * the `@supabase/ssr` server client, this never touches `cookies()` - doing
 * so would opt every public marketing page into fully dynamic rendering and
 * defeat ISR caching, even though these reads don't need a user session.
 * Admin-authenticated reads/writes still go through lib/supabase/server.ts.
 */
export function createPublicClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: { persistSession: false },
      global: { fetch: fetchWithTimeout },
    }
  );
}
