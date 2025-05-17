<template>
  <div class="flex size-full w-full flex-col overflow-hidden">
    <div class="w-full grow">
      <Transition
        enter-active-class="transition-opacity duration-150 abslute inset-0"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-150 abslute inset-0"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <div :key="cube?.id" class="size-full">
          <CubeWrapper
            ref="$cubeWrapper"
            class="size-full"
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
        </div>
      </Transition>
    </div>
    <div class="flex flex-row items-center justify-center gap-2 p-2">
      <CubeHistory />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CubeHistory } from '#components'
import type {
  RotationEvent,
  enqueueRotations as _enqueueRotations,
  rotate as _rotate,
} from '@web-cube/web-cube'

const cubeStore = useCubeStore()
const cube = computed(() => cubeStore.cube)

const $cubeWrapper = useTemplateRef('$cubeWrapper')

async function rotate(options: Parameters<typeof _rotate>[1]) {
  if (!$cubeWrapper.value) return

  await $cubeWrapper.value.rotate(options)
}

async function enqueueRotations(
  options: Parameters<typeof _enqueueRotations>[1]
) {
  if (!$cubeWrapper.value) return

  await $cubeWrapper.value.enqueueRotations(options)
}

const { addToHistory } = provideCube({
  cube,
  rotateFn: rotate,
  enqueueRotationsFn: enqueueRotations,
  isRotating() {
    return $cubeWrapper.value?.isRotating ?? false
  },
})

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
