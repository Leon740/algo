import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';

const arrayExpected = new Array();
const arrayActual = new MyArray<number>();

export const testsOfPush: Test[] = [
  {
    name: 'adds items to end of empty array, returns new array length',
    expected: arrayExpected.push(0, 1),
    actual: arrayActual.push([0, 1])
  },
  {
    name: 'adds items to the end of array, returns new array length',
    expected: arrayExpected.push(2, 3),
    actual: arrayActual.push([2, 3])
  },
  {
    name: 'mutates array after push',
    expected: arrayExpected,
    actual: arrayActual.store
  }
];
