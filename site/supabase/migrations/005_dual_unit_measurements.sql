-- Ensures every sqm measurement also shows its sq.ft equivalent and
-- vice versa, consistently across bua/sbua/plot_size/highlights/
-- description. Also fixes a data-entry bug from migration 004 where
-- two Vianaar listings had bua accidentally set equal to sbua (both
-- held the SBUA value) instead of the carpet area.

update public.properties set
  bua = '220 sqm (2,368 sq.ft)',
  highlights = '220 sqm (2,368 sq.ft) built area, private pool, fully furnished, air-conditioned, maid''s quarters, two common pools, gym, security',
  description = 'Own a luxury 3BHK villa with a private pool in Pinto Rosario Square, one of the most prestigious gated villa communities in North Goa. Located in the heart of Porvorim, this fully furnished villa is a rare opportunity for homebuyers and investors seeking premium real estate in a prime location.

Built across 220 sqm (2,368 sq.ft), the villa is thoughtfully designed for modern luxury living and comes fully air-conditioned with premium white goods, elegant interiors, spacious living areas, and a dedicated maid''s quarters. One of the standout features of this property is its private swimming pool — a rare offering within the community.

The gated complex is known for its premium lifestyle amenities, including two common swimming pools, a fully equipped gym, landscaped open spaces, children''s play area, and excellent security, making it ideal for families, holiday homeowners, and luxury property investors.

Strategically located in Porvorim, North Goa, the villa offers seamless access to Panjim, Candolim, Calangute, top restaurants, beaches, schools, and entertainment hubs.'
where id = 'aaaaef9c-4a13-4c46-ad31-c1ec8ca4f5f4'::uuid;

update public.properties set
  bua = '114 sqm (1,227 sq.ft) carpet',
  highlights = '114 sqm (1,227 sq.ft) carpet, 187 sqm (2,013 sq.ft) SBUA, 110 sqm (1,184 sq.ft) private garden, private pool, skylights, gated enclave, near Morjim Beach'
where id = '9cb6779a-552f-4a8a-a13b-3376ace1bdf7'::uuid;

update public.properties set
  bua = '92.4 sqm (995 sq.ft) carpet',
  highlights = '92.4 sqm (995 sq.ft) carpet, 125.4 sqm (1,350 sq.ft) built-up, 144 sqm (1,550 sq.ft) private garden, corner unit, private plunge pool, possession Feb 2027'
where id = '14c714b6-7271-4843-a6fd-a27dcaca8943'::uuid;

update public.properties set
  highlights = 'Airbnb permitted, private jacuzzi, 360 sqm (3,875 sq.ft) duplex, full generator backup, field views',
  description = 'Discover a rare investment opportunity in North Goa with this Airbnb-permitted 4BHK duplex penthouse — a property designed for high returns and long-term value.

Built-up area of 360 sqm (3,875 sq.ft) across a duplex layout, with a private jacuzzi and full generator backup. Located 5 minutes to Candolim Beach & Tereza Beach House, 1 km from Coco Beach, and 2.5 km from Reis Magos Fort — surrounded by upscale dining, beaches, and tourist hotspots.

With its combination of location, amenities, and Airbnb approval, this penthouse offers exceptional rental yields and consistent occupancy.'
where id = '1ed0acef-1765-4444-9265-1c91f300b967'::uuid;

update public.properties set
  bua = '328 sqm (3,531 sq.ft)',
  plot_size = '405 sqm (4,359 sq.ft)',
  description = 'Experience refined living in this spacious standalone villa located in the serene and well-connected neighborhood of Socorro, North Goa. Designed for comfort, privacy, and effortless entertaining, this elegant home offers generous indoor spaces complemented by premium outdoor amenities.

Set on a 405 sq.m. (4,359 sq.ft) plot with a built-up area of 328 sq.m. (3,531 sq.ft), the villa features 4 well-appointed bedrooms, a private swimming pool with jacuzzi, servant''s quarters, and parking for up to 3 cars. The layout is ideal for both full-time living and luxury holiday stays.'
where id = '44b488df-4aab-4120-94fe-889e235b605c'::uuid;

update public.properties set
  plot_size = '193 sqm (2,077 sq.ft)'
where id = '24fe3ca0-3a64-4843-9543-5f598da67963'::uuid;

