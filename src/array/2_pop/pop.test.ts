import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { pop } from './pop.ts';

const arrayExpected = [...ARRAYS.numbers];
const arrayActual = [...ARRAYS.numbers];

const poppedNumberExpected = arrayExpected.pop();
const poppedNumberActual = pop<number>({ array: arrayActual });

export const popTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: [],
    actual: pop<string>({ array: ARRAYS.empty })
  },
  {
    name: 'removes last item of array, returns this item',
    expected: poppedNumberExpected,
    actual: poppedNumberActual
  },
  {
    name: 'removes last item of array, mutates array',
    expected: arrayExpected,
    actual: arrayActual
  }
];
