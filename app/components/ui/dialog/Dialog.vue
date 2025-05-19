<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardProps,
} from 'reka-ui'

const props = withDefaults(
  defineProps<
    DialogRootProps & {
      closeDisabled?: boolean
    }
  >(),
  {
    closeDisabled: false,
  }
)
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardProps(
  computed(() => {
    const { closeDisabled, ...rest } = props
    return rest
  })
)
</script>

<template>
  <DialogRoot
    data-slot="dialog"
    v-bind="forwarded"
    @update:open="
      (open) => {
        if (!open && props.closeDisabled) {
          emits('update:open', true)
          return
        }
        emits('update:open', open)
      }
    "
  >
    <slot />
  </DialogRoot>
</template>
