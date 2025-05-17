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
          <ClientOnly>
            <AppSidebarCubeList
              @edit="openCubeFormDialog($event)"
              @delete="openDeleteCubeDialog($event)"
            />
          </ClientOnly>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="flex flex-col">
      <Separator />
      <ClientOnly>
        <AppSidebarUserNav v-if="isLoaded && isSignedIn" />
        <AppSidebarUserNavSkeleton v-else />
        <template #fallback>
          <AppSidebarUserNavSkeleton />
        </template>
      </ClientOnly>
      <small class="text-center"> &copy; 2025 Axford </small></SidebarFooter
    >
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import { AlertModal, CubeFormDialog } from '#components'
import type { SidebarProps } from '@/components/ui/sidebar'
import { Plus } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'offcanvas',
})

const { isLoaded, isSignedIn } = useUser()
const cubeStore = useCubeStore()
const overlay = useOverlay()

const cubeFormDialog = overlay.create(CubeFormDialog)

function openCubeFormDialog(cube?: Cube) {
  cubeFormDialog.open({
    cube,
  })
}

const deleteCubeDialog = overlay.create(AlertModal)

const { data: cubes } = useNuxtData<Cube[]>('cubes')

function openDeleteCubeDialog(cube: Cube) {
  deleteCubeDialog.open({
    title: 'Delete cube',
    description: `Are you sure you want to delete ${cube.name}? This action cannot be undone.`,
    actionLabel: 'Delete',
    onAction: async () => {
      const dbCube = await $fetch(`/api/cubes/${cube.id}`, {
        method: 'DELETE',
      })
      if (cubes.value && dbCube.data) {
        cubes.value = cubes.value.filter((c) => c.id !== dbCube.data!.id)
        cubeStore.cube =
          cubes.value.length > 0 ? (cubes.value[0] as Cube) : null
      }
      toast('Cube deleted', {
        description: `Cube ${cube.name} has been deleted.`,
      })
    },
  })
}
</script>
