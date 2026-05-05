<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
});

useSeoMeta({
  title: 'AI4DMRG',
  description: '',
  ogTitle: 'AI4DMRG',
  ogDescription: '',
  viewport: 'width=device-width, initial-scale=1',
  twitterCard: 'summary_large_image',
  ogImage: '/social-card.png',
  twitterImage: '/social-card.png',
  ogType: 'website',
  ogUrl: 'https://habit.nuxt.dev',
  ogSiteName: 'AI4DMRG',
  twitterCreator: '@ZHatlen',
  twitterSite: '@ZHatlen',
  robots: 'index, follow',
  keywords: 'AI4DMRG, ML, DL, DM, AI',
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>