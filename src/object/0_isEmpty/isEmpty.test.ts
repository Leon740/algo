import { ARRAYS, OBJECTS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { isEmpty } from './isEmpty.ts';

export const isEmptyTests: Test[] = [
  {
    name: 'true if array is empty',
    expected: true,
    actual: isEmpty({ object: ARRAYS.empty })
  },
  {
    name: 'false if array is full',
    expected: false,
    actual: isEmpty({ object: ARRAYS.numbers })
  },
  {
    name: 'true if object is empty',
    expected: true,
    actual: isEmpty({ object: OBJECTS.empty })
  },
  {
    name: 'false if object is full',
    expected: false,
    actual: isEmpty({ object: OBJECTS.nested })
  },
  {
    name: 'false if object has length property { length: 2 }',
    expected: false,
    actual: isEmpty({
      object: {
        length: 2
      }
    })
  }
];
