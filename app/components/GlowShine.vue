<template>
  <div
    :class="
      cn(
        'glow bg-primary animate-infinite absolute rounded-[1.5rem] blur-[9.5rem] will-change-transform',
        props.class
      )
    "
  ></div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<style scoped>
.glow {
  animation: glow-slide infinite 24s linear alternate;
  transform: translateX(0) rotate(35deg);
}
@keyframes glow-slide {
  0% {
    background-color: var(--color-primary);
    opacity: 0.4;
    transform: translateX(var(--glow-slide-from, 0)) rotate(35deg);
  }
  11.1% {
    background-color: var(--color-primary);
    opacity: 0.8;
  }
  22.2% {
    background-color: var(--color-secondary);
    opacity: 0.4;
  }
  33.3% {
    background-color: var(--color-secondary);
    opacity: 0.8;
  }
  44.4% {
    background-color: var(--color-accent);
    opacity: 0.4;
  }
  55.5% {
    background-color: var(--color-accent);
    opacity: 0.8;
  }
  66.6% {
    background-color: var(--color-destructive);
    opacity: 0.4;
  }
  77.7% {
    background-color: var(--color-destructive);
    opacity: 0.8;
  }
  88.8% {
    background-color: var(--color-primary);
    opacity: 0.4;
  }
  100% {
    background-color: var(--color-primary);
    opacity: 0.8;
    transform: translateX(var(--glow-slide-to, 0)) rotate(35deg);
  }
}
</style>
