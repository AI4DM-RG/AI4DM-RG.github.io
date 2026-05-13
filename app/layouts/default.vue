<template>
  <Container>
    <AppHeader />
    <Transition name="fade" mode="out-in">
      <slot />
    </Transition>
    <AppFooter />
  </Container>
</template>

<style>
.scrollable-card {
  scrollbar-width: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.button {
  box-shadow:
      inset 0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.1),
      inset -0.5px -0.5px 1px 0px rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.2) 0px 3px 10px -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  backdrop-filter: blur(4px);
  transition: all 150ms;
}

.button:active {
  transform: scale(0.95);
}

* {
  scrollbar-color: #555 rgba(0, 0, 0, 0);
}
</style>
