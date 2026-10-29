<script setup lang="ts">
const modes = [
  { icon: "i-lucide-bus", name: "Danfo", detail: "The iconic yellow minibus. Know your stop, have exact change, shout \"O wa o!\" to get off." },
  { icon: "i-lucide-bus-front", name: "BRT", detail: "Dedicated-lane buses with a Cowry card. The fastest way across the Mainland at rush hour." },
  { icon: "i-lucide-train-front", name: "Blue & Red Line", detail: "Lagos's light rail. Blue runs Marina to Mile 2; Red links Agbado to Oyingbo." },
  { icon: "i-lucide-sailboat", name: "Ferries", detail: "Skip the bridge traffic: boats link Ikorodu, CMS, Falomo and Lekki across the lagoon." },
  { icon: "i-lucide-car", name: "Ride-hailing", detail: "Uber, Bolt and inDrive are everywhere. Agree on the route before the driver takes Third Mainland." },
  { icon: "i-lucide-bike", name: "Keke", detail: "Three-wheel tricycles for short hops inside neighbourhoods. Banned on major highways." },
];

const market = { src: "/images/lagos/market.png", alt: "Women traders selling fabrics and peppers under colourful umbrellas in a busy Lagos market" };
</script>

<template>
  <section id="getting-around" class="mx-auto max-w-7xl scroll-mt-16 px-5 py-20 md:py-28">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div class="flex flex-col gap-6">
        <p class="font-mono text-xs uppercase tracking-widest text-lagos-green">03 — Getting around</p>
        <h2 class="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          Go-slow is a season, not a moment.
        </h2>
        <p class="leading-relaxed text-lagos-ink/70">
          Lagos traffic — the &quot;go-slow&quot; — can turn a 20-minute drive into two hours. Leave early,
          download offline maps, and mix modes like a local.
        </p>
        <img
          :src="market.src"
          :alt="market.alt"
          class="hidden aspect-[4/3] w-full rounded-sm object-cover lg:block"
          loading="lazy"
        >
      </div>

      <ul class="grid gap-px overflow-hidden rounded-sm border border-lagos-ink/10 bg-lagos-ink/10 sm:grid-cols-2">
        <li v-for="mode in modes" :key="mode.name" class="flex flex-col gap-3 bg-lagos-cream p-6">
          <span class="flex size-10 items-center justify-center rounded-sm bg-lagos-yellow text-lagos-ink">
            <UIcon :name="mode.icon" class="size-5" aria-hidden="true" />
          </span>
          <h3 class="font-display text-xl font-bold">{{ mode.name }}</h3>
          <p class="text-sm leading-relaxed text-lagos-ink/70">{{ mode.detail }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
