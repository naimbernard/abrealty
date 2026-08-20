-- Replaces the " – Location" dash-separator pattern in imported titles
-- (looked like a leftover scrape artifact) with a natural comma. Genuine
-- hyphenated compound words (e.g. "Double-Height", "Portuguese-Style") and
-- numeric ranges (e.g. "4–5 bedrooms") are untouched.

update public.properties set title = 'Vianaar La Estella, Nerul'
where id = '14c714b6-7271-4843-a6fd-a27dcaca8943'::uuid;

update public.properties set title = 'Casa del Sol, Beach-Touch Apartment, Miramar'
where id = '1f5df276-2940-42d9-80f5-3101ebc6adff'::uuid;

update public.properties set title = 'Vianaar Villa at La Luciana, Siolim'
where id = '9cb6779a-552f-4a8a-a13b-3376ace1bdf7'::uuid;

update public.properties set title = 'Luxury 3BHK Villa for Sale, Vagator, North Goa'
where id = '1f277d0a-7ee6-4bce-b2e0-a7f66bd65c62'::uuid;

update public.properties set title = 'Luxury 4BHK Villa with Pool & Jacuzzi, Socorro, North Goa'
where id = '44b488df-4aab-4120-94fe-889e235b605c'::uuid;

update public.properties set title = 'Luxury Villa for Sale, Nerul, North Goa'
where id = '05c291e2-5fe9-45c4-9852-0e79070ec477'::uuid;

update public.properties set title = 'Luxury Private Villa for Sale, Britona, North Goa'
where id = '72bc70f7-6155-4008-9f91-d53f287e4620'::uuid;

update public.properties set title = '4BHK Villa for Rent, Socorro, Porvorim'
where id = '32b4bb4d-0299-4c60-9160-ff0fdcfd68e2'::uuid;
