import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';

const arrayExpected = new Array();
const arrayActual = new MyArray<number>();

export const testsOfPush: Test[] = [
  {
    name: 'adds new item to end of empty array | new array length',
    expected: arrayExpected.push(0),
    actual: arrayActual.push(0)
  },
  {
    name: 'adds one more item to the end of array | new array length',
    expected: arrayExpected.push(1),
    actual: arrayActual.push(1)
  },
  {
    name: 'mutates array after push',
    expected: arrayExpected,
    actual: arrayActual.store
  }
];
