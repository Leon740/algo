import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

const emptyArrayExpected = new Array();
const emptyArrayActual = new MyArray<number>();

const numbersArrayExpected = new Array(...VALUES.numbersArray);
const numbersArrayActual = new MyArray(VALUES.numbersArray);

export const testsOfShift: Test[] = [
  {
    name: 'if array is empty, returns undefined',
    expected: emptyArrayExpected.shift(),
    actual: emptyArrayActual.shift()
  },
  {
    name: 'removes first item of array, returns this item',
    expected: numbersArrayExpected.shift(),
    actual: numbersArrayActual.shift()
  },
  {
    name: 'mutates array after shift',
    expected: numbersArrayExpected,
    actual: numbersArrayActual.store
  }
];
