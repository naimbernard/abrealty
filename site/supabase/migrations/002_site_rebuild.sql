-- AB Realty — Next.js rebuild migration
-- Additive only: extends the existing `properties` table with new columns
-- (backfilled with sane defaults so Amar's existing listings are untouched)
-- and creates the new `requirements` table for the Requirements Board.
--
-- Run this once in Supabase > SQL Editor, after 001_initial_schema.sql has
-- already been applied (it has, on the live project).

-- 1) Extend properties -------------------------------------------------

alter table public.properties
  add column if not exists slug text,
  add column if not exists property_type text default 'Villa',
  add column if not exists status text default 'Available',
  add column if not exists price_on_request boolean default true,
  add column if not exists bua text,
  add column if not exists sbua text,
  add column if not exists plot_size text,
  add column if not exists bedrooms int,
  add column if not exists hook_line text,
  add column if not exists description text,
  add column if not exists completion_date text,
  add column if not exists gallery_urls text[] default '{}',
  add column if not exists featured boolean default true,
  add column if not exists display_order int default 0;

-- Backfill gallery_urls from the existing single media/image url, only for
-- rows that don't have one yet.
update public.properties
set gallery_urls = array_remove(array[media_url, image_url], null)
where gallery_urls is null or gallery_urls = '{}';

-- Backfill description from summary where empty.
update public.properties
set description = summary
where description is null;

-- Backfill slug from title, deduping any collisions with a numeric suffix.
with base as (
  select
    id,
    regexp_replace(lower(trim(title)), '[^a-z0-9]+', '-', 'g') as base_slug,
    row_number() over (
      partition by regexp_replace(lower(trim(title)), '[^a-z0-9]+', '-', 'g')
      order by created_at
    ) as rn
  from public.properties
  where slug is null
)
update public.properties p
set slug = case when base.rn = 1 then base.base_slug else base.base_slug || '-' || base.rn end
from base
where p.id = base.id;

alter table public.properties
  alter column slug set not null;

create unique index if not exists properties_slug_key on public.properties (slug);

-- 2) Requirements board --------------------------------------------------

create table if not exists public.requirements (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  details text,
  budget_range text,
  locations text,
  property_type text,
  urgency text,
  posted_at timestamptz not null default now(),
  active boolean not null default true
);

alter table public.requirements enable row level security;

drop policy if exists "Public can view active requirements" on public.requirements;
create policy "Public can view active requirements"
on public.requirements
for select
using (active = true);

drop policy if exists "Authenticated admins can view all requirements" on public.requirements;
create policy "Authenticated admins can view all requirements"
on public.requirements
for select
to authenticated
using (true);

drop policy if exists "Authenticated admins can insert requirements" on public.requirements;
create policy "Authenticated admins can insert requirements"
on public.requirements
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated admins can update requirements" on public.requirements;
create policy "Authenticated admins can update requirements"
on public.requirements
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated admins can delete requirements" on public.requirements;
create policy "Authenticated admins can delete requirements"
on public.requirements
for delete
to authenticated
using (true);
