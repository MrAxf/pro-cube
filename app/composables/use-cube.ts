import type {
  enqueueRotations as _enqueueRotations,
  rotate as _rotate,
} from '@web-cube/web-cube'

export type CubeContext = {
  cube: ComputedRef<Cube | null>
  history: Ref<CubeHistory>
  historyPointer: ComputedRef<number>
  rotateFn: (options: Parameters<typeof _rotate>[1]) => Promise<void>
  enqueueRotationsFn: (
    options: Parameters<typeof _enqueueRotations>[1]
  ) => Promise<void>
  addToHistory: (cubeHistoryItem: CubeHistoryItem) => void
  undo: () => Promise<void>
  redo: () => Promise<void>
  goToHistoryPointer: (index: number) => Promise<void>
}

const cubeContextKey = '_CUBE_CONTEXT_KEY_'

const HISTORY_LIMIT = 200

export function provideCube({
  cube,
  rotateFn,
  enqueueRotationsFn,
  isRotating,
}: {
  cube: ComputedRef<Cube | null>
  rotateFn: CubeContext['rotateFn']
  enqueueRotationsFn: CubeContext['enqueueRotationsFn']
  isRotating: () => boolean
}): CubeContext {
  const history = ref<CubeHistory>([])
  const historyPointer = ref(0)

  watchEffect(() => {
    if (cube.value) {
      history.value = []
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

  async function undo() {
    if (
      !isRotating() &&
      historyPointer.value > 0 &&
      historyPointer.value <= history.value.length
    ) {
      historyPointer.value--
      const item = history.value[historyPointer.value]
      if (!item) return
      if (item.type === 'cube') {
        await rotateFn({
          type: 'cube',
          angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
          axis: item.axis,
          backwards: item.angle > 0,
          speed: 100,
        })
      } else {
        await rotateFn({
          type: 'layer',
          layer: item.layer!,
          angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
          axis: item.axis,
          backwards: item.angle > 0,
          speed: 100,
        })
      }
    }
  }

  async function redo() {
    if (
      !isRotating() &&
      historyPointer.value >= 0 &&
      historyPointer.value < history.value.length
    ) {
      const item = history.value[historyPointer.value]
      historyPointer.value++
      if (!item) return
      if (item.type === 'cube') {
        await rotateFn({
          type: 'cube',
          angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
          axis: item.axis,
          backwards: item.angle < 0,
          speed: 100,
        })
      } else {
        await rotateFn({
          type: 'layer',
          layer: item.layer!,
          angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
          axis: item.axis,
          backwards: item.angle < 0,
          speed: 100,
        })
      }
    }
  }

  async function goToHistoryPointer(index: number) {
    if (
      !isRotating() &&
      index >= 0 &&
      index <= history.value.length &&
      index !== historyPointer.value
    ) {
      const from = Math.min(index, historyPointer.value)
      const to = Math.max(index, historyPointer.value)
      const historyItems = history.value.slice(from, to) as CubeHistory
      const isBackwards = index < historyPointer.value
      if (isBackwards) historyItems.reverse()

      await enqueueRotationsFn(
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

  provide(cubeContextKey, {
    cube,
    history,
    historyPointer: computed(() => historyPointer.value),
    rotateFn,
    enqueueRotationsFn,
    addToHistory,
    undo,
    redo,
    goToHistoryPointer,
  })

  return {
    cube,
    history,
    historyPointer: computed(() => historyPointer.value),
    rotateFn,
    enqueueRotationsFn,
    addToHistory,
    undo,
    redo,
    goToHistoryPointer,
  }
}

export function useCube(): CubeContext {
  const context = inject<CubeContext>(cubeContextKey)
  if (!context) {
    throw new Error('useCube() is called without provider.')
  }
  return context
}
