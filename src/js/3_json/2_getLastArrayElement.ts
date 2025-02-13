import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';

// type ArrayElement = number | string | boolean | null | undefined;
type ArrayElement = any;

type GetLastArrayElementReturn = -1 | ArrayElement;

export const getLastArrayElement = (array: ArrayElement[]): GetLastArrayElementReturn => {
  if (isArray(array)) {
    return array[array.length - 1];
  } else {
    return -1;
  }
};

const getLastArrayElement_tests: Test<GetLastArrayElementReturn, GetLastArrayElementReturn>[] = [
  {
    name: 'if array is empty returns -1',
    expected: -1,
    actual: getLastArrayElement([])
  },
  {
    name: 'returns last element of numbers array',
    expected: 3,
    actual: getLastArrayElement([1, 2, 3])
  },
  {
    name: 'returns last element of strings array',
    expected: 'c',
    actual: getLastArrayElement(['a', 'b', 'c'])
  },
  {
    name: 'returns last element of falsy array',
    expected: false,
    actual: getLastArrayElement([undefined, null, 0, false])
  },
  {
    name: 'returns last element of truthy array',
    expected: true,
    actual: getLastArrayElement([1, true])
  }
];
runTests({ name: 'getLastArrayElement', tests: getLastArrayElement_tests });

interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function (this: ArrayElement[]): GetLastArrayElementReturn {
  return getLastArrayElement(this);
};

const arrayPrototypeLast_tests: Test<GetLastArrayElementReturn, GetLastArrayElementReturn>[] = [
  {
    name: 'array.prototype.last works the same as getLastArrayElement',
    expected: 3,
    actual: [1, 2, 3].last()
  }
];
runTests({ name: 'arrayPrototypeLast', tests: arrayPrototypeLast_tests });
