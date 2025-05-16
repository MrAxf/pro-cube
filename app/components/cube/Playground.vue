<template>
  <div class="flex size-full flex-col">
    <div class="w-full grow">
      <Transition
        enter-active-class="transition-opacity duration-250 abslute inset-0"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-250 abslute inset-0"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <CubeWrapper
          :key="cube?.id"
          ref="$cubeWrapper"
          class="block size-full"
          :size="cube?.size"
          :color-background="cube?.baseColor"
          :color-up="cube?.upColor"
          :color-down="cube?.downColor"
          :color-left="cube?.leftColor"
          :color-right="cube?.rightColor"
          :color-front="cube?.frontColor"
          :color-back="cube?.backColor"
          @afterrotate="afterRotate"
        />
      </Transition>
    </div>
    <pre class="h-30 overflow-auto">
      {{ historyPointer }}
      {{ history }}
    </pre>
    <div class="flex flex-row items-center justify-center gap-2 p-2">
      <Button variant="outline" size="sm" @click="undo"> Undo </Button>
      <Button variant="outline" size="sm" @click="redo"> Redo </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RotationEvent, rotate as _rotate } from '@web-cube/web-cube'

const cubeStore = useCubeStore()
const cube = computed(() => cubeStore.cube)

const $cubeWrapper = useTemplateRef('$cubeWrapper')

async function rotate(options: Parameters<typeof _rotate>[1]) {
  if (!$cubeWrapper.value) return

  await $cubeWrapper.value.rotate(options)
}

const { addToHistory, undo, redo, history, historyPointer } = provideCube(
  cube,
  rotate
)

function afterRotate(e: RotationEvent) {
  if (
    e.detail.fromAngle === 0 ||
    e.detail.angle === 0 ||
    e.detail.triggeredBy !== 'pointer-event'
  ) {
    return
  }
  addToHistory({
    type: e.detail.type,
    angle: e.detail.toAngle,
    axis: e.detail.axis,
    layer: (e.detail as any).layer ?? null,
  })
}
</script>
