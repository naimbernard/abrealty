const TIMEOUT_MS = 3000;

/**
 * Supabase's client has no built-in request timeout, so a DNS/network
 * failure on the backend (e.g. a paused or deleted project) hangs every
 * caller for the platform's default socket timeout - several seconds, on
 * every single page view since these calls back marketing pages. This caps
 * that at TIMEOUT_MS so a dead backend fails fast instead of stalling TTFB.
 */
export function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  return fetch(input, { ...init, signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}
