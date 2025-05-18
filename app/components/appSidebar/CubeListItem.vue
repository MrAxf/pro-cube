<template>
  <div>
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
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <SidebarMenuAction>
          <MoreHorizontal />
        </SidebarMenuAction>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start">
        <DropdownMenuItem
          :title="`Edit ${cube.name}`"
          @click="emit('edit', cube)"
        >
          <Edit />
          <span>Edit Cube</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          :title="`Delete ${cube.name}`"
          @click="emit('delete', cube)"
        >
          <Trash />
          <span>Delete Cube</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/components/ui/sidebar'
import { Edit, MoreHorizontal, Trash } from 'lucide-vue-next'

const props = defineProps<{
  cube: Cube
}>()

const emit = defineEmits<{
  edit: [cube: Cube]
  delete: [cube: Cube]
}>()

const cubeStore = useCubeStore()
const { isMobile, setOpenMobile } = useSidebar()

function onClick() {
  cubeStore.cube = props.cube
  if (isMobile.value) {
    setOpenMobile(false)
  }
}
</script>
