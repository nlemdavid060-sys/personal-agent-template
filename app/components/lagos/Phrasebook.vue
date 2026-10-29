<script setup lang="ts">
const phrases = [
  { phrase: "How far?", meaning: "Hi, how are you? The universal greeting." },
  { phrase: "Shine your eye", meaning: "Be alert. Pay attention. Don't get played." },
  { phrase: "Wahala", meaning: "Trouble, drama, a problem. \"No wahala\" means no worries." },
  { phrase: "Owambe", meaning: "A big, loud, lavish party — usually with matching aso-ebi outfits." },
  { phrase: "Japa", meaning: "To leave, escape — often used for relocating abroad." },
  { phrase: "Abeg", meaning: "Please. Softens any request, or any complaint." },
  { phrase: "Sharp sharp", meaning: "Quickly, right now, no delay." },
  { phrase: "E choke", meaning: "It's overwhelming — in the best way. Usually about an event." },
];

const revealed = ref<Set<string>>(new Set());

function toggle(phrase: string) {
  const next = new Set(revealed.value);
  if (next.has(phrase)) next.delete(phrase);
  else next.add(phrase);
  revealed.value = next;
}
</script>

<template>
  <section id="slang" class="scroll-mt-16 bg-lagos-yellow">
    <div class="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-20 md:py-28">
      <div class="flex max-w-2xl flex-col gap-4">
        <p class="font-mono text-xs uppercase tracking-widest text-lagos-ink/70">04 — Speak Lagos</p>
        <h2 class="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
          A pocket phrasebook for the street.
        </h2>
        <p class="leading-relaxed text-lagos-ink/70">
          Pidgin, Yoruba and pure Lagos invention. Tap a card to reveal what it means.
        </p>
      </div>

      <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="item in phrases" :key="item.phrase">
          <button
            type="button"
            class="flex h-full min-h-40 w-full flex-col justify-between gap-4 rounded-sm p-5 text-left transition-colors"
            :class="revealed.has(item.phrase) ? 'bg-lagos-ink text-lagos-cream' : 'bg-lagos-cream/70 text-lagos-ink hover:bg-lagos-cream'"
            :aria-expanded="revealed.has(item.phrase)"
            @click="toggle(item.phrase)"
          >
            <span class="font-display text-2xl font-bold">{{ item.phrase }}</span>
            <span v-if="revealed.has(item.phrase)" class="text-sm leading-relaxed text-lagos-cream/80">{{ item.meaning }}</span>
            <span v-else class="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-lagos-ink/60">
              Tap to reveal
              <UIcon name="i-lucide-arrow-up-right" class="size-3.5" aria-hidden="true" />
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
