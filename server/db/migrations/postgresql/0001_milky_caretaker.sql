CREATE TABLE "lagos_places" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"neighborhood" text NOT NULL,
	"description" text NOT NULL,
	"highlight" text NOT NULL,
	"price_level" integer DEFAULT 2 NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "lagos_places_category_idx" ON "lagos_places" USING btree ("category","sort_order");
--> statement-breakpoint
INSERT INTO "lagos_places" ("id", "name", "category", "neighborhood", "description", "highlight", "price_level", "sort_order") VALUES
	('nok-by-alara', 'NOK by Alara', 'food', 'Victoria Island', 'Modern pan-African dining in a lush garden setting next to the Alara concept store.', 'Jollof done refined', 4, 1),
	('yellow-chilli', 'Yellow Chilli', 'food', 'Victoria Island', 'Reliable home of Nigerian classics — pounded yam, egusi, and peppered snail.', 'Nigerian classics', 3, 2),
	('ofada-hut', 'Ofada Hut', 'food', 'Yaba', 'Local favourite for ofada rice with ayamase stew, served fast and fiery.', 'Ofada and ayamase', 1, 3),
	('suya-spot', 'University of Suya', 'food', 'Ikeja', 'Late-night suya grilled over open flame, wrapped in newspaper with yaji and onions.', 'Late-night suya', 1, 4),
	('terra-kulture', 'Terra Kulture', 'culture', 'Victoria Island', 'Arts centre with a theatre, gallery, bookshop and Nigerian restaurant under one roof.', 'Theatre and gallery', 2, 1),
	('nike-art-gallery', 'Nike Art Gallery', 'culture', 'Lekki', 'Five floors of Nigerian art — adire textiles, paintings and sculpture — curated by Nike Okundaye.', 'Five floors of art', 1, 2),
	('kalakuta-museum', 'Kalakuta Republic Museum', 'culture', 'Ikeja', 'Fela Kuti''s former home, preserved as a museum of Afrobeat history.', 'Afrobeat history', 1, 3),
	('freedom-park', 'Freedom Park', 'culture', 'Lagos Island', 'Former colonial prison turned open-air venue for concerts, poetry nights and exhibitions.', 'Live events', 1, 4),
	('new-afrika-shrine', 'New Afrika Shrine', 'nightlife', 'Ikeja', 'Open-air music venue run by the Kuti family with legendary Thursday and Sunday shows.', 'Live Afrobeat', 2, 1),
	('quilox', 'Quilox', 'nightlife', 'Victoria Island', 'High-energy club known for celebrity sightings and Afrobeats until sunrise.', 'Big nights out', 4, 2),
	('hard-rock-lagos', 'Hard Rock Cafe Lagos', 'nightlife', 'Victoria Island', 'Beachfront bar and stage with live bands and weekend parties by the Atlantic.', 'Beachfront stage', 3, 3),
	('tarkwa-bay', 'Tarkwa Bay', 'beaches', 'Lagos Harbour', 'Sheltered beach reachable only by boat — calm waters and a quiet escape from the city.', 'Boat-only beach', 2, 1),
	('elegushi-beach', 'Elegushi Beach', 'beaches', 'Lekki', 'Lively private beach with music, horse rides, grilled fish and weekend crowds.', 'Weekend energy', 2, 2),
	('ilashe-beach', 'Ilashe Beach', 'beaches', 'Ilashe', 'Private beach houses and soft sand for a full-day group getaway.', 'Day trips', 3, 3),
	('lekki-arts-market', 'Lekki Arts and Crafts Market', 'shopping', 'Lekki', 'Hundreds of stalls selling carvings, beads, fabrics and art — bargain with a smile.', 'Craft hunting', 1, 1),
	('alara', 'Alara', 'shopping', 'Victoria Island', 'Concept store designed by David Adjaye featuring African fashion and design.', 'African design', 4, 2),
	('balogun-market', 'Balogun Market', 'shopping', 'Lagos Island', 'Sprawling market for ankara, aso-oke and lace — the heart of Lagos fabric trading.', 'Fabric heaven', 1, 3),
	('lekki-conservation', 'Lekki Conservation Centre', 'outdoors', 'Lekki', 'Nature reserve home to the longest canopy walkway in Africa, plus monkeys and peacocks.', 'Canopy walkway', 2, 1),
	('lekki-ikoyi-bridge', 'Lekki-Ikoyi Link Bridge', 'outdoors', 'Ikoyi', 'Cable-stayed bridge popular for sunrise jogs, evening walks and skyline views.', 'Sunset walks', 1, 2)
ON CONFLICT ("id") DO NOTHING;
