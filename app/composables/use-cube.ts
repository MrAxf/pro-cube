import type { CubeWrapper } from '#components'
import {
  createBaseState,
  createRandomRotationOptions,
} from '@web-cube/web-cube'
import type { ShallowRef } from 'vue'

export type CubeContext = {
  cube: ComputedRef<Cube | null>
  $cubeWrapper: ShallowRef<InstanceType<typeof CubeWrapper> | null>
  history: Ref<CubeHistory>
  historyPointer: ComputedRef<number>
  addToHistory: (cubeHistoryItem: CubeHistoryItem) => void
  goToHistoryPointer: (index: number) => Promise<void>
  restore: () => void
  scramble: () => Promise<void>
}

const cubeContextKey = '_CUBE_CONTEXT_KEY_'

const HISTORY_LIMIT = 200

export function provideCube({
  cube,
  $cubeWrapper,
}: {
  cube: ComputedRef<Cube | null>
  $cubeWrapper: ShallowRef<InstanceType<typeof CubeWrapper> | null>
}): CubeContext {
  // const history = useLocalStorage<CubeHistory>(
  //   computed(() => `${cube.value?.id}-history`),
  //   []
  // )
  const history = ref<CubeHistory>([])
  const historyPointer = ref(0)

  watchEffect(() => {
    if (cube.value) {
      history.value = []
      historyPointer.value = 0
    }
  })

  function addToHistory(cubeHistoryItem: CubeHistoryItem) {
    if (historyPointer.value < history.value.length) {
      history.value.splice(historyPointer.value)
    }
    if (history.value.length >= HISTORY_LIMIT) {
      history.value.shift()
    }
    history.value.push(cubeHistoryItem)
    historyPointer.value = history.value.length
  }

  async function goToHistoryPointer(index: number) {
    if (
      $cubeWrapper.value &&
      !$cubeWrapper.value.isRotating &&
      index >= 0 &&
      index <= history.value.length &&
      index !== historyPointer.value
    ) {
      const from = Math.min(index, historyPointer.value)
      const to = Math.max(index, historyPointer.value)
      const historyItems = history.value.slice(from, to) as CubeHistory
      const isBackwards = index < historyPointer.value
      if (isBackwards) historyItems.reverse()

      await $cubeWrapper.value.enqueueRotations(
        historyItems.map((item) => {
          if (item.type === 'cube') {
            return {
              type: 'cube',
              angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
              axis: item.axis,
              backwards: isBackwards ? item.angle > 0 : item.angle < 0,
              speed: 100,
            }
          } else {
            return {
              type: 'layer',
              layer: item.layer!,
              angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
              axis: item.axis,
              backwards: isBackwards ? item.angle > 0 : item.angle < 0,
              speed: 100,
            }
          }
        })
      )
      historyPointer.value = index
    }
  }

  function restore() {
    if ($cubeWrapper.value && cube.value) {
      $cubeWrapper.value.state = createBaseState(cube.value.size)
      history.value = []
      historyPointer.value = 0
    }
  }

  async function scramble() {
    if ($cubeWrapper.value && cube.value) {
      restore()
      const rotations = Array.from({ length: cube.value.size * 10 }, () =>
        createRandomRotationOptions(cube.value!.size, {
          type: 'layer',
          speed: 100,
          angle: 90,
        })
      ).flat()
      await $cubeWrapper.value.enqueueRotations(rotations)
    }
  }

  provide(cubeContextKey, {
    cube,
    $cubeWrapper,
    history,
    historyPointer: computed(() => historyPointer.value),
    addToHistory,
    goToHistoryPointer,
    restore,
    scramble,
  })

  return {
    cube,
    history,
    $cubeWrapper,
    historyPointer: computed(() => historyPointer.value),
    addToHistory,
    goToHistoryPointer,
    restore,
    scramble,
  }
}
export function useCube(): CubeContext {
  const context = inject<CubeContext>(cubeContextKey)
  if (!context) {
    throw new Error('useCube() is called without provider.')
  }
  return context
}
