<script setup lang="ts">
definePageMeta({ layout: false });

const title = "Èkó — A Field Guide to Lagos Life";
const description
  = "Neighbourhoods, food, getting around, nightlife and the street slang you need to live well in Lagos, Nigeria.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/images/lagos/hero.png",
  twitterCard: "summary_large_image",
});

useHead({
  meta: [{ key: "theme-color", name: "theme-color", content: "#141210" }],
});
</script>

<template>
  <div class="min-h-dvh bg-lagos-cream text-lagos-ink font-sans">
    <LagosHeader />
    <main>
      <LagosHero />
      <LagosNeighbourhoods />
      <LagosFood />
      <LagosGettingAround />
      <LagosPhrasebook />
      <LagosAfterDark />
    </main>
    <LagosFooter />
  </div>
</template>
