import { runTests, type Test } from '@src/utils/log1.ts';

export const multiply = (number: number = 1): ((amount?: number) => number) => {
  return (amount: number = 1) => {
    return number * amount;
  };
};

const multiply_tests: Test<number, number>[] = [
  {
    name: 'returns 1 if no numbers passed to',
    expected: 1,
    actual: multiply()()
  },
  {
    name: 'returns multiply result',
    expected: 4,
    actual: multiply(2)(2)
  }
];

runTests({
  name: 'multiply',
  tests: multiply_tests
});
