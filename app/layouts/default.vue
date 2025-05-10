<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex items-center justify-between p-4">
        <SidebarTrigger />
        <Button
          variant="ghost"
          size="icon"
          class="size-7"
          @click="toggleColorMode"
        >
          <Sun v-if="colorMode.preference === 'dark'" />
          <Moon v-else />
          <span class="sr-only">Toggle Color Mode</span>
        </Button>
      </header>
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'

const colorMode = useColorMode()

function toggleColorMode() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
</script>
