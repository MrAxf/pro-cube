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

        <nav class="gap-2 md:flex"></nav>

        <div class="gap-2 md:flex">
          <SignedOut>
            <Button variant="outline" as-child>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="outline" as-child>
              <SignOutButton />
            </Button>
          </SignedIn>

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
