import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { push } from './push.ts';

const arrayExpected = [...ARRAYS.empty];
const arrayActual = [...ARRAYS.empty];

const newArrayLengthExpected = arrayExpected.push('a');
const newArrayLengthActual = push<string>({ array: arrayActual, newArrayItem: 'a' });

export const pushTests: Test[] = [
  {
    name: 'adds new item to end of array, returns new array length',
    expected: newArrayLengthExpected,
    actual: newArrayLengthActual
  },
  {
    name: 'adds new item to end of array, mutates array',
    expected: arrayExpected,
    actual: arrayActual
  }
];
