import type { InferInput } from 'valibot'

export type CubeForm = InferInput<typeof cubeSchema>

export type Cube = {
  id: number
  createdAt: string
  updatedAt: string
} & InferInput<typeof cubeSchema>
