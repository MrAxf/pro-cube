<template>
  <web-cube></web-cube>
</template>

<script setup lang="ts">
import { define } from '@web-cube/web-cube'

onMounted(() => {
  if (!customElements.get('web-cube')) {
    define()
  }
})
</script>
