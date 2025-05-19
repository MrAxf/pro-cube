<template>
  <Label
    :style="{
      '--color-value': model,
    }"
  >
    <Input
      :id="props.id"
      v-model="model"
      :name="props.name"
      type="color"
      :disabled="props.disabled"
      class="peer sr-only size-0"
      v-bind="$attrs"
    />
    <Card
      :class="[
        'h-9 w-full rounded-md bg-(--color-value) p-0 transition-colors peer-disabled:opacity-50',
        {
          'cursor-not-allowed': props.disabled,
          'hover:border-accent-foreground cursor-pointer': !props.disabled,
        },
      ]"
    />
  </Label>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    id?: string
    name?: string
    disabled?: boolean
  }>(),
  {
    disabled: false,
  }
)

const model = defineModel<string>()
</script>
