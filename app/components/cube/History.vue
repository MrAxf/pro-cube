<template>
  <div
    class="bg-secondary border-border h-32.5 w-full overflow-hidden rounded-xl border"
  >
    <div
      ref="parentRef"
      class="relative size-full overflow-x-auto overflow-y-hidden"
    >
      <div
        :style="{
          height: '100%',
          width: `${totalSize}px`,
          position: 'relative',
        }"
      >
        <TransitionGroup
          enter-active-class="transition-opacity duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
        >
          <div
            v-for="virtualCol in virtualCols.slice(0, -1)"
            :key="virtualCol.index"
            class="absolute top-0 left-0 flex h-full"
            :style="{
              width: `${virtualCol.size}px`,
              transform: `translateX(${virtualCol.start}px)`,
            }"
          >
            <CubeHistoryItem
              :history-item="history[virtualCol.index]!"
              :active="historyPointer === virtualCol.index"
              @click="goToHistoryPointer(virtualCol.index)"
            />
          </div>
        </TransitionGroup>
        <div
          v-if="lastVirtualCol"
          class="absolute top-0 left-0 flex h-full"
          :style="{
            width: `${lastVirtualCol.size}px`,
            transform: `translateX(${lastVirtualCol.start}px)`,
          }"
        >
          <button
            class="bg-primary hover:bg-primary/90 grid size-full cursor-pointer items-center transition-opacity"
            @click="goToHistoryPointer(lastVirtualCol.index)"
          >
            <CubeIcon mode="rotation" :size="cube?.size" />
            <Badge variant="secondary" class="absolute end-2 bottom-2"
              >Current</Badge
            >
          </button>
        </div>
        <CubeHistoryIndicator
          :item-width="colVirtualizerOptions.estimateSize()"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'

const { history, historyPointer, cube, goToHistoryPointer } = useCube()

const parentRef = ref<HTMLElement | null>(null)

watchPostEffect(() => {
  if (parentRef.value && history.value.length > 0) {
    parentRef.value!.scrollTo({
      left: parentRef.value!.scrollWidth,
      behavior: 'smooth',
    })
  }
})

const colVirtualizerOptions = computed(() => {
  return {
    count: history.value.length + 1,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 7.5 * 16,
    overscan: 5,
    horizontal: true,
  }
})

const colVirtualizer = useVirtualizer(colVirtualizerOptions)
const virtualCols = computed(() => colVirtualizer.value.getVirtualItems())
const totalSize = computed(() => colVirtualizer.value.getTotalSize())

const lastVirtualCol = computed(() => {
  return virtualCols.value[virtualCols.value.length - 1]
})
</script>
