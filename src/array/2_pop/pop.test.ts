import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { pop } from './pop.ts';

const array_0 = [...ARRAYS.numbers];
const array_1 = [...ARRAYS.numbers];

const poppedNumber_0 = array_0.pop();
const poppedNumber_1 = pop<number>({ array: array_1 });

export const popTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: [],
    actual: pop<string>({ array: ARRAYS.empty })
  },
  {
    name: 'removes last item of array, returns this item',
    expected: poppedNumber_0,
    actual: poppedNumber_1
  },
  {
    name: 'removes last item of array, mutates array',
    expected: array_0,
    actual: array_1
  }
];
