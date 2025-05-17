<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <SidebarMenuButton
        class="group/cube-btn cursor-pointer overflow-hidden"
        :is-active="cubeStore.cube?.id === cube.id"
        :title="`Open ${cube.name}`"
        @click.prevent.stop="onClick"
      >
        <span class="w-full truncate text-ellipsis">
          {{ cube.name }}
        </span>

        <div
          class="absolute end-0 flex items-center gap-2 opacity-0 transition-all group-hover/cube-btn:translate-x-0 group-hover/cube-btn:opacity-100"
        >
          <Button
            class="size-7"
            :title="`Edit ${cube.name}`"
            @click.prevent.stop="emit('edit', cube)"
          >
            <Edit />
            <span class="sr-only">Edit cube</span>
          </Button>
          <Button
            class="size-7"
            :title="`Delete ${cube.name}`"
            @click.prevent.stop="emit('delete', cube)"
          >
            <Trash />
            <span class="sr-only">Delete cube</span>
          </Button>
        </div>
      </SidebarMenuButton>
    </TooltipTrigger>
    <TooltipContent side="right">
      <CubeIcon
        class="size-20"
        :size="cube.size"
        :color-background="cube.baseColor"
        :color-up="cube.upColor"
        :color-front="cube.frontColor"
        :color-left="cube.leftColor"
      />
    </TooltipContent>
  </Tooltip>
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
