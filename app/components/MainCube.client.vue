<template>
  <CubeWrapper
    :class="$attrs.class"
    :size="props.size"
    @afterrotate="afterRotate"
  />
</template>

<script setup lang="ts">
import type { RotationEvent } from '@web-cube/web-cube'

const props = withDefaults(
  defineProps<{
    size?: number
  }>(),
  {
    size: 3,
  }
)

const history = ref<CubeHistory>([])

function afterRotate(e: RotationEvent) {
  if (e.detail.fromAngle === 0 || e.detail.angle === 0) {
    return
  }
  history.value.push({
    type: e.detail.type,
    angle: e.detail.toAngle,
    axis: e.detail.axis,
    layer: (e.detail as any).layer ?? null,
  })
  console.log(e.detail)
}

// async function undo() {
//   if (history.value.length > 0 && cube.value) {
//     const lastMove = history.value.pop()
//     if (lastMove) {
//       await rotate(cube.value, {
//         type: lastMove.type,
//         angle: Math.abs(lastMove.angle) as any,
//         axis: lastMove.axis as any,
//         layer: lastMove.layer as number,
//         backwards: lastMove.angle > 0,
//       })
//     }
//   }
// }
</script>
