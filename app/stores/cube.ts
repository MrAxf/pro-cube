export const useCubeStore = defineStore('cube', () => {
  const cube = ref<Cube | null>(null)

  return {
    cube,
  }
})
