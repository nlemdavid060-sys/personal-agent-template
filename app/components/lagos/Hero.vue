<script setup lang="ts">
const stats = [
  { value: "15M+", label: "people in the metro" },
  { value: "20", label: "local government areas" },
  { value: "180km", label: "of Atlantic coastline" },
  { value: "24/7", label: "the city never sleeps" },
];
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-lagos-ink text-lagos-cream">
    <img
      src="/images/lagos/hero.png"
      alt="Yellow danfo buses crossing a bridge with the Lagos Island skyline at golden hour"
      class="absolute inset-0 size-full object-cover opacity-60"
      fetchpriority="high"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-lagos-ink via-lagos-ink/40 to-transparent" />

    <div class="relative mx-auto flex min-h-[85dvh] max-w-7xl flex-col justify-end gap-10 px-5 pb-12 pt-32">
      <div class="flex max-w-4xl flex-col gap-6">
        <p class="w-fit rounded-sm bg-lagos-yellow px-2 py-1 font-mono text-xs font-medium uppercase tracking-widest text-lagos-ink">
          Èkó o ni bàjé
        </p>
        <h1 class="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Lagos is loud, fast and
          <span class="text-lagos-yellow">completely alive.</span>
        </h1>
        <p class="max-w-2xl text-lg leading-relaxed text-lagos-cream/80 text-pretty">
          A field guide to living well in Africa&apos;s most electric city — where to stay, what to eat,
          how to move, and the words that will make the conductor laugh with you, not at you.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="#neighbourhoods"
            class="rounded-sm bg-lagos-yellow px-5 py-3 text-sm font-semibold text-lagos-ink transition-transform hover:-translate-y-0.5"
          >
            Explore the city
          </a>
          <a
            href="#slang"
            class="rounded-sm border border-lagos-cream/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-lagos-cream/10"
          >
            Learn the slang
          </a>
        </div>
      </div>

      <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-lagos-cream/15 bg-lagos-cream/15 md:grid-cols-4">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1 bg-lagos-ink/80 p-5 backdrop-blur">
          <dt class="order-2 text-sm text-lagos-cream/60">{{ stat.label }}</dt>
          <dd class="order-1 font-display text-3xl font-bold text-lagos-yellow">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
