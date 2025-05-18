<template>
  <div
    class="bg-background flex min-h-screen items-center justify-center px-4 py-12"
  >
    <div
      class="card bg-card border-border flex h-[80vh] w-full max-w-3xl flex-col-reverse overflow-hidden rounded-xl border shadow-lg md:h-[50vh] md:flex-row"
    >
      <!-- Sección 1: Código y mensaje -->
      <div
        class="border-border flex flex-1 flex-col items-center justify-center gap-4 border-b p-8 md:border-r md:border-b-0"
      >
        <h1
          class="text-foreground text-5xl font-bold tracking-tighter transition-transform hover:scale-110"
        >
          {{ error?.statusCode }}
        </h1>
        <p class="text-muted-foreground text-lg">
          {{ error?.statusMessage }}
        </p>
        <Button as-child>
          <NuxtLink to="/dashboard" :prefetch="false">
            Return to website
          </NuxtLink>
        </Button>
      </div>
      <!-- Sección 2: Acción -->
      <div class="flex flex-1 flex-col items-center justify-center gap-6 p-8">
        <ClientOnly>
          <LazyCubeWrapper ref="$cubeWrapper" class="block size-full" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'
import { Face } from '@web-cube/web-cube'

defineProps({
  error: Object as () => NuxtError,
})

const $cubeWrapper = useTemplateRef('$cubeWrapper')

watchEffect(() => {
  if ($cubeWrapper.value) {
    $cubeWrapper.value.state = {
      [Face.Up]: [
        [Face.Up, Face.Up, Face.Front],
        [Face.Front, Face.Up, Face.Front],
        [Face.Up, Face.Up, Face.Up],
      ],
      [Face.Left]: [
        [Face.Left, Face.Left, Face.Left],
        [Face.Left, Face.Front, Face.Left],
        [Face.Left, Face.Left, Face.Left],
      ],
      [Face.Front]: [
        [Face.Back, Face.Back, Face.Front],
        [Face.Front, Face.Back, Face.Front],
        [Face.Back, Face.Back, Face.Back],
      ],
      [Face.Back]: [
        [Face.Back, Face.Back, Face.Front],
        [Face.Front, Face.Back, Face.Front],
        [Face.Back, Face.Back, Face.Back],
      ],
      [Face.Right]: [
        [Face.Right, Face.Right, Face.Right],
        [Face.Right, Face.Front, Face.Right],
        [Face.Right, Face.Right, Face.Right],
      ],
      [Face.Down]: [
        [Face.Down, Face.Down, Face.Front],
        [Face.Front, Face.Down, Face.Front],
        [Face.Down, Face.Down, Face.Down],
      ],
    }
  }
})
</script>
