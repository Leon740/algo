import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';

const arrayExpected = new Array();
const arrayActual = new MyArray<number>();

export const testsOfUnshift: Test[] = [
  {
    name: 'adds items to start of empty array, returns new array length',
    expected: arrayExpected.unshift(1, 2),
    actual: arrayActual.unshift([1, 2])
  },
  {
    name: 'adds items to start of array, returns new array length',
    expected: arrayExpected.unshift(-1, 0),
    actual: arrayActual.unshift([-1, 0])
  },
  {
    name: 'mutates array after unshift',
    expected: arrayExpected,
    actual: arrayActual.store
  }
];
