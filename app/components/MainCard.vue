<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const itemsData = [
  // Category: Decision Science (success)
  { title: "Decision Making", color: "success" },
  { title: "Game Theory", color: "success" },
  { title: "Multi-Agent Systems", color: "success" },
  { title: "Operations Research", color: "success" },

  // Category: Modern AI (error)
  { title: "AI", color: "error" },
  { title: "LLM", color: "error" },
  { title: "RAG", color: "error" },

  // Category: Learning Dynamics (warning)
  { title: "Machine Learning", color: "warning" },
  { title: "Reinforcement Learning", color: "warning" },

  // Category: Foundations (neutral)
  { title: "Probabilistic Models", color: "neutral" },
  { title: "Optimization", color: "neutral" },

  // Category: Alignment (info)
  { title: "Safety", color: "info" }
];

// Responsive grid: fewer columns on mobile so badges don't overflow.
const isMobile = ref(false);
const items = ref<any[]>([]);

function buildItems() {
  const cols = isMobile.value ? 2 : 4;
  const rows = Math.ceil(itemsData.length / cols);
  const moveRange = isMobile.value ? 10 : 20;

  items.value = itemsData.map((item, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const left = (col * (100 / cols)) + (isMobile.value ? 2 : 4);
    const top = (row * (100 / rows)) + (isMobile.value ? 2 : 4);
    return {
      ...item,
      left,
      top,
      x: ((index % 3) - 1) * (moveRange / 2),
      y: ((index % 4) - 1.5) * (moveRange / 3),
      duration: 2 + (index % 4) * 0.6
    };
  });
}

let mq: MediaQueryList | null = null;
const handleChange = (e: MediaQueryListEvent) => {
  isMobile.value = e.matches;
  buildItems();
};

onMounted(() => {
  mq = window.matchMedia('(max-width: 640px)');
  isMobile.value = mq.matches;
  buildItems();
  mq.addEventListener('change', handleChange);
});

onBeforeUnmount(() => {
  mq?.removeEventListener('change', handleChange);
});

// Build once for SSR with desktop defaults so markup is valid before mount.
buildItems();
</script>

<template>
  <UPageCard
      title="AI4DM Reading Group"
      description="AI for Decision Making (AI4DM) is a reading group dedicated to advancing the science of choosing actions under uncertainty. We host presentations and discussions of papers and case studies at the intersection of probabilistic modeling, optimization, operations research, and machine learning."
      orientation="horizontal"
      highlight
      highlight-color="neutral"
      class="main-card"
  >
    <div class="right-card relative w-full h-64 sm:h-56 rounded-md overflow-hidden">
      <div
          v-for="(item, index) in items"
          :key="index"
          class="floating-badge"
          :style="{
          '--init-left': `${item.left}%`,
          '--init-top': `${item.top}%`,
          '--move-x': `${item.x}px`,
          '--move-y': `${item.y}px`,
          '--duration': `${item.duration}s`
        }"
      >
        <UBadge size="md" :color="item.color" variant="subtle" class="pointer-events-none select-none whitespace-nowrap">
          {{ item.title }}
        </UBadge>
      </div>
    </div>

    <div class="informations mt-4">
      <div>Every 2nd and 4th Thursday of each month at 10:00 AM EDT</div>
      <div class="past-recordings text-sm text-neutral-400 flex items-center gap-2 flex-wrap">
        Recordings are shared on our YouTube channel when speakers approve.
        <UButton
          icon="i-lucide-youtube"
          size="md"
          color="error"
          variant="ghost"
          disabled
          aria-label="AI4DM-RG YouTube channel coming soon"
        >
          YouTube channel coming soon
        </UButton>
      </div>
    </div>
  </UPageCard>
</template>

<style scoped>
.main-card {
  position: relative;
  overflow: hidden; /* Ensures the blur doesn't bleed outside the card corners */
  z-index: 0;
}

.main-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* Your background image */
  background-image: url("/bg/bg1.jpg");
  background-size: cover;
  background-position: center;

  /* Adjust blur strength here */
  filter: blur(100px);

  /* Move it behind the content */
  z-index: -1;

  /* Optional: Darken or lighten the image if text is hard to read */
  background-color: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;

  /* Prevents white "halos" at the edges caused by the blur */
  transform: scale(1.1);
}
.floating-badge {
  position: absolute;
  /* Set initial random position */
  left: var(--init-left);
  top: var(--init-top);

  display: inline-block;
  animation: float-around var(--duration) ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes float-around {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(var(--move-x), var(--move-y));
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-badge {
    animation: none;
  }
}
</style>
