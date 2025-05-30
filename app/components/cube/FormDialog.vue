<template>
  <Dialog v-bind="forwarded" :close-disabled="isSubmitting">
    <DialogScrollContent
      class="flex max-h-[90dvh] grid-rows-[auto_minmax(0,1fr)_auto] flex-col overflow-hidden p-0 md:max-w-4xl"
    >
      <DialogHeader class="p-6 pb-0">
        <DialogTitle>
          <span v-if="props.cube">Edit cube</span>
          <span v-else>Create cube</span>
        </DialogTitle>
        <DialogDescription>
          <span v-if="props.cube">Edit the style of your cube</span>
          <span v-else>Fill in the details to create a new cube</span>
        </DialogDescription>
      </DialogHeader>
      <div class="overflow-y-auto px-6 py-4">
        <CubeForm
          :default-values="defaultValues"
          :submitting="isSubmitting"
          @submit="onSubmit"
        />
      </div>
    </DialogScrollContent>
  </Dialog>
</template>

<script setup lang="ts">
import {
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { toast } from 'vue-sonner'

const props = defineProps<
  DialogRootProps & {
    cube?: Cube
  }
>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(
  computed(() => {
    const { cube, ...rest } = props
    return rest
  }),
  emits
)

const cubeStore = useCubeStore()

const { data: cubes } = useNuxtData<Cube[]>('cubes')

const defaultValues = computed<Partial<CubeForm>>(() => {
  if (props.cube) {
    const { id, ...rest } = props.cube
    return rest
  }
  return {}
})

const { mutate } = useMutation(async (data: CubeForm) => {
  if (props.cube) {
    return await $fetch(`/api/cubes/${props.cube.id}`, {
      method: 'PUT',
      body: data,
    })
  } else {
    return await $fetch('/api/cubes', {
      method: 'POST',
      body: data,
    })
  }
})

const isSubmitting = ref(false)

async function onSubmit(data: CubeForm) {
  try {
    isSubmitting.value = true
    let idx = 0
    if (props.cube) {
      idx = cubes.value!.findIndex((cube) => cube.id === props.cube!.id)
      cubes.value = [
        ...cubes.value!.slice(0, idx),
        {
          ...cubes.value![idx],
          ...data,
        } as Cube,
        ...cubes.value!.slice(idx + 1),
      ]
    } else {
      cubes.value = [
        {
          id: -1,
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        } as Cube,
        ...cubes.value!,
      ]
    }
    const dbCube = await mutate(data)
    cubes.value = [
      ...cubes.value!.slice(0, idx),
      dbCube!.data as Cube,
      ...cubes.value!.slice(idx + 1),
    ]
    if (props.cube) {
      toast('Cube updated successfully', {
        description: 'Your cube has been updated successfully.',
      })
      if (cubeStore.cube?.id === props.cube.id) {
        cubeStore.cube = dbCube!.data as Cube
      }
    } else {
      toast('Cube created successfully', {
        description: 'Your cube has been created successfully.',
      })
      cubeStore.cube = dbCube!.data as Cube
    }
    emits('update:open', false)
  } catch (error) {
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>
