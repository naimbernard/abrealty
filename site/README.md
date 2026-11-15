# AB Realty - Next.js Site

A premium, animated rebuild of the AB Realty marketing site and admin panel,
built with Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, Lenis and
Supabase.

This replaces the static site in `../ab-realty-vercel-ready`, which is kept
in the repo as a fallback until this one is confirmed live.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 + shadcn/ui (Base UI)
- Framer Motion for scroll reveals / micro-interactions
- Lenis for smooth scrolling (respects `prefers-reduced-motion`)
- Supabase (Postgres + Auth + Storage) - same project as the previous site

## One-time setup

### 1. Supabase migration

The `properties` table and `property-media` storage bucket already exist on
the live Supabase project. Run the new migration once, in the Supabase SQL
editor, to add the columns and the `requirements` table this rebuild needs:

```
supabase/migrations/002_site_rebuild.sql
```

It's additive only - existing listings are preserved, just backfilled with
sane defaults (slug, gallery, etc).

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=https://abrealty.in
NEXT_PUBLIC_WHATSAPP_NUMBER=919373136048
```

Set the same variables in the Vercel project settings before deploying.

### 3. Instagram feed setup (optional, one-time)

The homepage's Instagram rail shows AB Realty's real, live posts - this
requires a token that only Amar (the account owner) can generate. It's a
15-minute setup, and only needs to be done once. Meta's own App Review is
**not** required here since this only ever reads AB Realty's own account.

1. Make sure `@ab_realty_in` is set to a **Professional (Business or
   Creator) account** - Instagram app → Settings → Account type.
2. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps)
   and create a new app (type: "Other" / "Business").
3. In the app dashboard, add the **Instagram** product, then choose
   **"API setup with Instagram login"** (also called Business Login for
   Instagram). Add `@ab_realty_in` as the connected Instagram account when
   prompted.
4. Under the app's Instagram settings, add an OAuth redirect URI matching
   `INSTAGRAM_REDIRECT_URI` - for production that's
   `https://abrealty.in/api/instagram/callback`.
5. From the app dashboard, copy the **Instagram app ID** and **app secret**
   into `INSTAGRAM_APP_ID` / `INSTAGRAM_APP_SECRET` (in `.env.local` and in
   Vercel's environment variables), along with `INSTAGRAM_REDIRECT_URI`.
   Redeploy so Vercel picks them up.
6. Sign into `/admin` on the deployed site and click **Connect Instagram**.
   Approve access as `@ab_realty_in` when Instagram prompts you. You'll land
   on a page showing `INSTAGRAM_ACCESS_TOKEN` and `INSTAGRAM_USER_ID` - copy
   both into Vercel's environment variables and redeploy once more.

The feed will then appear on the homepage automatically. Instagram's tokens
expire after 60 days and don't renew themselves - every couple of months,
click **Refresh Instagram Token** in `/admin`, copy the new value into
Vercel, and redeploy. If the token lapses, the rail just quietly disappears
from the homepage rather than showing broken images - nothing breaks.

### 4. Local dev

```
npm install
npm run dev
```

## Deploying on Vercel

This is a standard Next.js app - no custom build command needed.

- **Framework Preset:** Next.js
- **Root Directory:** `site`
- **Build Command:** (default) `next build`
- **Output Directory:** (default)
- Add the environment variables from above in the Vercel project settings.

## Admin

Go to `/admin`. Sign in with the same Supabase Auth email/password used for
the previous site's admin. From there you can add/hide/feature properties
(with photo uploads) and post/retire Requirements Board entries - changes go
live immediately, no redeploy needed.
