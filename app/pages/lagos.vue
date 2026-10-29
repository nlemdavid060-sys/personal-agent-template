<script setup lang="ts">
definePageMeta({ layout: false });

useSeoMeta({
  title: "Lagos lifestyle guide",
  description: "Where to eat, dance, shop and unwind in Lagos — food, culture, nightlife, beaches and more.",
});

const { data, status, error, refresh } = await useFetch("/api/lagos", {
  default: () => ({ places: [] }),
});

const categories = [
  { value: "all", label: "All", icon: "i-lucide-sparkles" },
  { value: "food", label: "Food", icon: "i-lucide-utensils" },
  { value: "culture", label: "Culture", icon: "i-lucide-landmark" },
  { value: "nightlife", label: "Nightlife", icon: "i-lucide-music" },
  { value: "beaches", label: "Beaches", icon: "i-lucide-waves" },
  { value: "shopping", label: "Shopping", icon: "i-lucide-shopping-bag" },
  { value: "outdoors", label: "Outdoors", icon: "i-lucide-trees" },
];

const active = ref("all");

const filtered = computed(() =>
  active.value === "all"
    ? data.value.places
    : data.value.places.filter(place => place.category === active.value),
);

function categoryLabel(value: string) {
  return categories.find(category => category.value === value)?.label ?? value;
}

function priceLabel(level: number) {
  return "₦".repeat(Math.min(Math.max(level, 1), 4));
}
</script>

<template>
  <div class="min-h-dvh bg-default">
    <UContainer class="flex flex-col gap-8 py-10 sm:py-16">
      <header class="flex flex-col gap-3">
        <UButton
          to="/"
          icon="i-lucide-arrow-left"
          label="Back"
          color="neutral"
          variant="link"
          class="self-start px-0"
        />
        <p class="text-sm font-medium uppercase tracking-wider text-muted">
          Lifestyle guide
        </p>
        <h1 class="text-balance text-3xl font-bold text-highlighted sm:text-4xl">
          Living well in Lagos
        </h1>
        <p class="text-pretty text-muted">
          Hand-picked spots across Victoria Island, Ikoyi, Lekki, Yaba and beyond — from suya at midnight to quiet boat-only beaches.
        </p>
      </header>

      <nav
        aria-label="Filter by category"
        class="flex flex-wrap gap-2"
      >
        <UButton
          v-for="category in categories"
          :key="category.value"
          :icon="category.icon"
          :label="category.label"
          size="sm"
          color="neutral"
          :variant="active === category.value ? 'solid' : 'outline'"
          class="rounded-full"
          :aria-pressed="active === category.value"
          @click="active = category.value"
        />
      </nav>

      <UAlert
        v-if="error"
        color="error"
        variant="subtle"
        icon="i-lucide-circle-alert"
        title="Couldn't load Lagos places"
        :description="error.message"
        :actions="[{ label: 'Retry', onClick: () => refresh() }]"
      />

      <div
        v-else-if="status === 'pending'"
        class="grid gap-4 sm:grid-cols-2"
      >
        <USkeleton
          v-for="n in 4"
          :key="n"
          class="h-36"
        />
      </div>

      <p
        v-else-if="!filtered.length"
        class="text-muted"
      >
        No places in this category yet.
      </p>

      <ul
        v-else
        class="grid gap-4 sm:grid-cols-2"
      >
        <li
          v-for="place in filtered"
          :key="place.id"
        >
          <UCard
            class="h-full"
            :ui="{ body: 'flex h-full flex-col gap-3' }"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="flex flex-col gap-1">
                <h2 class="font-semibold text-highlighted">
                  {{ place.name }}
                </h2>
                <p class="flex items-center gap-1 text-sm text-muted">
                  <UIcon
                    name="i-lucide-map-pin"
                    class="size-3.5"
                    aria-hidden="true"
                  />
                  {{ place.neighborhood }}
                </p>
              </div>
              <span
                class="shrink-0 font-mono text-sm text-toned"
                :aria-label="`Price level ${place.priceLevel} of 4`"
              >{{ priceLabel(place.priceLevel) }}</span>
            </div>
            <p class="text-pretty text-sm text-default">
              {{ place.description }}
            </p>
            <div class="mt-auto flex flex-wrap gap-2">
              <UBadge
                :label="categoryLabel(place.category)"
                color="neutral"
                variant="subtle"
              />
              <UBadge
                :label="place.highlight"
                color="neutral"
                variant="outline"
              />
            </div>
          </UCard>
        </li>
      </ul>
    </UContainer>
  </div>
</template>
