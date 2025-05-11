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
            <div class="flex items-center space-x-2">
              <RadioGroupItem
                :id="`${field.name}.2`"
                :value="2"
                class="sr-only"
              />
              <Label :for="`${field.name}.2`">
                <Card
                  :class="[
                    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:border-accent-foreground cursor-pointer transition-colors',
                    {
                      'border-accent-foreground': field.state.value === 2,
                    },
                  ]"
                  ><CardContent class="flex flex-col gap-[1lh]">
                    <span class="text-xl font-bold">2x2</span>
                    <span>A 2x2 cube</span>
                  </CardContent></Card
                >
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem
                :id="`${field.name}.3`"
                :value="3"
                class="sr-only"
              />
              <Label :for="`${field.name}.3`">
                <Card
                  :class="[
                    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:border-accent-foreground cursor-pointer transition-colors',
                    {
                      'border-accent-foreground': field.state.value === 3,
                    },
                  ]"
                  ><CardContent class="flex flex-col gap-[1lh]">
                    <span class="text-xl font-bold">3x3</span>
                    <span>A 3x3 cube</span>
                  </CardContent></Card
                >
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem
                :id="`${field.name}.4`"
                :value="4"
                class="sr-only"
              />
              <Label :for="`${field.name}.4`">
                <Card
                  :class="[
                    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:border-accent-foreground cursor-pointer transition-colors',
                    {
                      'border-accent-foreground': field.state.value === 4,
                    },
                  ]"
                  ><CardContent class="flex flex-col gap-[1lh]">
                    <span class="text-xl font-bold">4x4</span>
                    <span>A 4x4 cube</span>
                  </CardContent></Card
                >
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem
                :id="`${field.name}.5`"
                :value="5"
                class="sr-only"
              />
              <Label :for="`${field.name}.5`">
                <Card
                  :class="[
                    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 hover:border-accent-foreground cursor-pointer transition-colors',
                    {
                      'border-accent-foreground': field.state.value === 5,
                    },
                  ]"
                  ><CardContent class="flex flex-col gap-[1lh]">
                    <span class="text-xl font-bold">5x5</span>
                    <span>A 5x5 cube</span>
                  </CardContent></Card
                >
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
      <Button type="button" variant="secondary" @click="form.reset()">
        <Undo />
        Reset values
      </Button>
      <Button
        type="submit"
        :disabled="form.state.isSubmitting || form.state.isValidating"
      >
        <Save />
        Save cube
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import { Save, Undo } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    defaultValues?: Partial<CubeForm>
  }>(),
  {
    defaultValues: () => ({}),
  }
)

const emit = defineEmits<{
  submit: [values: CubeForm]
}>()

const form = useForm({
  defaultValues: {
    size: 3,
    baseColor: '#242424',
    upColor: '#BA0C2F',
    downColor: '#FE5000',
    frontColor: '#ffffff',
    backColor: '#FFD700',
    leftColor: '#003DA5',
    rightColor: '#009A44',
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
