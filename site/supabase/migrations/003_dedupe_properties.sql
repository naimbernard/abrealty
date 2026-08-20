-- Removes exact-duplicate seed rows created when 001_initial_schema.sql's
-- insert was run twice against the live project (same title, images and
-- content — only id/created_at/slug differ). Keeps the earlier-created row
-- of each pair, which also carries the clean (non "-2" suffixed) slug.

delete from public.properties
where id in (
  '87eb2a51-b6f5-4b13-8830-856447cb24a3', -- Luxury 3BHK Villa with Private Pool (dup)
  'bd26f4e0-6320-49ec-bc64-8b5b54e9dbee', -- Rare 2BHK Vianaar Apartment Resale (dup)
  '62f15e65-96b1-42a2-808d-a548e554cc71'  -- Rare 2BHK Vianaar Villa Resale (dup)
);
