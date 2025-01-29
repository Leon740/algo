import { log } from '@src/utils/log.ts';

export function js_2() {
  const ARRAY = [1, 2, 3, 4];

  // ARRAY.reduce((accumulator, currentValue, currentIndex) => {
  //   console.log('accumulator = ', accumulator);
  //   console.log('currentValue = ', currentValue);
  //   console.log('currentIndex = ', currentIndex);
  //   return accumulator;
  // }, ARRAY);

  console.group('sum');

  const sum = (a?: number = 0, b?: number = 0): number => {
    return a + b;
  };

  const callSumWithNoArgs = sum();
  log(callSumWithNoArgs, callSumWithNoArgs === 0, 'if args are not provided return 0');

  const callSumWithNoA = sum(undefined, 2);
  log(callSumWithNoA, callSumWithNoA === 2, 'if A is not provided return B');

  const callSumWithNoB = sum(2, undefined);
  log(callSumWithNoB, callSumWithNoB === 2, 'if B is not provided return A');

  const callSumAppropriately = sum(2, 2);
  log(callSumAppropriately, callSumAppropriately === 4, 'if A and B provided return A + B');

  console.groupEnd();

  console.group('reduce');

  const reduce = (
    array: number[] = [],
    callback: (previousValue: number, currentValue: number) => number,
    initialValue: number = 0
  ): number => {
    if (!array?.length || !callback) return initialValue;

    let accumulator = initialValue;

    for (let i = 0; i < array.length; i++) {
      accumulator = callback(accumulator, array[i]);
    }

    return accumulator;
  };

  const callReduceWithNoArgs = reduce();
  log(callReduceWithNoArgs, callReduceWithNoArgs === 0, 'if args are not provided return 0');

  const callReduceWithInitialValueOnly = reduce(undefined, undefined, 2);
  log(
    callReduceWithInitialValueOnly,
    callReduceWithInitialValueOnly === 2,
    'if only initialValue provided return it'
  );

  const callReduceProperly = reduce(ARRAY, sum, 0);
  log(callReduceProperly, callReduceProperly === 10, 'calc array items sum');

  console.groupEnd();
}
