<template>
  <section
    class="relative container mx-auto grid place-items-center gap-10 px-4 py-20 md:py-32 lg:grid-cols-2"
  >
    <div class="space-y-6 text-center lg:text-start">
      <main class="text-5xl font-bold md:text-6xl">
        <h1 class="inline">
          <span
            class="from-foreground to-primary inline bg-gradient-to-r bg-clip-text text-transparent"
          >
            Pro Cube
          </span>
          , an application
        </h1>
        for
        <h2 class="inline">
          create and customize your own
          <span
            class="from-foreground to-accent inline bg-gradient-to-r bg-clip-text text-transparent"
          >
            puzzle cubes
          </span>
        </h2>
      </main>

      <p class="text-muted-foreground mx-auto text-xl md:w-10/12 lg:mx-0">
        Easily create, customize, and manage your own puzzle cubes.
      </p>

      <div class="space-y-4 md:flex md:space-y-0 md:space-x-4">
        <SignedOut>
          <Button class="w-full md:w-1/3" as-child>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <Button class="w-full md:w-1/3" as-child>
            <NuxtLink prefetch-on="visibility" to="/dashboard">
              Enter the app
            </NuxtLink>
          </Button>
        </SignedIn>

        <a
          rel="noreferrer noopener"
          href="https://github.com/MrAxf/pro-cube"
          target="_blank"
          :class="['w-full md:w-1/3', buttonVariants({ variant: 'outline' })]"
        >
          Github Repository
          <Github class="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>

    <div class="z-10">
      <LandingHeroCubes />
    </div>

    <GlowShine
      class="top-30 -z-1 h-[250px] w-[300px] [--glow-slide-from:0%] [--glow-slide-to:100%] lg:top-50 lg:h-[500px] lg:w-[600px] lg:[--glow-slide-from:50%]"
    />
  </section>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'

import { buttonVariants } from '../ui/button'
</script>
