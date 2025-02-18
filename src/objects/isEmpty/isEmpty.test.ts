import { type Test } from '@src/utils/log.ts';
import { isEmpty } from './isEmpty.ts';

export const isEmptyTests: Test[] = [
  {
    name: 'true if array is empty',
    expected: true,
    actual: isEmpty([])
  },
  {
    name: 'false if array is full',
    expected: false,
    actual: isEmpty([0, 1, 2])
  },
  {
    name: 'true if object is empty',
    expected: true,
    actual: isEmpty({})
  },
  {
    name: 'false if object is full',
    expected: false,
    actual: isEmpty({
      keyA: 'valueA'
    })
  },
  {
    name: 'false if object has length property { length: 2 }',
    expected: false,
    actual: isEmpty({
      length: 2
    })
  }
];
