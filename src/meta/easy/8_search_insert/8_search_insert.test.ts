import { Test } from '@src/utils/log.ts';
import { getInsertIndex } from './8_search_insert.ts';

export const getInsertIndexTests: Test[] = [
  {
    name: 'if array is empty, inserts 0 into array and returns 0 index',
    expected: 0,
    actual: getInsertIndex()
  },
  {
    name: 'if number {5} is in array {[1, 3, 5, 7]}, returns its index {2}',
    expected: 2,
    actual: getInsertIndex({ number: 5, array: [1, 3, 5, 7] })
  },
  {
    name: 'if number {2} is not in array {[1, 3, 5, 7]}, inserts it in order and returns its index {1}',
    expected: 1,
    actual: getInsertIndex({ number: 2, array: [1, 3, 5, 7] })
  },
  {
    name: 'if number {8} is not in array {[1, 3, 5, 7]}, inserts it in the end and returns its index {4}',
    expected: 4,
    actual: getInsertIndex({ number: 8, array: [1, 3, 5, 7] })
  }
];
