<script setup lang="ts">
type Side = "Island" | "Mainland";

interface Neighbourhood {
  name: string;
  side: Side;
  vibe: string;
  description: string;
  rent: 1 | 2 | 3;
  tags: string[];
}

const neighbourhoods: Neighbourhood[] = [
  {
    name: "Ikoyi",
    side: "Island",
    vibe: "Old money, leafy calm",
    description: "Tree-lined streets, embassies and quiet luxury. Close to everything on the Island, far from the noise.",
    rent: 3,
    tags: ["Upscale", "Quiet", "Expat-friendly"],
  },
  {
    name: "Victoria Island",
    side: "Island",
    vibe: "Business by day, lounges by night",
    description: "The commercial heart: banks, tech offices, rooftop bars and the best restaurants in the city.",
    rent: 3,
    tags: ["Nightlife", "Offices", "Dining"],
  },
  {
    name: "Lekki",
    side: "Island",
    vibe: "New Lagos, beach weekends",
    description: "Sprawling estates, startup offices and easy beach access. Traffic on the expressway is a lifestyle.",
    rent: 2,
    tags: ["Beaches", "Young professionals", "Estates"],
  },
  {
    name: "Yaba",
    side: "Mainland",
    vibe: "Yabacon Valley",
    description: "Universities, tech hubs, cheap eats and a creative crowd. The startup scene started here.",
    rent: 1,
    tags: ["Tech", "Students", "Affordable"],
  },
  {
    name: "Surulere",
    side: "Mainland",
    vibe: "Old-school Lagos soul",
    description: "Home of the National Stadium and Nollywood roots. Buzzing streets, owambe parties, real community.",
    rent: 1,
    tags: ["Culture", "Football", "Food"],
  },
  {
    name: "Ikeja",
    side: "Mainland",
    vibe: "The capital, the airport, the mall",
    description: "State capital and home of Computer Village and the airport. GRA offers calm in the middle of it.",
    rent: 2,
    tags: ["Shopping", "Airport", "Central"],
  },
];

const filters = ["All", "Island", "Mainland"] as const;
const active = ref<(typeof filters)[number]>("All");

const visible = computed(() =>
  active.value === "All" ? neighbourhoods : neighbourhoods.filter(n => n.side === active.value),
);

const rentLabel = (rent: Neighbourhood["rent"]) => ["", "Budget", "Mid-range", "Premium"][rent];
</script>

<template>
  <section id="neighbourhoods" class="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 md:py-28">
    <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div class="flex max-w-2xl flex-col gap-4">
        <p class="font-mono text-xs uppercase tracking-widest text-lagos-green">01 — Where to live</p>
        <h2 class="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Island or Mainland? Choose your side.
        </h2>
        <p class="leading-relaxed text-lagos-ink/70">
          The lagoon splits Lagos in two, and where you sleep shapes everything — your commute,
          your rent and your weekends.
        </p>
      </div>

      <div role="tablist" aria-label="Filter neighbourhoods" class="flex w-fit gap-1 rounded-sm bg-lagos-ink/5 p-1">
        <button
          v-for="filter in filters"
          :key="filter"
          role="tab"
          type="button"
          :aria-selected="active === filter"
          class="rounded-sm px-4 py-2 text-sm font-medium transition-colors"
          :class="active === filter ? 'bg-lagos-ink text-lagos-cream' : 'text-lagos-ink/60 hover:text-lagos-ink'"
          @click="active = filter"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="place in visible"
        :key="place.name"
        class="group flex flex-col gap-4 rounded-sm border border-lagos-ink/10 bg-white/60 p-6 transition-colors hover:border-lagos-ink/30"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex flex-col gap-1">
            <h3 class="font-display text-2xl font-bold">{{ place.name }}</h3>
            <p class="text-sm text-lagos-green">{{ place.vibe }}</p>
          </div>
          <span
            class="rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-widest"
            :class="place.side === 'Island' ? 'bg-lagos-yellow text-lagos-ink' : 'bg-lagos-green text-lagos-cream'"
          >
            {{ place.side }}
          </span>
        </div>
        <p class="text-sm leading-relaxed text-lagos-ink/70">{{ place.description }}</p>
        <div class="mt-auto flex items-center justify-between gap-4 border-t border-lagos-ink/10 pt-4">
          <ul class="flex flex-wrap gap-1.5" aria-label="Tags">
            <li v-for="tag in place.tags" :key="tag" class="rounded-sm bg-lagos-ink/5 px-2 py-0.5 text-xs text-lagos-ink/70">
              {{ tag }}
            </li>
          </ul>
          <p class="flex shrink-0 items-center gap-0.5 font-mono text-sm" :aria-label="`Rent: ${rentLabel(place.rent)}`">
            <span v-for="i in 3" :key="i" aria-hidden="true" :class="i <= place.rent ? 'text-lagos-ink' : 'text-lagos-ink/20'">₦</span>
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>
