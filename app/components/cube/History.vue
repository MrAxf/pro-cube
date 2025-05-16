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
            v-for="virtualCol in virtualCols"
            :key="virtualCol.index"
            class="absolute top-0 left-0 flex h-full"
            :style="{
              width: `${virtualCol.size}px`,
              transform: `translateX(${virtualCol.start}px)`,
            }"
          >
            <CubeHistoryItem :history-item="history[virtualCol.index]!" />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'

const { history } = useCube()

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
    count: history.value.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 7.5 * 16,
    overscan: 5,
    horizontal: true,
  }
})

const colVirtualizer = useVirtualizer(colVirtualizerOptions)
const virtualCols = computed(() => colVirtualizer.value.getVirtualItems())
const totalSize = computed(() => colVirtualizer.value.getTotalSize())
</script>
