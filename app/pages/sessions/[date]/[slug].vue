<script setup lang="ts">
import Tag from "~/components/Tag.vue";
import type { EventItem } from '~/types/event';
import { sessionsData } from '~/data/sessions';

const route = useRoute();
const date = String(route.params.date);
const slug = String(route.params.slug);

const events = computed<EventItem[]>(() => sessionsData);

const currentEvent = computed<EventItem | null>(() => {
  return events.value.find(event => {
    const dateMatches = event.session.date === date;
    const eventSlug = useSlug(event.title);
    const slugMatches = eventSlug === slug;
    return dateMatches && slugMatches;
  }) || null;
});

const speakerBioExpanded = ref(true);

const isValidLink = (link?: string | null) => Boolean(link && link !== 'TBD' && link !== 'Not recorded');

const eventIsJoinable = computed(() => {
  if (!currentEvent.value || !isValidLink(currentEvent.value.join_link)) {
    return false;
  }
  const eventDate = new Date(`${currentEvent.value.session.date} ${currentEvent.value.session.startTime}`);
  eventDate.setHours(23, 59, 59, 999);
  return eventDate >= new Date();
});

const pageTitle = computed(() => currentEvent.value ? currentEvent.value.title : 'Session Not Found');
const pageDescription = computed(() => currentEvent.value?.description || 'AI4DM-RG session details.');
const pageUrl = computed(() => `https://ai4dm-rg.github.io/sessions/${date}/${slug}`);

useSeoMeta({
  title: () => pageTitle.value,
  description: () => pageDescription.value,
  ogTitle: () => pageTitle.value,
  ogDescription: () => pageDescription.value,
  ogUrl: () => pageUrl.value,
  ogImage: 'https://ai4dm-rg.github.io/social-card.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://ai4dm-rg.github.io/social-card.png',
});

useHead(() => ({
  link: [{ rel: 'canonical', href: pageUrl.value }]
}));
</script>

<template>
  <main class="ps-4 pe-4">
    <UPageCard v-if="currentEvent" orientation="horizontal" highlight highlight-color="neutral" class="main-card">
      <template #title>
        <div class="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start">
          <span class="flex-grow">{{ currentEvent.title }}</span>
          <Tag size="sm" :tag="currentEvent.place" class="shrink-0" />
        </div>
      </template>
      <template #description>
        <div class="pt-4 text-sm text-neutral-400">
          {{ currentEvent.description }}
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col justify-between gap-5">
          <div class="flex flex-wrap items-center gap-3">
            <Tag v-for="tag in currentEvent.tags" :key="tag" size="md" :tag="tag" />
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <UButton icon="i-lucide-calendar" size="md" color="neutral" variant="link" class="pointer-events-none" :label="currentEvent.session.date" />
            <UButton icon="i-lucide-clock" size="md" color="neutral" variant="link" class="pointer-events-none" :label="currentEvent.session.startTime + ' ' + currentEvent.session.timezone" />
            <UButton v-if="eventIsJoinable" :to="currentEvent.join_link || undefined" icon="i-lucide-video" size="md" color="neutral" variant="ghost" label="Register" target="_blank" external />
            <UButton v-if="isValidLink(currentEvent.recording_link)" icon="i-lucide-youtube" size="md" color="error" variant="ghost" label="Watch Recording" :to="currentEvent.recording_link || undefined" target="_blank" external />
            <UButton v-if="isValidLink(currentEvent.slides_link)" icon="i-garden-file-presentation-stroke-16" size="md" color="neutral" variant="ghost" label="Slides" :to="currentEvent.slides_link || undefined" target="_blank" external />
            <UButton v-if="isValidLink(currentEvent.event_link)" :to="currentEvent.event_link || undefined" icon="i-lucide-external-link" size="md" color="neutral" variant="ghost" label="Event Page" target="_blank" external />
            <UButton v-for="paper_link in currentEvent.paper_links || []" :key="paper_link" :to="paper_link" icon="i-academicons-arxiv" size="md" color="neutral" variant="ghost" label="Paper" target="_blank" external />
          </div>
        </div>
      </template>
      <div class="right-card relative w-full h-full rounded-md overflow-visible pe-4 ps-4">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>{{ formatSpeakers(currentEvent.speakers, currentEvent.speaker_affiliation) }}</div>
          <UButton color="neutral" variant="soft" size="xs" @click="speakerBioExpanded = !speakerBioExpanded" :icon="speakerBioExpanded ? 'i-lucide-arrow-up' : 'i-lucide-arrow-down'">
            {{ speakerBioExpanded ? 'Hide Bio' : 'View Bio' }}
          </UButton>
        </div>
        <transition name="expand">
          <div v-show="speakerBioExpanded" class="expand-container">
            <div class="pt-4 text-sm text-neutral-400">
              {{ currentEvent.speakersbio }}
            </div>
          </div>
        </transition>
      </div>
    </UPageCard>
  </main>
</template>

<style scoped>
.main-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.main-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("/bg/bg1.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(100px);
  transform: scale(1.1);
  z-index: -1;
  background-color: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active,
  .expand-enter-active,
  .expand-leave-active {
    transition: none;
  }
}
</style>
