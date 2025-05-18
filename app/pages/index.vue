<template>
  <div class="size-full overflow-x-hidden overflow-y-auto">
    <LandingNavbar />
    <LandingHero />
    <section
      class="font bold container mx-auto my-8 flex h-[75vh] flex-col gap-8 p-4"
    >
      <div class="flex flex-col gap-2">
        <h2 class="inline text-4xl font-bold">Do you want to try it out?</h2>
        <span class="text-muted-foreground text-xl">
          Drag the faces of the cube to rotate it and see how it works.
        </span>
      </div>
      <ClientOnly>
        <LandingDemo />
      </ClientOnly>
    </section>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
