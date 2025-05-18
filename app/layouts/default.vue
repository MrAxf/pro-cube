<template>
  <SidebarProvider class="overflow-hidden">
    <AppSidebar />
    <SidebarInset>
      <div class="shadow"></div>
      <AppHeader />
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped>
.shadow {
  position: absolute;
  background: var(--color-primary);
  border-radius: 24px;
  rotate: 35deg;
  width: 40dvw;
  top: 200px;
  height: 40dvh;
  filter: blur(150px);
  will-change: transform;
  animation: shadow-slide infinite 4s linear alternate;
}

@keyframes shadow-slide {
  0% {
    opacity: 0.2;
    left: 10%;
  }
  50% {
    opacity: 0.8;
    left: 25%;
  }
  100% {
    opacity: 0.2;
    left: 40%;
  }
}
</style>
