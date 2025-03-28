import { MyArray } from '@src/array/MyArray.ts';
import { type Test, type TestResult } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';

const testIsArray = (value: unknown): TestResult => {
  return {
    expected: Array.isArray(value),
    actual: MyArray.isArray(value)
  };
};

export const testsOfIsArray: Test[] = [
  // false
  {
    name: 'undefined | false',
    ...testIsArray(VALUES.undefined)
  },
  {
    name: 'null | false',
    ...testIsArray(VALUES.null)
  },
  {
    name: 'string | false',
    ...testIsArray(VALUES.string)
  },
  {
    name: 'regularObject | false',
    ...testIsArray(VALUES.regularObject)
  },
  {
    name: 'arrayLikeObject | false',
    ...testIsArray(VALUES.arrayLikeObject)
  },
  {
    name: 'numbersSet | false',
    ...testIsArray(VALUES.numbersSet)
  },
  {
    name: 'numbersMap | false',
    ...testIsArray(VALUES.numbersMap)
  },
  // true
  {
    name: 'emptyArray | true',
    ...testIsArray(VALUES.emptyArray)
  },
  {
    name: 'numbersArray | true',
    ...testIsArray(VALUES.numbersArray)
  }
];
