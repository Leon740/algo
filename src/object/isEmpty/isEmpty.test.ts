import { ARRAYS, OBJECTS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { isEmpty } from './isEmpty.ts';

export const isEmptyTests: Test[] = [
  {
    name: 'true if array is empty',
    expected: true,
    actual: isEmpty(ARRAYS.empty)
  },
  {
    name: 'false if array is full',
    expected: false,
    actual: isEmpty(ARRAYS.numbers)
  },
  {
    name: 'true if object is empty',
    expected: true,
    actual: isEmpty(OBJECTS.empty)
  },
  {
    name: 'false if object is full',
    expected: false,
    actual: isEmpty(OBJECTS.nested)
  },
  {
    name: 'false if object has length property { length: 2 }',
    expected: false,
    actual: isEmpty({
      length: 2
    })
  }
];
