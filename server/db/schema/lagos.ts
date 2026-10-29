import { index, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const lagosPlaces = pgTable("lagos_places", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  neighborhood: text("neighborhood").notNull(),
  description: text("description").notNull(),
  highlight: text("highlight").notNull(),
  priceLevel: integer("price_level").notNull().default(2),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => [
  index("lagos_places_category_idx").on(table.category, table.sortOrder),
]);
