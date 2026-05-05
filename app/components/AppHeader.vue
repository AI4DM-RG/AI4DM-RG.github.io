<script setup lang="ts">
</script>

<template>
  <div class="flex ps-4 pe-4 justify-between  mt-2 mb-2">
    <NuxtLink class="title text-2xl font-semibold tracking-tight" to="/">
      AI4DM-RG
    </NuxtLink>
    <div class="flex gap-2 justify-end">
      <UButton icon="i-lucide-newspaper" size="md" color="neutral" variant="soft"
               to="https://forms.gle/Xb9qPZUy3iot4pcVA"
               :label="undefined"
               class="md:[&_span]:inline">
        <span class="hidden md:inline">Subscribe to our Newsletter</span>
      </UButton>
    </div>
  </div>
</template>