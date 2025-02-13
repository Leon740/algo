import { runTests, type Test } from '@src/utils/log1.ts';

type IsEmptyObjectReturn = null | boolean;

export const isEmptyObject = (objectToCheck?: object | any[] = {}): null | boolean => {
  if (!objectToCheck || typeof objectToCheck !== 'object') {
    return null;
  }

  const isArrayLength = objectToCheck?.length;

  if (isArrayLength) {
    const arrayIsEmpty = isArrayLength === 0;
    return arrayIsEmpty;
  } else {
    const objectIsEmpty = Object.keys(objectToCheck).length === 0;
    return objectIsEmpty;
  }
};

const isEmptyObject_tests: Test<null | string | boolean, IsEmptyObjectReturn>[] = [
  {
    name: 'empty string is not empty object',
    expected: null,
    actual: isEmptyObject('')
  },
  {
    name: 'empty array is empty object',
    expected: true,
    actual: isEmptyObject([])
  },
  {
    name: 'full array is not empty object',
    expected: false,
    actual: isEmptyObject([0, 1, null, false, undefined, 2, 3])
  },
  {
    name: 'empty object is empty object',
    expected: true,
    actual: isEmptyObject({})
  },
  {
    name: 'full object is not empty object',
    expected: false,
    actual: isEmptyObject({
      keyA: 'valueA',
      keyB: 'valueB'
    })
  }
];

runTests({
  name: 'isEmptyObject',
  tests: isEmptyObject_tests
});
