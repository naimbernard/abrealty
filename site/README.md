# AB Realty — Next.js Site

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
- Supabase (Postgres + Auth + Storage) — same project as the previous site

## One-time setup

### 1. Supabase migration

The `properties` table and `property-media` storage bucket already exist on
the live Supabase project. Run the new migration once, in the Supabase SQL
editor, to add the columns and the `requirements` table this rebuild needs:

```
supabase/migrations/002_site_rebuild.sql
```

It's additive only — existing listings are preserved, just backfilled with
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

### 3. Local dev

```
npm install
npm run dev
```

## Deploying on Vercel

This is a standard Next.js app — no custom build command needed.

- **Framework Preset:** Next.js
- **Root Directory:** `site`
- **Build Command:** (default) `next build`
- **Output Directory:** (default)
- Add the environment variables from above in the Vercel project settings.

## Admin

Go to `/admin`. Sign in with the same Supabase Auth email/password used for
the previous site's admin. From there you can add/hide/feature properties
(with photo uploads) and post/retire Requirements Board entries — changes go
live immediately, no redeploy needed.
