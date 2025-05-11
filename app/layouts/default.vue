<template>
  <SidebarProvider class="overflow-hidden">
    <AppSidebar />
    <SidebarInset class="h-dvh">
      <ScrollArea class="size-full">
        <header
          class="bg-background/70 sticky top-0 flex items-center justify-between p-4 backdrop-blur-md"
        >
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
      </ScrollArea>
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
