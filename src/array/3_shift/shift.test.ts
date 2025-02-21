import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { shift } from './shift.ts';

const arrayExpected = [...ARRAYS.numbers];
const arrayActual = [...ARRAYS.numbers];

const shiftedNumberExpected = arrayExpected.shift();
const shiftedNumberActual = shift<number>({ array: arrayActual });

export const shiftTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: [],
    actual: shift<string>({ array: ARRAYS.empty })
  },
  {
    name: 'removes first item of array, returns this item',
    expected: shiftedNumberExpected,
    actual: shiftedNumberActual
  },
  {
    name: 'removes first item of array, mutates array',
    expected: arrayExpected,
    actual: arrayActual
  }
];
