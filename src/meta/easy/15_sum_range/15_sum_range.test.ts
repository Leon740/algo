import { Test } from '@src/utils/log.ts';
import { NumArray } from './15_sum_range.ts';

export const numArrayTests: Test[] = [
  {
    name: 'returns sum {1} of nums in array {[-2, 0, 3, -5, 2, -1]} from left index {0} to right index {2}',
    expected: 1,
    actual: new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 2)
  }
];
