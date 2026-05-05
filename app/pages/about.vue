<script setup lang="ts">
const people = [
  {
    "name": "Yassine Yaakoubi",
    "description": "Yassine is an Assistant Professor at the Gina Cody School of Engineering and Computer Science at Concordia University leading a research group in AI for Decision Making (AI4DM). His research interests lie at the intersection of optimization, learning, and simulation techniques for large-scale, real-world decision-making.",
    "image": "https://yaakoubi.github.io/images/Avatar.jpg",
  },
  {
    "name": "Omid Reza Heidari",
    "description": "Omid Reza is a PhD student at Concordia University supervised by Yassine Yaakoubi. His area of interest includes Multimodal Vision-Language, Large Language Models, Multimodal AI Agents, and Reinforcement Learning.",
    "image": "https://omid-reza.github.io/images/profile.jpg",
  },
  {
    "name": "Diaa Azzam",
    "description": "Diaa is a PhD student at Concordia University supervised by Yassine Yaakoubi.",
    "image": "https://ai4dm-rg.github.io/Diaa.jpg",
  },
  {
    "name": "Manar Hamed",
    "description": "Manar is a PhD student at Concordia University supervised by Yassine Yaakoubi.",
    "image": "https://ai4dm-rg.github.io/Manar.jpg",
  },
  {
    "name": "Mahmoud Khaled Abdelkader",
    "description": "Mahmoud is a PhD student at Concordia University supervised by Yassine Yaakoubi. His research focuses on contextual optimization, a field that integrates machine learning with mathematical optimization to improve decision-making in uncertain, high-stakes environments.",
    "image": "https://mahmoud-khaled-a.github.io/images/profile.png",
  },
]
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 p-4">
    <UPageCard v-for="person in people" :key="person.name" :title="person.name" :description="person.description" orientation="vertical" reverse>
      <div class="flex justify-center w-full">
        <img :src="person.image" :alt="'Image of ' + person.name"
             class="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover object-top rounded-lg" />
      </div>
    </UPageCard>
  </div>
</template>