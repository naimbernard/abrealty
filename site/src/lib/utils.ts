import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Hosts allowed in next.config.ts `images.remotePatterns` - anything else
// (a stray admin-pasted URL from an unlisted host) falls back to
// `unoptimized` so the image still renders instead of erroring.
const OPTIMIZABLE_HOSTS = ["njxnuucpesumambapxsd.supabase.co", "static.wixstatic.com"]

export function isOptimizableImage(url: string) {
  if (url.startsWith("/")) return true
  try {
    return OPTIMIZABLE_HOSTS.includes(new URL(url).hostname)
  } catch {
    return false
  }
}
