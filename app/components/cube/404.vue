<template>
  <CubeWrapper ref="$cubeWrapper" class="block size-full" />
</template>

<script setup lang="ts">
import { Face } from '@web-cube/web-cube'

const $cubeWrapper = useTemplateRef('$cubeWrapper')

watchEffect(() => {
  if ($cubeWrapper.value) {
    $cubeWrapper.value.state = {
      [Face.Up]: [
        [Face.Up, Face.Up, Face.Front],
        [Face.Front, Face.Up, Face.Front],
        [Face.Up, Face.Up, Face.Up],
      ],
      [Face.Left]: [
        [Face.Left, Face.Left, Face.Left],
        [Face.Left, Face.Front, Face.Left],
        [Face.Left, Face.Left, Face.Left],
      ],
      [Face.Front]: [
        [Face.Back, Face.Back, Face.Front],
        [Face.Front, Face.Back, Face.Front],
        [Face.Back, Face.Back, Face.Back],
      ],
      [Face.Back]: [
        [Face.Back, Face.Back, Face.Front],
        [Face.Front, Face.Back, Face.Front],
        [Face.Back, Face.Back, Face.Back],
      ],
      [Face.Right]: [
        [Face.Right, Face.Right, Face.Right],
        [Face.Right, Face.Front, Face.Right],
        [Face.Right, Face.Right, Face.Right],
      ],
      [Face.Down]: [
        [Face.Down, Face.Down, Face.Front],
        [Face.Front, Face.Down, Face.Front],
        [Face.Down, Face.Down, Face.Down],
      ],
    }
  }
})
</script>
