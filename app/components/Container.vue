<template>
  <div class="rmterp">
    <div class="iPbnzK">
      <slot />
    </div>
    <div class="iPbnzK"></div>
  </div>
</template>

<style lang="postcss" scoped>
.rmterp {
  @apply relative flex min-h-dvh flex-col items-stretch justify-start;
}

.iPbnzK {
  @apply fixed inset-0 h-dvh w-full bg-cover bg-center blur transition-opacity duration-300 -z-10;
}
</style>