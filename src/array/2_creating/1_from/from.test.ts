import { MyArray } from '@src/array/MyArray.ts';
import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

export const testsOfFrom: Test[] = [
  // Error
  // {
  //   name: 'undefined | Error',
  //   expected: Array.from(VALUES.undefined),
  //   actual: MyArray.from({value: VALUES.undefined})
  // },
  // {
  //   name: 'null | Error',
  //   expected: Array.from(VALUES.null),
  //   actual: MyArray.from({value: VALUES.null})
  // }
  {
    name: 'regularObject | Error',
    expected: Array.from(VALUES.regularObject),
    actual: MyArray.from({ value: VALUES.regularObject })
  },
  {
    name: 'emptyFunction | Error',
    expected: Array.from(VALUES.emptyFunction),
    actual: MyArray.from({ value: VALUES.emptyFunction })
  },
  // []
  {
    name: 'emptyString | []',
    expected: Array.from(VALUES.emptyString),
    actual: MyArray.from({ value: VALUES.emptyString })
  },
  {
    name: 'string | string[]',
    expected: Array.from(VALUES.string),
    actual: MyArray.from({ value: VALUES.string })
  },
  {
    name: 'emptyArray | []',
    expected: Array.from(VALUES.emptyArray),
    actual: MyArray.from({ value: VALUES.emptyArray })
  },
  {
    name: 'numbersArray | number[]',
    expected: Array.from(VALUES.numbersArray),
    actual: MyArray.from({ value: VALUES.numbersArray })
  },
  {
    name: 'arrayLikeObject | number[]',
    expected: Array.from(VALUES.arrayLikeObject),
    actual: MyArray.from({ value: VALUES.arrayLikeObject })
  },
  {
    name: 'numbersSet | number[]',
    expected: Array.from(VALUES.numbersSet),
    actual: MyArray.from({ value: VALUES.numbersSet })
  },
  {
    name: 'numbersMap | number[]',
    expected: Array.from(VALUES.numbersMap),
    actual: MyArray.from({ value: VALUES.numbersMap })
  },
  // mapFn
  {
    name: 'doubledNumbersArray',
    expected: Array.from(VALUES.numbersArray, (number) => number * 2),
    actual: MyArray.from<number>({
      value: VALUES.numbersArray,
      mapFn: ({ item: number }) => number * 2
    })
  },
  {
    name: 'numbers from 0 to 4',
    expected: Array.from({ length: 5 }, (_, index) => index + 1),
    actual: MyArray.from<number>({
      value: { 0: 0, length: 5 },
      mapFn: ({ _item, index }) => index + 1
    })
  },
  {
    name: 'audi[]',
    expected: Array.from(['A6', 'Q8'], (make) => `Audi ${make}`),
    actual: MyArray.from<string>({ value: ['A6', 'Q8'], mapFn: ({ item: make }) => `Audi ${make}` })
  }
];
