import { asc } from "drizzle-orm";
import { db, schema } from "@nuxthub/db";

export default defineEventHandler(async () => {
  const places = await db
    .select({
      id: schema.lagosPlaces.id,
      name: schema.lagosPlaces.name,
      category: schema.lagosPlaces.category,
      neighborhood: schema.lagosPlaces.neighborhood,
      description: schema.lagosPlaces.description,
      highlight: schema.lagosPlaces.highlight,
      priceLevel: schema.lagosPlaces.priceLevel,
    })
    .from(schema.lagosPlaces)
    .orderBy(asc(schema.lagosPlaces.category), asc(schema.lagosPlaces.sortOrder));

  return { places };
});
