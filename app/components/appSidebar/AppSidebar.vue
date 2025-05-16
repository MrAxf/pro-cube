<template>
  <Sidebar v-bind="props">
    <SidebarHeader class="flex flex-col">
      <div class="flex items-center justify-center">
        <img src="/favicon.svg" alt="Pro Cube Logo" class="mr-2 size-12" />
        <h1 class="text-2xl font-bold">PRO CUBE</h1>
      </div>
      <Separator class="my-2" />
    </SidebarHeader>
    <SidebarContent class="overflow-hidden">
      <div class="flex shrink-0 items-center justify-between px-4">
        <h3 class="text-lg font-semibold">My cubes</h3>
        <Button class="size-9" @click="openCubeFormDialog()">
          <Plus /> <span class="sr-only">Create cube</span>
        </Button>
      </div>
      <SidebarGroup>
        <SidebarGroupContent class="overflow-hidden">
          <AppSidebarCubeList class="grow" @edit="openCubeFormDialog($event)" />
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="flex flex-col">
      <SignedIn>
        <UserButton />
      </SignedIn>
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
