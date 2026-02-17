<script setup lang="ts">
const itemsData = [
  // Category: Decision Science (success)
  { title: "Decision Making", color: "success" },
  { title: "Game Theory", color: "success" },
  { title: "Multi-Agent Systems", color: "success" },
  { title: "Operation Research", color: "success" },

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
const grid = [];
const rows = 3;
const cols = 4;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    grid.push({ r, c });
  }
}

const shuffledGrid = grid.sort(() => Math.random() - 0.5);
const items = itemsData.map((item, index) => {
  const slot = shuffledGrid[index];
  const left = (slot.c * (100 / cols)) + (Math.random() * 5);
  const top = (slot.r * (100 / rows)) + (Math.random() * 5);
  return {
    ...item,
    left,
    top,
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
    duration: 2 + Math.random() * 3
  };
});
</script>

<template>
  <UPageCard
      title="AI4Decision Making Reading Group"
      description="AI for Decision Making (AI4DM) is an open, collaborative forum dedicated to advancing the science of choosing actions under uncertainty. We host presentations and discussions of papers and case studies at the intersection of probabilistic modeling, optimization, and machine learning for decision support in single- and multi-agent autonomous settings, with attention to robustness, interpretability, safety, and responsible deployment in real systems."
      orientation="horizontal"
      highlight
      highlight-color="neutral"
      class="main-card"
  >
    <div class="right-card relative w-full h-50 rounded-md overflow-visible">
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
        <UBadge size="md" :color="item.color" variant="subtle" class="pointer-events-none select-none">
          {{ item.title }}
        </UBadge>
      </div>
    </div>

    <div class="informations mt-4">
      <div>Every week on Thursdays at 10:00 AM EDT</div>
      <div class="past-recordings text-sm text-gray-500 flex items-center gap-2 flex-wrap">
        Past recordings could be found on our
        <UButton icon="i-lucide-youtube" size="md" color="error" variant="ghost">YouTube channel</UButton>
      </div>
    </div>
  </UPageCard>
</template>

<style scoped lang="postcss">
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
</style>