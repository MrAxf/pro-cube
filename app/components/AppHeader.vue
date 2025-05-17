<template>
  <header
    class="bg-background/70 sticky top-0 flex items-center justify-between p-4 backdrop-blur-md"
  >
    <SidebarTrigger title="Toggle sidebar" />
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <span v-if="!open || isMobile" class="inline-flex items-center">
        <img src="/favicon.svg" alt="Pro Cube Logo" class="mr-2 size-7" />
        <h1 class="text-lg font-bold">PRO CUBE</h1>
      </span>
    </Transition>
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
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next'
import { useSidebar } from '~/components/ui/sidebar'

const colorMode = useColorMode()

const { open, isMobile } = useSidebar()

function toggleColorMode() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
</script>
