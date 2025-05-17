<template>
  <AlertDialog v-bind="forwarded">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{ title }}</AlertDialogTitle>
        <AlertDialogDescription>
          {{ description }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>{{ cancelLabel }}</AlertDialogCancel>
        <AlertDialogAction @click="onAction()">{{
          actionLabel
        }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  type AlertDialogEmits,
  type AlertDialogProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(
  defineProps<
    AlertDialogProps & {
      title: string
      description: string
      cancelLabel?: string
      actionLabel?: string
      onAction?: () => void
    }
  >(),
  {
    cancelLabel: 'Cancel',
    actionLabel: 'Continue',
    onAction: () => {},
  }
)

const emit = defineEmits<AlertDialogEmits>()

const forwarded = useForwardPropsEmits(
  computed(() => {
    const { title, description, cancelLabel, actionLabel, onAction, ...rest } =
      props
    return rest
  }),
  emit
)
</script>
