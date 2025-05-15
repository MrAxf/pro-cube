<template>
  <web-cube ref="cube" :class="$attrs.class"></web-cube>
  <Button variant="secondary" class="absolute top-4 right-4" @click="undo">
    Undo
    <span class="sr-only">Undo</span>
  </Button>
</template>

<script setup lang="ts">
import { type WebCube, define, rotate } from '@web-cube/web-cube'

const props = withDefaults(
  defineProps<{
    size?: number
  }>(),
  {
    size: 3,
  }
)

const cube = useTemplateRef<WebCube>('cube')

const history = ref<CubeHistory>([])

onMounted(() => {
  if (!customElements.get('web-cube')) {
    define()
  }
})

watchPostEffect(() => {
  if (cube.value) {
    cube.value.setAttribute('size', props.size.toString())
    cube.value.addEventListener(
      'web-cube:after-rotate',
      (e: CustomEvent<any>) => {
        if (e.detail.fromAngle === 0 || e.detail.angle === 0) {
          return
        }
        history.value.push({
          type: e.detail.type,
          angle: e.detail.toAngle,
          axis: e.detail.axis,
          layer: e.detail.layer ?? null,
        })
        console.log(e.detail)
      }
    )
  }
})

async function undo() {
  if (history.value.length > 0 && cube.value) {
    const lastMove = history.value.pop()
    if (lastMove) {
      await rotate(cube.value, {
        type: lastMove.type,
        angle: Math.abs(lastMove.angle) as any,
        axis: lastMove.axis as any,
        layer: lastMove.layer as number,
        backwards: lastMove.angle > 0,
      })
    }
  }
}
</script>
