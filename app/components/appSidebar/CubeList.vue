<template>
  <div
    ref="parentRef"
    class="relative h-full w-full overflow-x-hidden overflow-y-auto"
  >
    <div v-if="!cubes?.length && status !== 'pending'" class="p-4 text-center">
      No cubes found.
    </div>
    <SidebarMenu
      :style="{
        height: `${totalSize}px`,
        width: '100%',
        position: 'relative',
      }"
    >
      <SidebarMenuItem
        v-for="virtualRow in virtualRows"
        :key="virtualRow.index"
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${virtualRow.size}px`,
          transform: `translateY(${virtualRow.start}px)`,
        }"
      >
        <template v-if="virtualRow.index > cubes!.length - 1">
          {{ hasNextPage ? 'Loading more...' : 'Nothing more to load' }}
        </template>
        <template v-else>
          <AppSidebarCubeListItem
            :cube="cubes![virtualRow.index]!"
            @edit="emit('edit', cubes![virtualRow.index]!)"
            @delete="emit('delete', cubes![virtualRow.index]!)"
          />
        </template>
      </SidebarMenuItem>
    </SidebarMenu>
  </div>
</template>

<script setup lang="ts">
import { useVirtualizer } from '@tanstack/vue-virtual'

const emit = defineEmits<{
  edit: [cube: Cube]
  delete: [cube: Cube]
}>()

const { data: cubes } = useNuxtData<Cube[]>('cubes')
if (!cubes.value) {
  cubes.value = []
}
const page = shallowRef(1)
const lastPage = shallowRef(1)

const hasNextPage = computed(() => {
  return page.value < lastPage.value
})

const { status } = useFetch('/api/cubes', {
  query: {
    page: page,
    pageSize: 20,
  },
  async onResponse({ error, response }) {
    if (error) return
    const data = response._data as {
      data: Cube[]
      meta: { total: number; last_page: number; page: number }
    }
    if (data.meta.page === 1) {
      cubes.value = data.data
    } else {
      cubes.value = [...cubes.value!, ...data.data]
    }
    lastPage.value = data.meta.last_page
  },
  server: false,
})

const parentRef = ref<HTMLElement | null>(null)

const rowVirtualizerOptions = computed(() => {
  return {
    count: hasNextPage.value ? cubes.value!.length + 1 : cubes.value!.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => 2.25 * 16,
    overscan: 5,
  }
})

const rowVirtualizer = useVirtualizer(rowVirtualizerOptions)

const virtualRows = computed(() => rowVirtualizer.value.getVirtualItems())

const totalSize = computed(() => rowVirtualizer.value.getTotalSize())

watchEffect(() => {
  const [lastItem] = [...virtualRows.value].reverse()

  if (!lastItem) {
    return
  }

  if (
    lastItem.index >= cubes.value!.length - 1 &&
    hasNextPage.value &&
    status.value !== 'pending'
  ) {
    page.value++
  }
})
</script>
