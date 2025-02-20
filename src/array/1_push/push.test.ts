import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { push } from './push.ts';

const array_0 = [...ARRAYS.empty];
const array_1 = [...ARRAYS.empty];

const newArrayLength_0 = array_0.push('a');
const newArrayLength_1 = push<string>({ array: array_1, newArrayItem: 'a' });

export const pushTests: Test[] = [
  {
    name: 'adds new item to end of array, returns new array length',
    expected: newArrayLength_0,
    actual: newArrayLength_1
  },
  {
    name: 'adds new item to end of array, mutates array',
    expected: array_0,
    actual: array_1
  }
];
