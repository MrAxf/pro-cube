<template>
  <div :class="props.class">
    <web-cube ref="$cube" class="block size-full"></web-cube>
  </div>
</template>

<script setup lang="ts">
import {
  type RotationEvent,
  type StateChangeEvent,
  type WebCube,
  define,
  enqueueRotations,
  rotate,
} from '@web-cube/web-cube'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  size?: number
  colorBackground?: string
  colorUp?: string
  colorDown?: string
  colorLeft?: string
  colorRight?: string
  colorFront?: string
  colorBack?: string
}>()

const emit = defineEmits<{
  beforerotate: [event: RotationEvent]
  afterrotate: [event: RotationEvent]
  beforecuberotate: [event: RotationEvent]
  aftercuberotate: [event: RotationEvent]
  beforelayerrotate: [event: RotationEvent]
  afterlayerrotate: [event: RotationEvent]
  statechanged: [event: StateChangeEvent]
}>()

const $cube = useTemplateRef<WebCube>('$cube')

watchPostEffect(() => {
  const cube = $cube.value

  if (!cube) return

  if (props.size) {
    cube.setAttribute('size', props.size.toString())
  }
  if (props.colorBackground) {
    cube.setAttribute('color-background', props.colorBackground)
  }
  if (props.colorUp) {
    cube.setAttribute('color-up', props.colorUp)
  }
  if (props.colorDown) {
    cube.setAttribute('color-down', props.colorDown)
  }
  if (props.colorLeft) {
    cube.setAttribute('color-left', props.colorLeft)
  }
  if (props.colorRight) {
    cube.setAttribute('color-right', props.colorRight)
  }
  if (props.colorFront) {
    cube.setAttribute('color-front', props.colorFront)
  }
  if (props.colorBack) {
    cube.setAttribute('color-back', props.colorBack)
  }
})

watchPostEffect(() => {
  const cube = $cube.value
  if (!cube) return

  cube.addEventListener('web-cube:before-rotate', (e: Event) => {
    emit('beforerotate', e as RotationEvent)
  })
  cube.addEventListener('web-cube:after-rotate', (e: Event) => {
    emit('afterrotate', e as RotationEvent)
  })
  cube.addEventListener('web-cube:before-cube-rotate', (e: Event) => {
    emit('beforecuberotate', e as RotationEvent)
  })
  cube.addEventListener('web-cube:after-cube-rotate', (e: Event) => {
    emit('aftercuberotate', e as RotationEvent)
  })
  cube.addEventListener('web-cube:before-layer-rotate', (e: Event) => {
    emit('beforelayerrotate', e as RotationEvent)
  })
  cube.addEventListener('web-cube:after-layer-rotate', (e: Event) => {
    emit('afterlayerrotate', e as RotationEvent)
  })
  cube.addEventListener('web-cube:state-changed', (e: Event) => {
    emit('statechanged', e as StateChangeEvent)
  })
})

onMounted(() => {
  if (!customElements.get('web-cube')) {
    define()
  }
})

defineExpose({
  async rotate(options: Parameters<typeof rotate>[1]) {
    if (!$cube.value) return false
    return rotate($cube.value, options)
  },
  async enqueueRotations(options: Parameters<typeof enqueueRotations>[1]) {
    if (!$cube.value) return false
    return enqueueRotations($cube.value, options)
  },
  get isRotating() {
    return $cube.value?.isRotating ?? false
  },
})
</script>
