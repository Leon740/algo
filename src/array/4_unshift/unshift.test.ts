import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { unshift } from './unshift.ts';

const newArrayLength = unshift<number>(ARRAYS.numbers, -1);

export const unshiftTests: Test[] = [
  {
    name: 'adds new item to start of array, returns new Length',
    expected: 5,
    actual: newArrayLength
  },
  {
    name: 'adds new item to start of array, mutates array',
    expected: [-1, 0, 1, 2, 3],
    actual: ARRAYS.numbers
  }
];
