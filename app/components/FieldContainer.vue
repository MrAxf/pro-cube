<template>
  <Primitive v-bind="forwarded" class="flex flex-col gap-4">
    <Label v-if="props.label" :for="props.id" class="-mb-2">
      {{ props.label }}
    </Label>
    <slot :id="props.id" />
    <p v-if="props.help" class="-mt-1 text-sm">
      <small>{{ props.help }}</small>
    </p>
    <p v-if="props.error" class="text-destructive-foreground -mt-1 text-sm">
      <small>{{ props.error }}</small>
    </p>
  </Primitive>
</template>
<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      id?: string
      label?: string
      help?: string
      error?: string
    }
  >(),
  {
    as: 'div',
  }
)

defineSlots<{
  default(props: { id?: string }): any
}>()

const forwarded = computed(() => {
  const { id, label, ...rest } = props
  return rest
})
</script>
