import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { pop } from './pop.ts';

const poppedNumber = pop<number>(ARRAYS.numbers);

export const popTests: Test[] = [
  {
    name: 'if array is empty, does not remove last item, returns empty array',
    expected: [],
    actual: pop<string>(ARRAYS.empty)
  },
  {
    name: 'removes last item of array, returns this item',
    expected: 3,
    actual: poppedNumber
  },
  {
    name: 'removes last item of array, mutates array',
    expected: [0, 1, 2],
    actual: ARRAYS.numbers
  }
];
