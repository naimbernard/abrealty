-- AB Realty Supabase setup
-- 1) In Supabase, open SQL Editor.
-- 2) Paste and run this whole file.
-- 3) Go to Authentication > Users > Add user and create Amar's admin email/password.
-- 4) In index.html, paste your Project URL and anon public key into window.AB_SUPABASE.

create extension if not exists "pgcrypto";

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  badge text,
  location text,
  price text default 'Get in Touch',
  image_url text,
  summary text,
  highlights text,
  visible boolean not null default true
);

alter table public.properties enable row level security;

drop policy if exists "Public can view visible properties" on public.properties;
create policy "Public can view visible properties"
on public.properties
for select
using (visible = true);

drop policy if exists "Authenticated admins can view all properties" on public.properties;
create policy "Authenticated admins can view all properties"
on public.properties
for select
to authenticated
using (true);

drop policy if exists "Authenticated admins can insert properties" on public.properties;
create policy "Authenticated admins can insert properties"
on public.properties
for insert
to authenticated
with check (true);

drop policy if exists "Authenticated admins can update properties" on public.properties;
create policy "Authenticated admins can update properties"
on public.properties
for update
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated admins can delete properties" on public.properties;
create policy "Authenticated admins can delete properties"
on public.properties
for delete
to authenticated
using (true);

insert into public.properties (title,badge,location,price,image_url,summary,highlights,visible)
values
('Rare 2BHK Vianaar Villa Resale','Rare Resale','La Luciana, Siolim, North Goa','Get in Touch','assets/landing-wide.png','Rare 2BHK Vianaar villa resale in La Luciana, Siolim, offering private pool living in a sold-out luxury community.','114 sqm carpet, 187 sqm built-up, 110 sqm garden, private pool, skylights, gated enclave, near Morjim Beach.',true),
('Rare 2BHK Vianaar Apartment Resale','Rare Resale','Nerul, North Goa','Get in Touch','assets/landing-vertical.png','Rare 2BHK corner apartment in a sold-out Vianaar development, with paddy field views, private plunge pool and an exceptionally large garden.','92.4 sqm carpet, 125.4 sqm built-up, 144 sqm private garden, corner unit, possession Feb 2027.',true),
('Luxury 3BHK Villa with Private Pool','Premium Villa','Pinto Rosario Square, Porvorim, North Goa','Get in Touch','assets/brand-ad.png','Fully furnished 3BHK villa in Pinto Rosario Square, offering private pool living in a prestigious gated community in Porvorim.','220 sqm built area, private pool, fully furnished, air-conditioned, maid’s quarters, two common pools, gym, security.',true)
on conflict do nothing;


-- Phone image/video upload support
alter table public.properties
add column if not exists media_url text,
add column if not exists media_type text;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'property-media',
  'property-media',
  true,
  52428800,
  array['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm','video/quicktime']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 52428800,
  allowed_mime_types = array['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm','video/quicktime'];

drop policy if exists "Public can view property media" on storage.objects;
create policy "Public can view property media"
on storage.objects
for select
using (bucket_id = 'property-media');

drop policy if exists "Authenticated admins can upload property media" on storage.objects;
create policy "Authenticated admins can upload property media"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'property-media');

drop policy if exists "Authenticated admins can update property media" on storage.objects;
create policy "Authenticated admins can update property media"
on storage.objects
for update
to authenticated
using (bucket_id = 'property-media')
with check (bucket_id = 'property-media');

drop policy if exists "Authenticated admins can delete property media" on storage.objects;
create policy "Authenticated admins can delete property media"
on storage.objects
for delete
to authenticated
using (bucket_id = 'property-media');
