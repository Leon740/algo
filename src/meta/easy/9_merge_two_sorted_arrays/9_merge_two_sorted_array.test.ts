import { Test } from '@src/utils/log.ts';
import { mergeTwoSortedArrays } from './9_merge_two_sorted_array.ts';

export const mergeTwoSortedArraysTests: Test[] = [
  {
    name: 'returns sorted array {[ 1, 2, 2, 3, 5, 6 ]}',
    expected: [1, 2, 2, 3, 5, 6],
    actual: mergeTwoSortedArrays({ array0: [1, 2, 3, 0, 0, 0], m: 3, array1: [2, 5, 6], n: 3 })
  }
];
