<script lang="ts" setup>
import { cn } from '@/lib/utils'
import type { HtmlHTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HtmlHTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="drawer-footer"
    :class="cn('mt-auto flex flex-col gap-2 p-4', props.class)"
  >
    <slot />
  </div>
</template>
