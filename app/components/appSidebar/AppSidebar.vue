<template>
  <Sidebar v-bind="props">
    <SidebarHeader class="flex flex-col">
      <div class="flex items-center justify-center py-2">
        <img src="/favicon.svg" alt="Pro Cube Logo" class="mr-2 size-12" />
        <h1 class="text-2xl font-bold">PRO CUBE</h1>
      </div>
      <Separator />
    </SidebarHeader>
    <SidebarContent class="overflow-hidden">
      <SidebarGroup class="grow overflow-hidden">
        <SidebarGroupLabel>My Cubes</SidebarGroupLabel>
        <SidebarGroupAction
          title="Create cube"
          class="cursor-pointer"
          @click="openCubeFormDialog()"
        >
          <Plus /> <span class="sr-only">Create cube</span>
        </SidebarGroupAction>
        <SidebarGroupContent class="h-full overflow-hidden">
          <AppSidebarCubeList @edit="openCubeFormDialog($event)" />
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="flex flex-col">
      <Separator />
      <AppSidebarUserNav />
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
