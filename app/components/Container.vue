<template>
  <div class="rmterp">
    <slot />
  </div>
</template>

<style scoped>
.rmterp {
  position: relative;
  display: flex;
  min-height: 100dvh;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
</style>
