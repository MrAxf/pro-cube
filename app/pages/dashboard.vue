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
    <MainCube
      :key="cubeStore.cube?.id"
      class="block h-[calc(100dvh-3.75rem)] w-full"
      :size="cubeStore.cube?.size"
    />
  </Transition>
  <!-- <pre>{{ subeStore.cube }}</pre>
  </div> -->
</template>

<script setup lang="ts">
const cubeStore = useCubeStore()
</script>
