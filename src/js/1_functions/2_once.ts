import { log } from '@src/utils/deprecated_log.ts';

export function onceModule() {
  console.group('sum');

  const sum = (...args: number[]): number => {
    if (!args?.length) return 0;

    let sumResult = 0;

    for (let i = 0; i < args.length; i++) {
      sumResult += args[i];
    }

    return sumResult;
  };

  const callSumWithNoArgs = sum();
  log(callSumWithNoArgs, callSumWithNoArgs === 0, 'if args are not provided return 0');

  const callSumProperly = sum(1, 2, 3, 4, 5);
  log(callSumProperly, callSumProperly === 15, 'call sum properly');

  console.groupEnd();
  console.group('multiply');

  const multiply = (...args: number[]): number => {
    if (!args?.length) return 0;

    let multiplyResult = 1;

    for (let i = 0; i < args.length; i++) {
      multiplyResult *= args[i];
    }

    return multiplyResult;
  };

  const callMultiplyWithNoArgs = multiply();
  log(callMultiplyWithNoArgs, callMultiplyWithNoArgs === 1, 'if args are not provided return 1');

  const callMultiplyProperly = multiply(1, 2, 3, 4, 5);
  log(callMultiplyProperly, callMultiplyProperly === 120, 'call multiply properly');

  console.groupEnd();
  console.group('once');

  const once = <T extends (...args: any[]) => any>(
    fn: T
  ): ((...args: Parameters<T>) => ReturnType<T> | undefined) => {
    if (!fn) return undefined as any;

    let isCalled = false;

    return (...args: Parameters<T>): ReturnType<T> | undefined => {
      if (!isCalled) {
        isCalled = true;
        return fn(...args);
      }
      return undefined;
    };
  };

  const callOnceWithNoArgs = once();
  log(
    callOnceWithNoArgs,
    callOnceWithNoArgs === undefined,
    'if args are not provided return undefined'
  );

  const callOnceSum = once(sum);
  const callSum1 = callOnceSum(1, 2, 3, 4, 5);
  const callSum2 = callOnceSum(6, 7, 8);
  log(callSum1, callSum1 === 15, 'call sum once');
  log(callSum2, callSum2 === undefined, 'call sum twice');

  console.groupEnd();
}
