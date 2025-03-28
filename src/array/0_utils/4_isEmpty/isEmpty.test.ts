import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

const emptyArrayExpected = new Array();
const emptyArrayActual = new MyArray<number>();

const numbersArrayExpected = new Array(...VALUES.numbersArray);
const numbersArrayActual = new MyArray(VALUES.numbersArray);

export const testsOfIsEmpty: Test[] = [
  {
    name: 'if array is empty, returns true',
    expected: emptyArrayExpected.length === 0,
    actual: MyArray.isEmpty(emptyArrayActual.store)
  },
  {
    name: 'if array is not empty, returns false',
    expected: numbersArrayExpected.length === 0,
    actual: MyArray.isEmpty(numbersArrayActual.store)
  }
];
