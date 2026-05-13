<script setup lang="ts">
import { format } from 'date-fns';
const currentYear = format(new Date(), 'yyyy');
</script>
<template>
  <div class="mb-4 mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 text-center text-xs text-neutral-400">
    <NuxtLink class="font-semibold transition hover:text-white" to="/">&copy; {{ currentYear }} AI4DM-RG</NuxtLink>
    <span>Concordia University</span>
    <span>Gina Cody School</span>
    <NuxtLink class="font-semibold transition hover:text-white" to="/about">Team</NuxtLink>
    <a class="font-semibold transition hover:text-white" href="https://forms.gle/XW927BCmxoyhPTin9" target="_blank" rel="noopener">Subscribe</a>
    <a class="font-semibold transition hover:text-white" href="https://github.com/AI4DM-RG/AI4DM-RG.github.io" target="_blank" rel="noopener">GitHub</a>
  </div>
</template>
