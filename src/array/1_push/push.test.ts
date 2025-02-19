import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { push } from './push.ts';

const newArrayLength = push<string>(ARRAYS.empty, 'a');

export const pushTests: Test[] = [
  {
    name: 'adds new item to end of array, returns new array length',
    expected: 1,
    actual: newArrayLength
  },
  {
    name: 'adds new item to end of array, mutates array',
    expected: ['a'],
    actual: ARRAYS.empty
  }
];
