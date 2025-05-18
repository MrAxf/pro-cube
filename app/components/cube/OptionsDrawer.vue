<template>
  <Drawer v-bind="forwarded">
    <DrawerContent>
      <div class="mx-auto flex w-full max-w-sm gap-2 p-4">
        <Button
          class="flex h-40 flex-1 grow flex-col items-center justify-center text-2xl font-bold"
          variant="secondary"
          @click="onRestore"
        >
          <LucideRotateCw class="size-10" />
          <span>Restore</span>
        </Button>
        <Button
          class="flex h-40 flex-1 grow flex-col items-center justify-center text-2xl font-bold"
          @click="onScramble"
        >
          <Shuffle class="size-10" />
          <span>Scramble</span>
        </Button>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { LucideRotateCw, Shuffle } from 'lucide-vue-next'
import { useForwardPropsEmits } from 'reka-ui'
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'

const props = defineProps<DrawerRootProps>()

const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits) as ComputedRef<any>

const { restore, scramble } = useCube()

function onRestore() {
  restore()
  emits('update:open', false)
}

function onScramble() {
  scramble()
  emits('update:open', false)
}
</script>
