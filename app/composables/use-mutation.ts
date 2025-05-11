export function useMutation<
  ArgsT extends unknown[] = unknown[],
  ReturnT = unknown,
  ErrorT = unknown,
>(mutatorFunction: (...args: ArgsT) => Promise<ReturnT>) {
  const status = ref<AsyncDataRequestStatus>('idle')
  const error = ref<ErrorT | undefined>(undefined)
  const mutate = async (...args: ArgsT) => {
    if (status.value === 'pending') return
    status.value = 'pending'
    try {
      const data = await mutatorFunction(...args)
      status.value = 'success'
      error.value = undefined
      return data
    } catch (e) {
      status.value = 'error'
      error.value = e
    }
  }

  return { status, error, mutate }
}
