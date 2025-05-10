<template>
  <main class="flex size-full flex-col p-4">
    <form
      class="flex max-w-xl flex-col gap-4"
      @submit.prevent.stop="form.handleSubmit"
    >
      <form.Field
        name="name"
        :validators="{
          onBlur: cubeSchema.entries.name,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Name"
            help="Enter your name"
            :error="field.state.meta.errors[0]?.message"
          >
            <Input
              :name="field.name"
              :model-value="field.state.value"
              type="text"
              placeholder="Enter a name"
              @update:model-value="
                (input) => field.handleChange(input as string)
              "
              @blur="field.handleBlur"
            />
          </FieldContainer>
        </template>
      </form.Field>
    </form>
  </main>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import type { InferInput } from 'valibot'

const form = useForm({
  defaultValues: {} as InferInput<typeof cubeSchema>,
  validators: {
    onSubmit: cubeSchema,
  },
  async onSubmit({ value }) {
    console.log('Form submitted:', value)
  },
})
</script>
