<script setup lang="ts">
import Tag from "~/components/Tag.vue";
import type { SessionTime } from '~/types/event';

const props = defineProps<{
  title: string;
  speakers: Array<string>;
  type: string;
  session_time: SessionTime;
  tags: string[];
}>();

const TYPE_MAP: Record<string, string> = {
  paper: 'warning',
  academic: 'error',
  industry: 'info',
  community: 'success'
};
const session_type_color = computed(() => TYPE_MAP[props.type] || 'neutral');
</script>
<template>
  <NuxtLink :to="`/sessions/${props.session_time.date}/${useSlug(props.title)}`">
    <UPageCard
        :title="props.title"
        :description="formatSpeakers(props.speakers)"
        orientation="horizontal"
        spotlight
        :spotlight-color="session_type_color"
    >
      <div class="flex flex-col gap-3 sm:gap-5">
        <div class="flex justify-start sm:justify-end">
          <div class="text-base sm:text-xl font-medium w-full sm:w-auto">
            <div class="flex flex-wrap justify-start sm:justify-between gap-x-2 gap-y-1">
              <span class="text-neutral-300">{{ props.session_time.date }}</span>
              <span class="text-neutral-300">{{ props.session_time.startTime }}</span>
              <span class="text-sm text-neutral-400">{{ props.session_time.timezone }}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-start sm:justify-end gap-2">
          <Tag v-for="tag in props.tags" :key="tag" size="md" :tag="tag" />
        </div>
      </div>
    </UPageCard>
  </NuxtLink>
</template>
