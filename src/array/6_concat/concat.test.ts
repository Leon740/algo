import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

const arrayExpected = new Array();
const arrayActual = new MyArray<number>();

export const testsOfConcat: Test[] = [
  {
    name: 'concats 2 arrays, returns concatanated array',
    expected: arrayExpected.concat(VALUES.numbersArray),
    actual: arrayActual.concat(VALUES.numbersArray)
  },
  {
    name: 'concats 3 arrays, returns concatanated array',
    expected: arrayExpected.concat(VALUES.numbersArray, VALUES.numbersArray),
    actual: arrayActual.concat(VALUES.numbersArray, VALUES.numbersArray)
  }
];
