import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { unshift } from './unshift.ts';

const array_0 = [...ARRAYS.empty];
const array_1 = [...ARRAYS.empty];

const newArrayLength_0 = array_0.unshift('a');
const newArrayLength_1 = unshift<string>({ array: array_1, newArrayItem: 'a' });

unshift<number>({ array: ARRAYS.numbers, newArrayItem: -1 });

export const unshiftTests: Test[] = [
  {
    name: 'adds new item to start of array, returns new array length',
    expected: newArrayLength_0,
    actual: newArrayLength_1
  },
  {
    name: 'adds new item to start of array, mutates array',
    expected: array_0,
    actual: array_1
  },
  {
    name: 'adds new item',
    expected: [-1, 0, 1, 2, 3],
    actual: ARRAYS.numbers
  }
];
