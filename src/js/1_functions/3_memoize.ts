// Memoize function
// if a function was called already, return it's result
// 2functions: sum, factorial

import { log } from '@src/utils/log.ts';

export function memoizeModule() {
  const isUndefined = (variable?: unknown): boolean => {
    return variable === undefined;
  };

  console.group('isUndefined');

  const call_isUndefined_WithNoArgs = isUndefined();
  log(
    call_isUndefined_WithNoArgs,
    call_isUndefined_WithNoArgs === true,
    'if arg is not provided return true'
  );

  const call_isUndefined_WithString = isUndefined('string');
  log(
    call_isUndefined_WithString,
    call_isUndefined_WithString === false,
    'if arg is a string return false'
  );

  const call_isUndefined_WithNumber = isUndefined(3);
  log(
    call_isUndefined_WithNumber,
    call_isUndefined_WithNumber === false,
    'if arg is a number return false'
  );

  console.groupEnd();

  const sum = (a?: number = 0, b?: number = 0): number => {
    if (isUndefined(a) && isUndefined(b)) return 0;

    if (isUndefined(a) && !isUndefined(b)) return b;

    if (!isUndefined(a) && isUndefined(b)) return a;

    if (typeof a === 'number' && typeof b === 'number') return a + b;

    return 0;
  };

  console.group('sum');

  const call_sum_WithNoArgs = sum();
  log(call_sum_WithNoArgs, call_sum_WithNoArgs === 0, 'if args are not provided return 0');

  const sumArg = 3;
  const call_sum_WithFirstArg = sum(sumArg);
  log(
    call_sum_WithFirstArg,
    call_sum_WithFirstArg === sumArg,
    'if first arg is and second is not provided return first'
  );

  const call_sum_WithSecondArg = sum(undefined, sumArg);
  log(
    call_sum_WithSecondArg,
    call_sum_WithSecondArg === sumArg,
    'if first arg is not and second is provided return second'
  );

  const call_sum_WithStrings = sum(sumArg.toString(), sumArg.toString());
  log(call_sum_WithStrings, call_sum_WithStrings === 0, 'if args are not type number return 0');

  const call_sum_Properly = sum(sumArg, sumArg);
  log(call_sum_Properly, call_sum_Properly === sumArg + sumArg, 'if args are provided return sum');

  console.groupEnd();

  const factorial = (n?: number = 1): false | number => {
    if (typeof n !== 'number') return false;

    if (n > 1) {
      return n * factorial(n - 1);
    } else {
      return n;
    }
  };

  console.group('factorial');

  const call_factorial_WithNoArgs = factorial();
  log(
    call_factorial_WithNoArgs,
    call_factorial_WithNoArgs === 1,
    'if args are not provided return 1'
  );

  const call_factorial_WithString = factorial('string');
  log(
    call_factorial_WithString,
    call_factorial_WithString === false,
    'if arg is not type number return false'
  );

  const call_factorial_Properly = factorial(5);
  log(call_factorial_Properly, call_factorial_Properly === 120, 'count factorial 5 = 120');

  console.groupEnd();

  const memoize = (fn?: Function) => {
    // 0) store functions in map
    // 1) if func is not in map, set it in map and create another map for it's args
    // 2) if func was called return it, if no store it and return the result
    // {
    //   sum: {
    //     '33': 6,
    //     '11': 2
    //   },
    //   factorial: {
    //     5: 120,
    //     4: 24
    //   }
    // }

    if (fn === undefined) return false;

    const allCachedFunctionsMap = new Map();

    return (...args: any[]) => {
      if (!allCachedFunctionsMap.has(fn)) {
        allCachedFunctionsMap.set(fn, new Map());
      }

      const cachedFunctionMap = allCachedFunctionsMap.get(fn);
      const cachedFunctionKey = JSON.stringify(args);

      if (cachedFunctionMap.has(cachedFunctionKey)) {
        return cachedFunctionMap.get(cachedFunctionKey);
      } else {
        const functionCallResult = fn(...args);
        cachedFunctionMap.set(cachedFunctionKey, functionCallResult);
        return functionCallResult;
      }
    };
  };

  console.group('memoize');

  const call_memoize_WithNoArgs = memoize();
  log(
    call_memoize_WithNoArgs,
    call_memoize_WithNoArgs === false,
    'if args are not provided return false'
  );

  const memoizedSum = memoize(sum);
  const call_memoizedSum_1 = memoizedSum(3, 3);
  const call_memoizedSum_2 = memoizedSum(3, 3);
  log(
    call_memoizedSum_2,
    call_memoizedSum_2 === call_memoizedSum_1 && call_memoizedSum_2 === 6,
    'memoize sum'
  );

  const memoizedFactorial = memoize(factorial);
  const call_memoizedFactorial_1 = memoizedFactorial(5);
  const call_memoizedFactorial_2 = memoizedFactorial(5);
  log(
    call_memoizedFactorial_2,
    call_memoizedFactorial_2 === call_memoizedFactorial_1 && call_memoizedFactorial_2 === 120,
    'memoize factorial'
  );

  console.groupEnd();
}
