import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

const emptyArrayExpected = new Array();
const emptyArrayActual = new MyArray<number>();

const numbersArrayExpected = new Array(...VALUES.numbersArray);
const numbersArrayActual = new MyArray(VALUES.numbersArray);

export const testsOfPop: Test[] = [
  {
    name: 'if array is empty, returns undefined',
    expected: emptyArrayExpected.pop(),
    actual: emptyArrayActual.pop()
  },
  {
    name: 'removes last item from end of array, returns this item',
    expected: numbersArrayExpected.pop(),
    actual: numbersArrayActual.pop()
  },
  {
    name: 'mutates array after pop',
    expected: numbersArrayExpected,
    actual: numbersArrayActual.store
  }
];
