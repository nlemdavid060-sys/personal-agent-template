<script setup lang="ts">
const events = [
  { month: "Oct", name: "Felabration", detail: "A week-long celebration of Fela Kuti at the New Afrika Shrine in Ikeja." },
  { month: "Nov", name: "Art X Lagos", detail: "West Africa's leading contemporary art fair, on Victoria Island." },
  { month: "Dec", name: "Detty December", detail: "The diaspora comes home. Concerts, beach parties and zero sleep." },
  { month: "Varies", name: "Eyo Festival", detail: "Masquerades in flowing white robes take over Lagos Island." },
];
</script>

<template>
  <section id="after-dark" class="scroll-mt-16 bg-lagos-ink text-lagos-cream">
    <div class="relative">
      <img
        src="/images/lagos/night.png"
        alt="Young people dancing at a beach party in Lekki under string lights"
        class="h-[50dvh] w-full object-cover opacity-70"
        loading="lazy"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-lagos-ink to-transparent" />
      <div class="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-8">
        <p class="font-mono text-xs uppercase tracking-widest text-lagos-yellow">05 — After dark</p>
        <h2 class="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
          Afrobeats was born for these nights.
        </h2>
      </div>
    </div>

    <div class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.5fr]">
      <p class="leading-relaxed text-lagos-cream/70">
        Lagos nightlife starts late and ends at sunrise. Rooftop lounges on the Island, live highlife in
        Surulere, beach raves in Lekki and the legendary Shrine — plan your year around these.
      </p>
      <ul class="flex flex-col divide-y divide-lagos-cream/10 border-y border-lagos-cream/10">
        <li v-for="event in events" :key="event.name" class="grid grid-cols-[5rem_1fr] gap-4 py-5">
          <span class="font-mono text-sm uppercase text-lagos-yellow">{{ event.month }}</span>
          <div class="flex flex-col gap-1">
            <h3 class="font-display text-xl font-bold">{{ event.name }}</h3>
            <p class="text-sm leading-relaxed text-lagos-cream/70">{{ event.detail }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
