<script setup lang="ts">
const dishes = [
  { name: "Party jollof", where: "Any owambe, any Saturday", note: "Smoky, firewood-kissed, and the only acceptable jollof. Don't argue with Ghanaians about it — just win." },
  { name: "Suya", where: "Roadside grills after dark", note: "Thin-sliced beef rubbed in yaji spice, served in newspaper with onions and tomato." },
  { name: "Bole & fish", where: "Street corners, Port Harcourt style", note: "Roasted plantain with grilled fish and a fiery pepper sauce. Cheap, perfect lunch." },
  { name: "Amala & ewedu", where: "Bukas across the Mainland", note: "Yam-flour swallow with jute-leaf soup and gbegiri. Eat with your right hand." },
  { name: "Puff-puff", where: "Every party small chops tray", note: "Sweet fried dough balls. You will eat more than you planned." },
];
</script>

<template>
  <section id="food" class="scroll-mt-16 bg-lagos-ink text-lagos-cream">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
      <div class="relative">
        <img
          src="/images/lagos/food.png"
          alt="Overhead view of jollof rice, fried plantain, suya skewers and pepper soup"
          class="aspect-[4/5] w-full rounded-sm object-cover"
          loading="lazy"
        >
        <p class="absolute -bottom-4 left-4 rounded-sm bg-lagos-yellow px-3 py-2 font-display text-sm font-bold text-lagos-ink">
          &quot;You don chop?&quot; — every aunty, ever
        </p>
      </div>

      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <p class="font-mono text-xs uppercase tracking-widest text-lagos-yellow">02 — What to eat</p>
          <h2 class="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Pepper is not a suggestion.
          </h2>
          <p class="leading-relaxed text-lagos-cream/70">
            From buka canteens to Victoria Island tasting menus, Lagos eats boldly. Start here.
          </p>
        </div>

        <ol class="flex flex-col divide-y divide-lagos-cream/10 border-y border-lagos-cream/10">
          <li v-for="(dish, index) in dishes" :key="dish.name" class="flex gap-5 py-5">
            <span class="font-mono text-sm text-lagos-yellow tabular-nums">{{ String(index + 1).padStart(2, "0") }}</span>
            <div class="flex flex-col gap-1">
              <div class="flex flex-wrap items-baseline gap-x-3">
                <h3 class="font-display text-xl font-bold">{{ dish.name }}</h3>
                <p class="text-xs text-lagos-cream/50">{{ dish.where }}</p>
              </div>
              <p class="text-sm leading-relaxed text-lagos-cream/70">{{ dish.note }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