update public.properties set
  bua = '~6,000 sq.ft (557 sqm)',
  description = 'Discover refined living amidst Goa''s lush paddy fields. This exceptional villa in Nagoa, North Goa, offers an exquisite balance of luxury, privacy, and natural beauty.

Spread across approximately 6,000 sq.ft. (557 sqm), the home features 4–5 spacious bedrooms, double-height living areas, and expansive French windows. Step out to your private infinity pool and deck. Premium fittings from brands like TOTO, Grohe, and Duravit ensure comfort meets sophistication.

Includes lift and staff quarters, 100% power backup, Vaastu-compliant layout, and reserved parking with 24/7 gated security. Located minutes from Anjuna and Candolim beaches.'
where id = 'faf998f6-2458-455f-981f-b49ee99e42e3'::uuid;

update public.properties set
  bua = '481 sqm (5,177 sq.ft)',
  plot_size = '794 sqm (8,547 sq.ft)',
  description = 'Nestled in the tranquil village of Reis Magos, this standalone villa offers uninterrupted, forever sea views with the assurance that no future construction will ever obstruct its breathtaking panorama. Just ten minutes from Candolim.

Each of the four spacious bedrooms comes with its own en-suite bathroom. A dedicated media room creates the perfect space for private screenings, while the living and dining areas flow onto the pool deck and landscaped garden. Includes separate staff quarters, a driver''s room, and parking for up to four cars, within a premium gated enclave with 24/7 security.

Spread across a generous 794 sqm (8,547 sq.ft) plot with a built-up area of 481 sqm (5,177 sq.ft), fully furnished with high-quality interiors and fittings.'
where id = 'd731d2b0-74bd-4d38-b9b3-1af8f47fb0ab'::uuid;

update public.properties set
  bua = '250 sqm (2,691 sq.ft)',
  highlights = '110 sqm (1,184 sq.ft) terrace with gazebo, 90 sqm (969 sq.ft) garage, three en-suite bedrooms, valley views',
  description = 'For sale in Porvorim — a spacious 3BHK apartment offering 250 sqm (2,691 sq.ft) of thoughtfully designed living space with high ceilings and abundant natural light. The home features three en-suite bedrooms, a powder room, two kitchens, and a large living and dining area, complemented by a second living room or office overlooking lush greenery.

A standout feature is the expansive 110 sqm (1,184 sq.ft) terrace with a gazebo, ideal for outdoor entertaining, along with a 90 sqm (969 sq.ft) garage providing ample parking and storage. Enjoy serene valley views and refreshing cross-breezes throughout the home.'
where id = '3ee9a04d-c74a-4697-acc9-09c70e26b174'::uuid;

update public.properties set
  plot_size = '1,500 sqm (16,146 sq.ft) field',
  highlights = 'Heritage villa, 4-seater outdoor jacuzzi, 1,500 sqm (16,146 sq.ft) field, servant quarter',
  description = 'For lease in Aldona — a heritage luxury villa that beautifully combines timeless charm with modern comforts. This 4BHK property offers ample indoor and outdoor living spaces, including a servant quarter with kitchen and attached bathroom, a large outdoor 4-seater jacuzzi, and a store room with an attached bathroom.

The villa also features an expansive 1,500 sqm (16,146 sq.ft) field, perfect for a landscaped garden or organic farming. With its blend of heritage character and contemporary amenities, this villa provides a rare opportunity to enjoy the elegance and tranquility of Aldona in a private, spacious setting.'
where id = '2f3754ff-6c3d-4b5f-91e8-70e56994996b'::uuid;

update public.properties set
  bua = '292 sqm (3,143 sq.ft)',
  description = 'A rare opportunity to own the final residence in an intimate enclave of just seven independent villas, this beautifully crafted home in Nerul embodies understated luxury, privacy, and refined living.

Set within a secure gated community, the home opens into a private landscaped garden and pool area. Built-Up Area: 292 sqm (3,143 sq.ft), Carpet Area: 223 sqm. (2,400 sq.ft) Features a private swimming pool, expansive private terrace, dedicated servant''s room, private covered car parking, EV charging point, and full power backup.

Exclusive gated enclave with only 7 independent villas, 24×7 security with guard, on-site caretaker. With only one villa remaining, this is a truly limited offering.'
where id = '05c291e2-5fe9-45c4-9852-0e79070ec477'::uuid;

