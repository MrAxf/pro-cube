<template>
  <div
    class="relative h-full w-2 transition-transform"
    :style="{
      transform: `translateX(-50%) translateX(${itemWidth * historyPointer}px)`,
    }"
  >
    <Tooltip>
      <TooltipTrigger>
        <div class="size-full">
          <div
            class="border-secondary absolute top-0 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[12px] border-x-transparent"
          ></div>
          <div
            class="bg-secondary absolute top-0 left-1/2 h-full w-1 -translate-x-1/2"
          ></div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" align="center" :side-offset="20">
        <p>Current position</p>
      </TooltipContent>
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  itemWidth: number
}>()

const { historyPointer } = useCube()
</script>
