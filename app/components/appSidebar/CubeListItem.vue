<template>
  <Button
    variant="ghost"
    class="group/cube-btn w-full justify-between overflow-hidden rounded-none"
    as="div"
    @click.prevent.stop="onClick"
  >
    <span>
      {{ cube.name }}
    </span>

    <div
      class="flex translate-x-10 items-center gap-2 opacity-0 transition-all group-hover/cube-btn:translate-x-0 group-hover/cube-btn:opacity-100"
    >
      <Button
        variant="secondary"
        class="size-7"
        @click.prevent.stop="emit('edit', cube)"
      >
        <Edit />
        <span class="sr-only">Edit cube</span>
      </Button>
      <Button
        variant="secondary"
        class="size-7"
        @click.prevent.stop="emit('delete', cube)"
      >
        <Trash />
        <span class="sr-only">Delete cube</span>
      </Button>
    </div>
  </Button>
</template>

<script setup lang="ts">
import { Edit, Trash } from 'lucide-vue-next'

const props = defineProps<{
  cube: Cube
}>()

const emit = defineEmits<{
  edit: [cube: Cube]
  delete: [cube: Cube]
}>()

const cubeStore = useCubeStore()

function onClick() {
  cubeStore.cube = props.cube
}
</script>
