import type { rotate as _rotate } from '@web-cube/web-cube'

export type CubeContext = {
  cube: ComputedRef<Cube | null>
  history: Ref<CubeHistory>
  historyPointer: ComputedRef<number>
  rotateFn: (options: Parameters<typeof _rotate>[1]) => Promise<void>
  addToHistory: (cubeHistoryItem: CubeHistoryItem) => void
  undo: () => Promise<void>
  redo: () => Promise<void>
}

const cubeContextKey = '_CUBE_CONTEXT_KEY_'

const HISTORY_LIMIT = 200

export function provideCube(
  cube: ComputedRef<Cube | null>,
  rotateFn: (options: Parameters<typeof _rotate>[1]) => Promise<void>
): CubeContext {
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
        })
      } else {
        await rotateFn({
          type: 'layer',
          layer: item.layer!,
          angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
          axis: item.axis,
          backwards: item.angle > 0,
        })
      }
    }
  }

  async function redo() {
    if (
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
        })
      } else {
        await rotateFn({
          type: 'layer',
          layer: item.layer!,
          angle: Math.abs(item.angle) as 90 | 180 | 270 | 360,
          axis: item.axis,
          backwards: item.angle < 0,
        })
      }
    }
  }

  provide(cubeContextKey, {
    cube,
    history,
    historyPointer: computed(() => historyPointer.value),
    rotateFn,
    addToHistory,
    undo,
    redo,
  })

  return {
    cube,
    history,
    historyPointer: computed(() => historyPointer.value),
    rotateFn,
    addToHistory,
    undo,
    redo,
  }
}

export function useCube(): CubeContext {
  const context = inject<CubeContext>(cubeContextKey)
  if (!context) {
    throw new Error('useCube() is called without provider.')
  }
  return context
}
