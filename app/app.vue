<template>
  <TooltipProvider>
    <div class="h-dvh w-dvw">
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <ClientOnly>
        <Toaster />
        <OverlayProvider />
      </ClientOnly>
    </div>
  </TooltipProvider>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Pro Cube` : 'Pro Cube'
  },
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: 'Pro Cube - A powerful 3D cube generator',
    },
    {
      name: 'keywords',
      content: '3D, cube, generator, Pro Cube',
    },
  ],
})
</script>
