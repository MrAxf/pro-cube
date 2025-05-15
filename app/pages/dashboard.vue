<template>
  <!-- <div> -->
  <Transition
    enter-active-class="transition-opacity duration-250 abslute inset-0"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-250 abslute inset-0"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <CubeWrapper
      :key="cubeStore.cube?.id"
      class="block h-[calc(100dvh-3.75rem)] w-full"
      :size="cubeStore.cube?.size"
      :color-background="cubeStore.cube?.baseColor"
      :color-up="cubeStore.cube?.upColor"
      :color-down="cubeStore.cube?.downColor"
      :color-left="cubeStore.cube?.leftColor"
      :color-right="cubeStore.cube?.rightColor"
      :color-front="cubeStore.cube?.frontColor"
      :color-back="cubeStore.cube?.backColor"
    />
  </Transition>
  <!-- <pre>{{ subeStore.cube }}</pre>
  </div> -->
</template>

<script setup lang="ts">
const cubeStore = useCubeStore()
</script>
