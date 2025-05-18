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
    <div class="relative flex flex-row items-center justify-center gap-2 p-2">
      <CubeHistory />
      <Button
        class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4"
        variant="secondary"
        @click="openOptionsDrawer"
      >
        <ChevronUp />
        <span>Options</span>
      </Button>
    </div>
    <CubeOptionsDrawer v-model:open="isDrawerOpen" />
  </div>
</template>

<script setup lang="ts">
import { CubeHistory, CubeWrapper } from '#components'
import type {
  RotationEvent,
  enqueueRotations as _enqueueRotations,
  rotate as _rotate,
} from '@web-cube/web-cube'
import { ChevronUp } from 'lucide-vue-next'

const cubeStore = useCubeStore()
const cube = computed(() => cubeStore.cube)

const $cubeWrapper = useTemplateRef('$cubeWrapper')

const { addToHistory } = provideCube({
  cube,
  $cubeWrapper,
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

const isDrawerOpen = ref(false)
const openOptionsDrawer = () => {
  isDrawerOpen.value = true
}
</script>
