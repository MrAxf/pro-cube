<template>
  <component
    :is="overlay.component"
    v-for="overlay in mountedOverlays"
    :key="overlay.id"
    v-bind="overlay.props"
    v-model:open="overlay.isOpen"
    @close="(value: any) => onClose(overlay.id, value)"
    @after:leave="onAfterLeave(overlay.id)"
  />
</template>

<script setup lang="ts">
const { overlays, unMount, close } = useOverlay()

const mountedOverlays = computed(() =>
  overlays.filter((overlay: Overlay) => overlay.isMounted)
)

const onAfterLeave = (id: symbol) => {
  close(id)
  unMount(id)
}

const onClose = (id: symbol, value: any) => {
  close(id, value)
}
</script>
