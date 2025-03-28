import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

export const testsOfIsArrayLike: Test[] = [
  // false
  {
    name: 'undefined | false',
    expected: false,
    actual: MyArray.isArrayLike(VALUES.undefined)
  },
  {
    name: 'null | false',
    expected: false,
    actual: MyArray.isArrayLike(VALUES.null)
  },
  {
    name: 'regularObject | false',
    expected: false,
    actual: MyArray.isArrayLike(VALUES.regularObject)
  },
  {
    name: 'emptyFunction | false',
    expected: false,
    actual: MyArray.isArrayLike(VALUES.emptyFunction)
  },
  {
    name: 'numbersSet | false',
    expected: false,
    actual: MyArray.isArrayLike(VALUES.numbersSet)
  },
  {
    name: 'numbersMap | false',
    expected: false,
    actual: MyArray.isArrayLike(VALUES.numbersMap)
  },
  // true
  {
    name: 'emptyString | true',
    expected: true,
    actual: MyArray.isArrayLike(VALUES.emptyString)
  },
  {
    name: 'string | true',
    expected: true,
    actual: MyArray.isArrayLike(VALUES.string)
  },
  {
    name: 'numbersArray | true',
    expected: true,
    actual: MyArray.isArrayLike(VALUES.numbersArray)
  },
  {
    name: 'arrayLikeObject | true',
    expected: true,
    actual: MyArray.isArrayLike(VALUES.arrayLikeObject)
  }
];
