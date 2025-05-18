<template>
  <header
    class="dark:bg-background sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700"
  >
    <NavigationMenu class="mx-auto">
      <NavigationMenuList
        class="container flex h-14 w-screen justify-between px-4"
      >
        <NavigationMenuItem class="flex font-bold">
          <a
            rel="noreferrer noopener"
            href="/"
            class="ml-2 flex items-center gap-2 text-xl font-bold"
          >
            <img src="/favicon.svg" alt="Pro Cube Logo" class="size-8" />
            PRO CUBE
          </a>
        </NavigationMenuItem>

        <span class="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            title="Toggle Color Mode"
            @click="toggleColorMode"
          >
            <Sun v-if="colorMode.preference === 'dark'" />
            <Moon v-else />
            <span class="sr-only">Toggle Color Mode</span>
          </Button>
        </span>

        <nav class="hidden gap-2 md:flex"></nav>

        <div class="hidden gap-2 md:flex">
          <a
            rel="noreferrer noopener"
            href="https://github.com/MrAxf/pro-cube"
            target="_blank"
            :class="`border ${buttonVariants({ variant: 'outline' })}`"
          >
            <Github class="mr-2 h-5 w-5" />
            Github
          </a>

          <Button
            variant="ghost"
            size="icon"
            title="Toggle Color Mode"
            @click="toggleColorMode"
          >
            <Sun v-if="colorMode.preference === 'dark'" />
            <Moon v-else />
            <span class="sr-only">Toggle Color Mode</span>
          </Button>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>

<script setup lang="ts">
import { Github, Moon, Sun } from 'lucide-vue-next'

import { buttonVariants } from '../ui/button'

const colorMode = useColorMode()

function toggleColorMode() {
  if (colorMode.preference === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
</script>
