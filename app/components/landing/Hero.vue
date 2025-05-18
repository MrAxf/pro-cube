<template>
  <section
    class="container mx-auto grid place-items-center gap-10 px-4 py-20 md:py-32 lg:grid-cols-2"
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
        <Button class="w-full md:w-1/3">Get Started</Button>

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

    <div class="shadow"></div>
  </section>
</template>

<script setup lang="ts">
import { Github } from 'lucide-vue-next'

import { buttonVariants } from '../ui/button'
</script>

<style scoped>
.shadow {
  position: absolute;
  background: var(--color-primary);
  border-radius: 24px;
  rotate: 35deg;
  z-index: -1;
  width: 260px;
  top: 200px;
  height: 400px;
  filter: blur(150px);
  will-change: transform;
  animation: shadow-slide infinite 4s linear alternate;
}

@keyframes shadow-slide {
  from {
    background: --alpha(var(--color-primary) / 20%);
    right: 460px;
  }
  to {
    background: --alpha(var(--color-primary) / 80%);
    right: 160px;
  }
}

@media (max-width: 1024px) {
  .shadow {
    top: 70px;
  }

  @keyframes shadow-slide {
    from {
      background: --alpha(var(--color-primary) / 20%);
      right: 460px;
    }
    to {
      background: --alpha(var(--color-primary) / 50%);
      right: 160px;
    }
  }
}

@media (max-width: 768px) {
  .shadow {
    top: 70px;
    width: 100px;
    height: 350px;
    filter: blur(60px);
  }

  @keyframes shadow-slide {
    from {
      background: --alpha(var(--color-primary) / 20%);
      right: 280px;
    }
    to {
      background: --alpha(var(--color-primary) / 30%);
      right: 100px;
    }
  }
}
</style>
