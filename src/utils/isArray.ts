import { runTests, type Test } from './log1.ts';

type IsArrayReturn = boolean;

export const isArray = (arrayToCheck?: any[] = []): IsArrayReturn => {
  const gotArray = !!arrayToCheck;
  const arrayIsNotEmpty = arrayToCheck.length !== 0;

  return gotArray && arrayIsNotEmpty;
};

const isArray_tests: Test<IsArrayReturn, IsArrayReturn>[] = [
  {
    name: 'if array is empty return false',
    expected: false,
    actual: isArray([])
  },
  {
    name: 'if array is not empty return true',
    expected: true,
    actual: isArray([1, 2, 3])
  }
];

runTests({
  name: 'isArray',
  tests: isArray_tests
});
