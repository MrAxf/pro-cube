import type { InferInput } from 'valibot'

export type CubeForm = InferInput<typeof cubeSchema>

export type Cube = {
  id: number
  createdAt: string
  updatedAt: string
} & InferInput<typeof cubeSchema>

export type CubeHistoryItem = {
  type: 'cube' | 'layer'
  layer: number | null
  axis: 'x' | 'y' | 'z'
  angle: number
}

export type CubeHistory = CubeHistoryItem[]
