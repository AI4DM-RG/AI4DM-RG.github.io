<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en-CA' },
  titleTemplate: (title) => title ? `${title} - AI4DM-RG` : 'AI4DM-RG - AI for Decision-Making Reading Group, Concordia University',
});

const siteDescription = "AI4DM-RG is Concordia University's bi-weekly reading group on AI for decision-making, at the intersection of machine learning, operations research, optimization, and probabilistic modeling. Meets every 2nd and 4th Thursday of each month.";

useSeoMeta({
  description: siteDescription,
  ogTitle: 'AI4DM-RG - AI for Decision-Making Reading Group',
  ogDescription: siteDescription,
  viewport: 'width=device-width, initial-scale=1',
  twitterCard: 'summary_large_image',
  ogImage: 'https://ai4dm-rg.github.io/social-card.png',
  twitterImage: 'https://ai4dm-rg.github.io/social-card.png',
  ogType: 'website',
  ogUrl: 'https://ai4dm-rg.github.io/',
  ogSiteName: 'AI4DM-RG',
  robots: 'index, follow',
  keywords: 'AI4DM-RG, AI for decision-making, machine learning, operations research, optimization, probabilistic modeling, Concordia University',
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
