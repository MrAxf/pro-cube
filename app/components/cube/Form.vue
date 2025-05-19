<template>
  <form class="flex flex-col gap-8" @submit.prevent.stop="form.handleSubmit">
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
          :error="field.state.meta.errors[0]?.message"
        >
          <Input
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            type="text"
            placeholder="Enter a name"
            :disabled="props.submitting"
            @update:model-value="(input) => field.handleChange(input as string)"
            @blur="field.handleBlur"
          />
        </FieldContainer>
      </template>
    </form.Field>
    <form.Field
      name="size"
      :validators="{
        onChange: cubeSchema.entries.size,
      }"
    >
      <template #default="{ field }">
        <FieldContainer
          :id="field.name"
          label="Size"
          :error="field.state.meta.errors[0]?.message"
        >
          <RadioGroup
            :model-value="field.state.value"
            :orientation="'horizontal'"
            class="flex flex-wrap items-center gap-8"
            @update:model-value="
              (input) => {
                field.handleChange(input as any)
                field.validate('change')
              }
            "
          >
            <div
              v-for="size in sizes"
              :key="size"
              class="flex items-center space-x-2"
            >
              <RadioGroupItem
                :id="`${field.name}.${size}`"
                :value="size"
                class="peer sr-only"
                :disabled="props.submitting"
              />
              <Label :for="`${field.name}.${size}`">
                <Card
                  :class="[
                    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:border-accent-foreground w-60 cursor-pointer transition-colors',
                    'peer-disabled:opacity-50',
                    {
                      'border-accent-foreground': field.state.value === size,
                    },
                  ]"
                >
                  <CardContent class="flex items-center justify-between gap-2">
                    <CubeIcon class="size-20" :size="size" />
                    <div class="flex flex-col gap-[1lh]">
                      <span class="text-xl font-bold">{{
                        `${size}x${size}`
                      }}</span>
                      <span>A {{ `${size}x${size}` }} cube</span>
                    </div>
                  </CardContent>
                </Card>
              </Label>
            </div>
          </RadioGroup>
        </FieldContainer>
      </template>
    </form.Field>
    <form.Field
      name="baseColor"
      :validators="{
        onChange: cubeSchema.entries.baseColor,
      }"
    >
      <template #default="{ field }">
        <FieldContainer
          :id="field.name"
          label="Base color"
          :error="field.state.meta.errors[0]?.message"
        >
          <ColorInput
            :id="field.name"
            :name="field.name"
            :model-value="field.state.value"
            :disabled="props.submitting"
            @update:model-value="
              (input) => {
                field.handleChange(input as any)
                field.validate('change')
              }
            "
          />
        </FieldContainer>
      </template>
    </form.Field>
    <div class="grid grid-cols-2 gap-8">
      <form.Field
        name="upColor"
        :validators="{
          onChange: cubeSchema.entries.upColor,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Up face color"
            :error="field.state.meta.errors[0]?.message"
          >
            <ColorInput
              :id="field.name"
              :name="field.name"
              :model-value="field.state.value"
              :disabled="props.submitting"
              @update:model-value="
                (input) => {
                  field.handleChange(input as any)
                  field.validate('change')
                }
              "
            />
          </FieldContainer>
        </template>
      </form.Field>
      <form.Field
        name="downColor"
        :validators="{
          onChange: cubeSchema.entries.downColor,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Down face color"
            :error="field.state.meta.errors[0]?.message"
          >
            <ColorInput
              :id="field.name"
              :name="field.name"
              :model-value="field.state.value"
              :disabled="props.submitting"
              @update:model-value="
                (input) => {
                  field.handleChange(input as any)
                  field.validate('change')
                }
              "
            />
          </FieldContainer>
        </template>
      </form.Field>
      <form.Field
        name="frontColor"
        :validators="{
          onChange: cubeSchema.entries.frontColor,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Front face color"
            :error="field.state.meta.errors[0]?.message"
          >
            <ColorInput
              :id="field.name"
              :name="field.name"
              :model-value="field.state.value"
              :disabled="props.submitting"
              @update:model-value="
                (input) => {
                  field.handleChange(input as any)
                  field.validate('change')
                }
              "
            />
          </FieldContainer>
        </template>
      </form.Field>
      <form.Field
        name="backColor"
        :validators="{
          onChange: cubeSchema.entries.backColor,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Back face color"
            :error="field.state.meta.errors[0]?.message"
          >
            <ColorInput
              :id="field.name"
              :name="field.name"
              :model-value="field.state.value"
              :disabled="props.submitting"
              @update:model-value="
                (input) => {
                  field.handleChange(input as any)
                  field.validate('change')
                }
              "
            />
          </FieldContainer>
        </template>
      </form.Field>
      <form.Field
        name="leftColor"
        :validators="{
          onChange: cubeSchema.entries.leftColor,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Left face color"
            :error="field.state.meta.errors[0]?.message"
          >
            <ColorInput
              :id="field.name"
              :name="field.name"
              :model-value="field.state.value"
              :disabled="props.submitting"
              @update:model-value="
                (input) => {
                  field.handleChange(input as any)
                  field.validate('change')
                }
              "
            />
          </FieldContainer>
        </template>
      </form.Field>
      <form.Field
        name="rightColor"
        :validators="{
          onChange: cubeSchema.entries.rightColor,
        }"
      >
        <template #default="{ field }">
          <FieldContainer
            :id="field.name"
            label="Right face color"
            :error="field.state.meta.errors[0]?.message"
          >
            <ColorInput
              :id="field.name"
              :name="field.name"
              :model-value="field.state.value"
              :disabled="props.submitting"
              @update:model-value="
                (input) => {
                  field.handleChange(input as any)
                  field.validate('change')
                }
              "
            />
          </FieldContainer>
        </template>
      </form.Field>
    </div>
    <div class="flex w-full justify-end gap-8">
      <Button
        type="button"
        variant="secondary"
        :disabled="
          form.state.isSubmitting || form.state.isValidating || props.submitting
        "
        @click="form.reset()"
      >
        <Undo />
        Reset values
      </Button>
      <Button
        type="submit"
        :disabled="
          form.state.isSubmitting || form.state.isValidating || props.submitting
        "
      >
        <Loader
          v-if="
            form.state.isSubmitting ||
            form.state.isValidating ||
            props.submitting
          "
          class="animate-spin"
        />
        <Save v-else />
        Save cube
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { Loader, Save, Undo } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    defaultValues?: Partial<CubeForm>
    submitting?: boolean
  }>(),
  {
    submitting: false,
    defaultValues: () => ({}),
  }
)

const emit = defineEmits<{
  submit: [values: CubeForm]
}>()

const sizes = [2, 3, 4]

const form = useForm({
  defaultValues: {
    size: 3,
    baseColor: CUBE_DEFAULT_COLORS.baseColor,
    upColor: CUBE_DEFAULT_COLORS.upColor,
    downColor: CUBE_DEFAULT_COLORS.downColor,
    frontColor: CUBE_DEFAULT_COLORS.frontColor,
    backColor: CUBE_DEFAULT_COLORS.backColor,
    leftColor: CUBE_DEFAULT_COLORS.leftColor,
    rightColor: CUBE_DEFAULT_COLORS.rightColor,
    ...props.defaultValues,
  } as CubeForm,
  validators: {
    onSubmit: cubeSchema,
  },
  async onSubmit({ value }) {
    emit('submit', value)
  },
})
</script>
