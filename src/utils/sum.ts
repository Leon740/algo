import { runTests, type Test } from '@src/utils/log1.ts';

export const sum = (a: number = 0, b: number = 0): number => {
  return a + b;
};

const sum_tests: Test<number, number>[] = [
  {
    name: 'returns a if no b',
    expected: 3,
    actual: sum(3, undefined)
  },
  {
    name: 'returns b if no a',
    expected: 5,
    actual: sum(undefined, 5)
  },
  {
    name: 'returns 0 if no a and no b',
    expected: 0,
    actual: sum()
  },
  {
    name: 'returns sum if a and b',
    expected: 8,
    actual: sum(3, 5)
  }
];

runTests({
  name: 'sum',
  tests: sum_tests
});
