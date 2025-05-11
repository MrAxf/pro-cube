import {
  enum as _enum,
  hexColor,
  integer,
  maxLength,
  minLength,
  minValue,
  number,
  object,
  optional,
  pipe,
  string,
  toMaxValue,
  toMinValue,
  transform,
  trim,
  union,
} from 'valibot'

enum CubeSize {
  '2x2' = 2,
  '3x3' = 3,
  '4x4' = 4,
  '5x5' = 5,
}

const numberOrString = union([
  number(),
  pipe(
    string(),
    trim(),
    transform((input) => Number(input))
  ),
])

export const idParameterSchema = object({
  id: pipe(numberOrString, integer(), minValue(1)),
})

export const paginationSchema = object({
  page: optional(pipe(numberOrString, integer(), toMinValue(1)), 1),
  pageSize: optional(
    pipe(numberOrString, integer(), toMinValue(10), toMaxValue(50)),
    10
  ),
})

export const cubeSchema = object({
  name: pipe(string(), minLength(3), maxLength(300)),
  size: _enum(CubeSize),
  baseColor: pipe(string(), hexColor()),
  upColor: pipe(string(), hexColor()),
  downColor: pipe(string(), hexColor()),
  leftColor: pipe(string(), hexColor()),
  rightColor: pipe(string(), hexColor()),
  frontColor: pipe(string(), hexColor()),
  backColor: pipe(string(), hexColor()),
})
