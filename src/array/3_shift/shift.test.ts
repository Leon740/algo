import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { shift } from './shift.ts';

const array_0 = [...ARRAYS.numbers];
const array_1 = [...ARRAYS.numbers];

const shiftedNumber_0 = array_0.shift();
const shiftedNumber_1 = shift<number>({ array: array_1 });

export const shiftTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: [],
    actual: shift<string>({ array: ARRAYS.empty })
  },
  {
    name: 'removes first item of array, returns this item',
    expected: shiftedNumber_0,
    actual: shiftedNumber_1
  },
  {
    name: 'removes first item of array, mutates array',
    expected: array_0,
    actual: array_1
  }
];
