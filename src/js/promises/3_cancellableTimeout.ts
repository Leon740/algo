import { log } from '@src/utils/log.ts';

export function cancellableModule() {
  const sum = (a?: number = 0, b?: number = 0): number => {
    const isA = typeof a === 'number';
    const isB = typeof b === 'number';

    if (!isA && !isB) return 0;

    if (isA && !isB) return a;

    if (!isA && isB) return b;

    const sum = a + b;
    console.log(sum);
    return a + b;
  };

  const call_sum_withNoArgs = sum();
  log(call_sum_withNoArgs, call_sum_withNoArgs === 0, 'if args are not provided return 0');

  const call_sum_withInvalidTypeArgs = sum('3', '5');
  log(
    call_sum_withInvalidTypeArgs,
    call_sum_withInvalidTypeArgs === 0,
    'if args are invalid type return 0'
  );

  const firstArg = 3;
  const call_sum_withFirstArg = sum(firstArg, 0);
  log(
    call_sum_withFirstArg,
    call_sum_withFirstArg === firstArg,
    'if first arg is and second is not return firstArg'
  );

  const secondArg = 5;
  const call_sum_withSecondArg = sum(undefined, secondArg);
  log(
    call_sum_withSecondArg,
    call_sum_withSecondArg === secondArg,
    'if first arg is not and second is return secondArg'
  );

  const call_sum_withBothArgs = sum(firstArg, secondArg);
  log(
    call_sum_withBothArgs,
    call_sum_withBothArgs === firstArg + secondArg,
    'if both args are return sum'
  );

  const cancellable = (
    fn: (...args: number[]) => unknown,
    args: number[],
    timeout?: number = 0
  ) => {
    const timeoutId = setTimeout(() => {
      fn(...args);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const cancellableSum = cancellable(sum, [7, 4], 2000);
  setTimeout(cancellableSum, 1000);
  // setTimeout(cancellableSum, 3000);
}
