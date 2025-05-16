<template>
  <SidebarProvider class="overflow-hidden">
    <AppSidebar />
    <SidebarInset>
      <header
        class="bg-background/70 sticky top-0 flex items-center justify-between p-4 backdrop-blur-md"
      >
        <SidebarTrigger title="Toggle sidebar" />
        <Button
          variant="ghost"
          size="icon"
          class="size-7"
          title="Toggle Color Mode"
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
