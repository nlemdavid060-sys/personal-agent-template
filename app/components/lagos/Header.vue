<script setup lang="ts">
const links = [
  { label: "Neighbourhoods", href: "#neighbourhoods" },
  { label: "Food", href: "#food" },
  { label: "Getting around", href: "#getting-around" },
  { label: "Slang", href: "#slang" },
  { label: "After dark", href: "#after-dark" },
];

const lagosTime = ref("");
let timer: ReturnType<typeof setInterval> | undefined;

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
});

onMounted(() => {
  const tick = () => (lagosTime.value = formatter.format(new Date()));
  tick();
  timer = setInterval(tick, 15_000);
});

onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-lagos-ink/10 bg-lagos-cream/90 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
      <a href="#top" class="flex items-center gap-2">
        <span class="flex size-8 items-center justify-center rounded-sm bg-lagos-yellow font-display text-lg font-bold text-lagos-ink">
          È
        </span>
        <span class="font-display text-lg font-bold tracking-tight">Èkó Guide</span>
      </a>

      <nav aria-label="Sections" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="text-lagos-ink/70 transition-colors hover:text-lagos-ink">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>

      <p class="flex items-center gap-2 font-mono text-xs text-lagos-ink/70">
        <span class="relative flex size-2">
          <span class="absolute inline-flex size-full animate-ping rounded-full bg-lagos-green opacity-60" />
          <span class="relative inline-flex size-2 rounded-full bg-lagos-green" />
        </span>
        <span>Lagos</span>
        <span class="tabular-nums text-lagos-ink">{{ lagosTime || "--:--" }}</span>
        <span>WAT</span>
      </p>
    </div>
  </header>
</template>
