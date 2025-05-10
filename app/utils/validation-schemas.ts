import {
  enum as _enum,
  hexColor,
  maxLength,
  minLength,
  object,
  pipe,
  string,
} from 'valibot'

enum CubeSize {
  '2x2' = 2,
  '3x3' = 3,
  '4x4' = 4,
  '5x5' = 5,
}

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