update public.properties set
  sbua = '279 sqm (3,003 sq.ft) saleable',
  plot_size = '218 sqm (2,347 sq.ft)',
  description = 'Set in the quiet, upscale locale of Britona, this exclusive private villa is designed for those who value privacy, sophistication, and modern comfort. With clean architectural lines and thoughtfully planned spaces, the home offers a seamless blend of indoor elegance and outdoor leisure.

3 spacious bedrooms, 4 well-appointed bathrooms, private swimming pool, private lift for effortless access across levels, and an expansive private terrace. Plot Size: 218 sqm (2,347 sq.ft), Saleable Area: 279 sqm. (3,003 sq.ft) A sample villa is available for viewing.'
where id = '72bc70f7-6155-4008-9f91-d53f287e4620'::uuid;

update public.properties set
  bua = '1,933 sq.ft (180 sqm) carpet',
  sbua = '3,120 sq.ft (290 sqm) SBUA',
  highlights = '1,510 sq.ft (140 sqm) private garden, gated community, 3 bedrooms, generous living areas',
  description = 'Experience refined living in one of North Goa''s most sought-after gated communities. This spacious 3-bedroom garden residence offers a rare combination of expansive interiors and an exceptional private outdoor space — perfect for families, long-term living, or a serene holiday retreat.

Carpet Area: 1,933 sq.ft. (180 sqm) Super Built-up Area: 3,120 sq.ft. (290 sqm) Private Garden: 1,510 sq.ft. (140 sqm) Designed to balance indoor comfort with private open-air living, the home features generous proportions, abundant natural light, and seamless access to a beautifully sized garden.'
where id = '86fe7db5-fa2c-40cc-9d18-a3c5f18e6ecd'::uuid;

update public.properties set
  sbua = '480 sqm (5,167 sq.ft)',
  plot_size = '800 sqm (8,611 sq.ft)',
  description = 'For sale in North Goa — a beautifully restored Portuguese heritage villa that blends timeless architecture with modern comforts. Set on an 800 sqm (8,611 sq.ft) plot with a super built-up area of 480 sqm (5,167 sq.ft), the home features four en-suite bedrooms and a powder room, along with spacious living and dining areas ideal for entertaining.

The property includes a main kitchen with an additional dry kitchen, a maid''s room, and a charming gazebo overlooking the landscaped garden. Equipped with a private swimming pool, jacuzzi, solar water heating, full lighting and AC systems, and a backup genset with pumps.'
where id = 'b3216f98-58d0-4a27-881e-c1e0a9a54c30'::uuid;

update public.properties set
  bua = '>5,200 sq.ft (483 sqm)',
  plot_size = '>5,700 sq.ft (530 sqm)',
  description = 'Experience the pinnacle of luxury living with this exquisite four-bedroom villa located in the vibrant yet serene neighborhood of Anjuna. Designed with a perfect blend of elegance and functionality, the villa offers expansive living spaces finished with high-end interiors.

Spread across a generous plot of over 5,700 sq.ft. (530 sqm) with a built-up area of more than 5,200 sq.ft. (483 sqm) A private swimming pool and landscaped tropical garden create a tranquil outdoor setting. Comes with staff quarters, covered parking, generator backup, and CCTV security.

Perfectly located near Anjuna Beach, trendy cafés, and vibrant nightlife.'
where id = '9adb1970-53c3-45be-a1b6-8449a8613cf2'::uuid;

update public.properties set
  bua = '138 sqm (1,485 sq.ft)',
  highlights = 'Bare-shell delivery, 138 sqm (1,485 sq.ft), gated complex, excellent connectivity',
  description = 'Discover a fresh opportunity to own a brand-new 3BHK apartment in one of Taleigao''s most sought-after residential complexes. This spacious 138 sqm (1,485 sq.ft) home offers a blank canvas to design and furnish to your taste, with bright interiors, modern architecture, and thoughtful layout planning.

Located in a premium gated complex, the apartment is delivered in bare-shell condition — without fittings or a kitchen setup — allowing complete flexibility for buyers to customize finishes, interiors, and amenities. Excellent connectivity to major parts of Panjim and North Goa.'
where id = '8f5e7e1f-adc8-43fc-b5f0-9d87acf51bdc'::uuid;

