<template>
  <Sidebar v-bind="props">
    <SidebarHeader class="flex flex-col">
      <h1 class="py-4 text-center text-2xl font-bold">PRO CUBE</h1>

      <Separator class="my-2" />
    </SidebarHeader>
    <SidebarContent class="overflow-hidden">
      <div class="flex shrink-0 items-center justify-between px-4">
        <h3 class="text-lg font-semibold">My cubes</h3>
        <Button class="size-9" @click="openCubeFormDialog()">
          <Plus /> <span class="sr-only">Create cube</span>
        </Button>
      </div>
      <AppSidebarCubeList class="grow" @edit="openCubeFormDialog($event)" />
    </SidebarContent>
    <SidebarFooter class="flex flex-col">
      <Separator class="my-2" />
      <small class="text-center"> &copy; 2025 Axford </small></SidebarFooter
    >
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import { CubeFormDialog } from '#components'
import type { SidebarProps } from '@/components/ui/sidebar'
import { Plus } from 'lucide-vue-next'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'offcanvas',
})

const overlay = useOverlay()

const cubeFormDialog = overlay.create(CubeFormDialog)

function openCubeFormDialog(cube?: Cube) {
  cubeFormDialog.open({
    cube,
  })
}
</script>
