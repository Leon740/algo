import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

export const testsOfIsIterable: Test[] = [
  // false
  {
    name: 'undefined | false',
    expected: false,
    actual: MyArray.isIterable(VALUES.undefined)
  },
  {
    name: 'null | false',
    expected: false,
    actual: MyArray.isIterable(VALUES.null)
  },
  {
    name: 'emptyString | false',
    expected: false,
    actual: MyArray.isIterable(VALUES.emptyString)
  },
  {
    name: 'regularObject | false',
    expected: false,
    actual: MyArray.isIterable(VALUES.regularObject)
  },
  {
    name: 'arrayLikeObject | false',
    expected: false,
    actual: MyArray.isIterable(VALUES.arrayLikeObject)
  },
  // true
  {
    name: 'string | true',
    expected: true,
    actual: MyArray.isIterable(VALUES.string)
  },
  {
    name: 'numbersArray | true',
    expected: true,
    actual: MyArray.isIterable(VALUES.numbersArray)
  },
  {
    name: 'numbersSet | true',
    expected: true,
    actual: MyArray.isIterable(VALUES.numbersSet)
  },
  {
    name: 'numbersMap | true',
    expected: true,
    actual: MyArray.isIterable(VALUES.numbersMap)
  }
];
