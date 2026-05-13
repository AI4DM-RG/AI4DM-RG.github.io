<script setup lang="ts">
import type { EventItem } from '~/types/event';
import { sessionsData } from '~/data/sessions';

const events = computed<EventItem[]>(() => sessionsData);

const toEventDate = (event: EventItem) => new Date(`${event.session.date} ${event.session.startTime}`);

const upcomingEvent = computed(() => {
  const now = new Date();
  return [...events.value]
    .filter(event => toEventDate(event) >= now)
    .sort((a, b) => toEventDate(a).getTime() - toEventDate(b).getTime())
    .slice(0, 1);
});

const previousEvent = computed(() => {
  const now = new Date();
  return [...events.value]
    .filter(event => toEventDate(event) < now)
    .sort((a, b) => toEventDate(b).getTime() - toEventDate(a).getTime())
    .slice(0, 1);
});
</script>

<template>
  <main class="flex flex-col gap-5 ps-4 pe-4">
    <MainCard />
    <nav class="flex flex-wrap gap-2 text-sm text-neutral-400" aria-label="Homepage sections">
      <NuxtLink to="/about" class="hover:text-white transition">About</NuxtLink>
      <a href="#previous-session" class="hover:text-white transition">Previous</a>
      <a href="#upcoming-session" class="hover:text-white transition">Upcoming</a>
      <a href="https://forms.gle/XW927BCmxoyhPTin9" class="hover:text-white transition" target="_blank" rel="noopener">Subscribe</a>
    </nav>

    <section v-if="previousEvent.length > 0" id="previous-session" class="flex flex-col gap-3">
      <h2 class="text-lg font-semibold text-highlighted">Previous Session</h2>
      <Session
        v-for="session in previousEvent"
        :key="`${session.session.date}-${session.title}`"
        :title="session.title"
        :type="session.type"
        :speakers="session.speakers"
        :speaker_affiliation="session.speaker_affiliation"
        :session_time="session.session"
        :tags="session.tags"
      />
    </section>

    <section v-if="upcomingEvent.length > 0" id="upcoming-session" class="flex flex-col gap-3">
      <h2 class="text-lg font-semibold text-highlighted">Upcoming Session</h2>
      <Session
        v-for="session in upcomingEvent"
        :key="`${session.session.date}-${session.title}`"
        :title="session.title"
        :type="session.type"
        :speakers="session.speakers"
        :speaker_affiliation="session.speaker_affiliation"
        :session_time="session.session"
        :tags="session.tags"
      />
    </section>
  </main>
</template>
