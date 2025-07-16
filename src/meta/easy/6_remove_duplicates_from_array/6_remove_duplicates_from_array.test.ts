import { Test } from '@src/utils/log.ts';
import { removeDuplicatesFromArray } from './6_remove_duplicates_from_array.ts';

export const removeDuplicatesFromArrayTests: Test[] = [
  {
    name: 'returns -1 if array is undefined',
    expected: -1,
    actual: removeDuplicatesFromArray()
  },
  {
    name: 'returns 0 if array is empty',
    expected: 0,
    actual: removeDuplicatesFromArray([])
  },
  {
    name: 'returns 1 for single-element array',
    expected: 1,
    actual: removeDuplicatesFromArray([42])
  },
  {
    name: 'returns length if all elements are unique',
    expected: 5,
    actual: removeDuplicatesFromArray([1, 2, 3, 4, 5])
  },
  {
    name: 'returns 1 if all elements are same',
    expected: 1,
    actual: removeDuplicatesFromArray(['a', 'a', 'a', 'a'])
  },
  {
    name: 'treats numbers and strings as different types',
    expected: 2,
    actual: removeDuplicatesFromArray([1, '1', 1])
  },
  {
    name: 'returns number of unique numbers in the array and removes duplicates in place',
    expected: 3,
    actual: removeDuplicatesFromArray([1, 1, 2, 2, 3])
  },
  {
    name: 'returns number of unique strings in the array and removes duplicates in place',
    expected: 4,
    actual: removeDuplicatesFromArray(['apple', 'banana', 'orange', 'banana', 'lemon', 'orange'])
  }
];
