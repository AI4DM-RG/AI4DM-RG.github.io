<script setup lang="ts">
const props = defineProps<{
  size: string;
  tag: string;
}>();
const TAG_COLORS: Record<string, string> = {
  'Machine Learning': 'warning',
  'LLM': 'error',
  'Operations Research': 'success',
  'Optimization': 'success',
  'IVADO': 'primary',
  'Cross-listed Seminar': 'info',
  'AI': 'primary',
  'Artificial intelligence': 'primary',
  'Safety': 'info',
  'Reinforcement Learning': 'warning',
};

const getTagColor = (tag: string) => {
  return TAG_COLORS[tag] || 'neutral';
};
</script>

<template>
  <UBadge :size="props.size" :color="getTagColor(tag)" variant="subtle" :label="props.tag" />
</template>
