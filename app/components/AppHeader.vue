<script setup lang="ts">
</script>

<template>
  <div class="flex flex-wrap gap-2 ps-4 pe-4 justify-between items-center mt-2 mb-2">
    <NuxtLink class="title text-2xl font-semibold tracking-tight" to="/">
      AI4DM-RG
    </NuxtLink>
    <div class="flex gap-2 justify-end items-center">
      <UButton icon="i-lucide-newspaper" size="md" color="neutral" variant="soft"
               to="https://forms.gle/Xb9qPZUy3iot4pcVA">
        <span class="hidden md:inline">Subscribe to our Newsletter</span>
      </UButton>
      <UButton icon="i-lucide-user" size="md" color="neutral" variant="soft"
               to="/about">
        <span class="hidden md:inline">About Us</span>
      </UButton>
    </div>
  </div>
</template>