<script setup lang="ts">
const team = [
  {
    name: "Yassine Yaakoubi",
    role: "Faculty lead",
    affiliation: "Gina Cody School of Engineering and Computer Science, Concordia University",
    description: "Yassine is an Assistant Professor at Concordia University and leads a research group in AI for Decision Making (AI4DM). His research interests lie at the intersection of optimization, learning, and simulation techniques for large-scale, real-world decision-making.",
    image: "https://yaakoubi.github.io/images/Avatar.jpg",
    badgeLabel: "Research focus",
    badges: ["AI for Decision-Making", "Optimization", "Learning", "Simulation"]
  },
  {
    name: "Omid Reza Heidari",
    role: "Organizer",
    affiliation: "PhD student, Concordia University",
    description: "Omid Reza is a PhD student at Concordia University supervised by Yassine Yaakoubi. His interests include multimodal vision-language models, large language models, multimodal AI agents, and reinforcement learning.",
    image: "https://omid-reza.github.io/images/profile.jpg",
    badgeLabel: "Research focus",
    badges: ["Multimodal AI", "LLMs", "AI Agents", "Reinforcement Learning"]
  },
  {
    name: "Diaa Azzam",
    role: "Organizer",
    affiliation: "PhD student, Concordia University",
    description: "Diaa is a PhD student at Concordia University supervised by Yassine Yaakoubi and contributes to AI4DM-RG organization, speaker coordination, and technical logistics.",
    image: "/Diaa.jpg",
    badgeLabel: "AI4DM-RG role",
    badges: ["Organization", "Speaker coordination", "Technical logistics"]
  },
  {
    name: "Manar Hamed",
    role: "Organizer",
    affiliation: "PhD student, Concordia University",
    description: "Manar is a PhD student at Concordia University supervised by Yassine Yaakoubi and contributes to AI4DM-RG communications, registration, and speaker coordination.",
    image: "/Manar.jpg",
    badgeLabel: "AI4DM-RG role",
    badges: ["Communications", "Registration", "Speaker coordination"]
  },
  {
    name: "Mahmoud Khaled Abdelkader",
    role: "Organizer",
    affiliation: "PhD student, Concordia University",
    description: "Mahmoud is a PhD student at Concordia University supervised by Yassine Yaakoubi. His research focuses on contextual optimization, integrating machine learning with mathematical optimization to improve decision-making in uncertain, high-stakes environments.",
    image: "https://mahmoud-khaled-a.github.io/images/profile.png",
    badgeLabel: "Research focus",
    badges: ["Contextual Optimization", "Machine Learning", "Decision-Making"]
  },
];

const lead = team[0];
const organizers = team.slice(1);

useSeoMeta({
  title: 'About',
  description: 'Meet the AI4DM-RG organizing team at Concordia University.',
  ogTitle: 'About AI4DM-RG',
  ogDescription: 'Meet the AI4DM-RG organizing team at Concordia University.',
  ogUrl: 'https://ai4dm-rg.github.io/about',
  ogImage: 'https://ai4dm-rg.github.io/social-card.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://ai4dm-rg.github.io/social-card.png',
});
</script>

<template>
  <main class="flex flex-col gap-6 p-4">
    <section class="max-w-5xl">
      <h1 class="text-3xl font-semibold tracking-tight text-highlighted">About AI4DM-RG</h1>
      <p class="mt-3 max-w-3xl text-neutral-400">
        AI4DM-RG is Concordia University's reading group on AI for decision-making. We bring together students, faculty, and external researchers to discuss recent work across machine learning, optimization, operations research, probabilistic modeling, and robust decision systems.
      </p>
      <div class="mt-4 flex flex-wrap gap-2">
        <UBadge color="neutral" variant="subtle">Machine Learning</UBadge>
        <UBadge color="neutral" variant="subtle">Optimization</UBadge>
        <UBadge color="neutral" variant="subtle">Operations Research</UBadge>
        <UBadge color="neutral" variant="subtle">Decision-Making</UBadge>
      </div>
    </section>

    <section>
      <UPageCard :title="lead.name" :description="lead.description" orientation="horizontal" highlight highlight-color="neutral">
        <template #title>
          <div class="flex flex-col gap-1">
            <span>{{ lead.name }}</span>
            <span class="text-sm font-normal text-neutral-400">{{ lead.role }} - {{ lead.affiliation }}</span>
          </div>
        </template>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <img
            :src="lead.image"
            :alt="'Image of ' + lead.name"
            loading="lazy"
            decoding="async"
            class="h-44 w-44 shrink-0 rounded-lg object-cover object-center sm:h-52 sm:w-52"
          />
          <div class="flex flex-col gap-2">
            <span class="text-xs font-medium uppercase tracking-wide text-neutral-500">{{ lead.badgeLabel }}</span>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="badge in lead.badges" :key="badge" color="neutral" variant="subtle">
                {{ badge }}
              </UBadge>
            </div>
          </div>
        </div>
      </UPageCard>
    </section>

    <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <UPageCard v-for="person in organizers" :key="person.name" :title="person.name" :description="person.description" orientation="vertical">
        <template #title>
          <div class="flex flex-col gap-1">
            <span>{{ person.name }}</span>
            <span class="text-sm font-normal text-neutral-400">{{ person.role }} - {{ person.affiliation }}</span>
          </div>
        </template>
        <div class="flex gap-4">
          <img
            :src="person.image"
            :alt="'Image of ' + person.name"
            loading="lazy"
            decoding="async"
            class="h-36 w-36 shrink-0 rounded-lg object-cover object-center sm:h-44 sm:w-44"
          />
          <div class="flex flex-col gap-2">
            <span class="text-xs font-medium uppercase tracking-wide text-neutral-500">{{ person.badgeLabel }}</span>
            <div class="flex content-start flex-wrap gap-2">
              <UBadge v-for="badge in person.badges" :key="badge" color="neutral" variant="subtle">
                {{ badge }}
              </UBadge>
            </div>
          </div>
        </div>
      </UPageCard>
    </section>
  </main>
</template>