update public.properties set
  bua = '1,931 sq.ft (179 sqm) carpet',
  sbua = '3,013 sq.ft (280 sqm) SBUA',
  highlights = 'Vianaar community, private pool, 750 sq.ft (70 sqm) private garden, reserved parking',
  description = 'Rare resale opportunity in one of Vagator''s most sought-after villa communities by Vianaar. Designed with contemporary architecture and seamless indoor-outdoor living, this elegant 3BHK villa offers strong rental potential in one of Goa''s highest-demand Airbnb markets.

With spacious interiors, a private swimming pool, landscaped garden space, and premium community appeal. Carpet Area: 1,931 sq.ft. (179 sqm) Super Built-up Area: 3,013 sq.ft. (280 sqm) Private Garden: 750 sq.ft. (70 sqm) Reserved parking. Located just minutes from Vagator''s beaches, restaurants, and nightlife.'
where id = '1f277d0a-7ee6-4bce-b2e0-a7f66bd65c62'::uuid;

update public.properties set
  sbua = '375 sqm (4,036 sq.ft)',
  plot_size = '376 sqm (4,047 sq.ft)',
  description = 'A rare collection of just 8 exclusive colonial-style villas set in the lush hills of Xelpem, near Mapusa. Inspired by Goa''s timeless Portuguese heritage and reimagined for modern luxury living, these residences blend architectural charm with contemporary comfort.

Plot Size: 376 sqm. (4,047 sq.ft) Super Built-Up Area: 375 sqm. Private swimming pool (optional lighting), open-plan living & dining layout, modular kitchen, traditional Goan sopo (balcão seating), landscaped garden & paved driveway, gated community with security & CCTV.

3.5 km to Assagao, 5.5 km to Siolim, 10 km to Anjuna Beach, 20 km to Manohar International Airport.'
where id = 'a54e9fdc-b048-4058-8307-c9656c4899bd'::uuid;

update public.properties set
  bua = '157 sqm (1,690 sq.ft)',
  highlights = '157 sqm (1,690 sq.ft), 2nd floor, lift provision, attached washroom',
  description = 'Excellent commercial office unit available for sale in Ribandar. Area: 157 sqm (1,690 sq.ft), 2nd Floor. Features an attached washroom with Kerovit fittings and lift provision. Ideal for professional firms, startups, or investors.'
where id = '35349a62-33b0-4528-b73a-bc42c82a9984'::uuid;

update public.properties set
  bua = '90 sqm (969 sq.ft)'
where id = '43c11412-64d9-4d74-a536-1236f8b42d7d'::uuid;

update public.properties set
  bua = '301 sqm (3,240 sq.ft)',
  highlights = '301 sqm (3,240 sq.ft), double-heighted, main road frontage, elevator access'
where id = 'fa967867-91b7-4351-af8c-9c3593f4c57b'::uuid;

update public.properties set
  description = 'Premium commercial shop located in Panjim, ideal for boutique retail, café concepts, or specialty stores. The property features a striking double-height layout with a functional mezzanine, offering excellent spatial flexibility.

The shop measures 60 sq.m. (646 sq.ft) on the main floor with an additional 50 sq.m. (538 sq.ft) mezzanine. The garden-facing frontage enhances visibility, and a water connection is available, supporting food, beverage, or service-based uses.'
where id = '024edfdc-9f0d-4c31-8646-5d9c227365c9'::uuid;

update public.properties set
  bua = '3,500+ sq.ft (325 sqm)',
  plot_size = '8,000 sq.ft (743 sqm)',
  highlights = 'Private pool, fully furnished, 8,000 sq.ft (743 sqm) plot, servant''s quarter',
  description = 'Set on an expansive 8,000 sq.ft. (743 sqm) plot, this fully furnished 4BHK villa offers generous living spaces and a perfect blend of comfort and privacy. With over 3,500 sq.ft. (325 sqm) of built-up area, the home features air-conditioned bedrooms, a well-planned living and dining area, a private swimming pool, and a large landscaped garden.

Additional highlights include a servant''s quarter, covered parking, and easy road access — ideal for long-term living in a peaceful yet well-connected location.'
where id = '32b4bb4d-0299-4c60-9160-ff0fdcfd68e2'::uuid;
