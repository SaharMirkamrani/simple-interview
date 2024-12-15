import { removeDuplicate } from "../../questions/set2/removeDuplicate"
import { expect, test } from 'vitest'

test('Should remove duplicates', () => {
  const res = removeDuplicate([1,1,2,3,4])
  expect(res).toHaveLength(4)
  expect(res).toContain(1)
  expect(res).toContain(2)
  expect(res).toContain(3)
  expect(res).toContain(4)
})

test('Should remove duplicates', () => {
  const res = removeDuplicate([6,1,2,3,4,5,6])
  expect(res).toHaveLength(6)
  expect(res).toContain(1)
  expect(res).toContain(2)
  expect(res).toContain(3)
  expect(res).toContain(4)
  expect(res).toContain(5)
  expect(res).toContain(6)
})

