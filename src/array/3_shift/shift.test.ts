import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { shift } from './shift.ts';

const shiftedNumber = shift<number>(ARRAYS.numbers);

export const shiftTests: Test[] = [
  {
    name: 'if array is empty, does not remove first item, returns empty array',
    expected: [],
    actual: shift<string>(ARRAYS.empty)
  },
  {
    name: 'removes first item of array, returns this item',
    expected: 0,
    actual: shiftedNumber
  },
  {
    name: 'removes first item of array, mutates array',
    expected: [1, 2, 3],
    actual: ARRAYS.numbers
  }
];
