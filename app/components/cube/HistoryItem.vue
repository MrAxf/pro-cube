<template>
  <button
    class="bg-primary hover:bg-primary/90 grid size-full cursor-pointer items-center transition-opacity"
  >
    <CubeIcon v-bind="cubeIconProps" class="size-9/10" />
    <Badge variant="secondary" class="absolute end-2 bottom-2">
      {{ Math.abs(historyItem.angle) }}°
    </Badge>
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  historyItem: CubeHistoryItem
  active?: boolean
}>()
const { cube } = useCube()

const cubeIconProps = computed(() => ({
  mode: 'rotation' as 'rotation' | 'color',
  size: (cube.value?.size ?? undefined) as 2 | 3 | 4 | undefined,
  axis: props.historyItem.axis.toUpperCase() as 'X' | 'Y' | 'Z' | undefined,
  layer: (props.historyItem.layer ?? undefined) as 0 | 1 | 2 | 3 | undefined,
  rotate:
    props.historyItem.angle > 0
      ? 'forward'
      : ('backward' as 'forward' | 'backward'),
}))
</script>
