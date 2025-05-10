<template>
  <Sidebar v-bind="props">
    <SidebarHeader class="flex flex-col">
      <h1 class="py-4 text-center text-xl font-bold">PRO CUBE</h1>
      <Button> <Plus /> Create cube </Button>
      <Separator class="my-2" />
    </SidebarHeader>
    <SidebarContent> </SidebarContent>
    <SidebarFooter class="flex flex-col">
      <Separator class="my-2" />
      <small class="text-center"> &copy; 2025 Axford </small></SidebarFooter
    >
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'
import { Plus } from 'lucide-vue-next'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'offcanvas',
})
</script>
