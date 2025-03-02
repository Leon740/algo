import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { unshift } from './unshift.ts';

const arrayExpected = [...ARRAYS.empty];
const arrayActual = [...ARRAYS.empty];

const newArrayLengthExpected = arrayExpected.unshift('a');
const newArrayLengthActual = unshift<string>({ array: arrayActual, newItem: 'a' });

unshift<number>({ array: ARRAYS.numbers, newItem: -1 });

export const unshiftTests: Test[] = [
  {
    name: 'adds new item to start of array, returns new array length',
    expected: newArrayLengthExpected,
    actual: newArrayLengthActual
  },
  {
    name: 'adds new item to start of array, mutates array',
    expected: arrayExpected,
    actual: arrayActual
  },
  {
    name: 'adds new item',
    expected: [-1, 0, 1, 2, 3],
    actual: ARRAYS.numbers
  }
];
