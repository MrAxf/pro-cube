<template>
  <SidebarMenuButton
    class="group/cube-btn cursor-pointer overflow-hidden"
    :title="`Open ${cube.name}`"
    @click.prevent.stop="onClick"
  >
    <span>
      {{ cube.name }}
    </span>

    <div
      class="absolute end-0 flex translate-x-10 items-center gap-2 opacity-0 transition-all group-hover/cube-btn:translate-x-0 group-hover/cube-btn:opacity-100"
    >
      <Button
        variant="secondary"
        class="size-7"
        :title="`Edit ${cube.name}`"
        @click.prevent.stop="emit('edit', cube)"
      >
        <Edit />
        <span class="sr-only">Edit cube</span>
      </Button>
      <Button
        variant="secondary"
        class="size-7"
        :title="`Delete ${cube.name}`"
        @click.prevent.stop="emit('delete', cube)"
      >
        <Trash />
        <span class="sr-only">Delete cube</span>
      </Button>
    </div>
  </SidebarMenuButton>
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
