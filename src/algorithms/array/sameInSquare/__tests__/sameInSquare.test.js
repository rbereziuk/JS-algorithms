import {sameInSquare, removeElement} from '../sameInSquare.js';

test('sameInSquare', () => {
  expect(sameInSquare([1,2,3], [1,4,9])).toBeTruthy()
  expect(sameInSquare([1,2,3,3], [1,4,9,3,1,9])).toBeTruthy()
})

test('removeElement', () => {
  expect(removeElement([1,2,3], 2)).toEqual([1,3])
})

