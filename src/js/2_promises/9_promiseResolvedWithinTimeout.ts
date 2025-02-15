import { runTests, type Test } from '@src/utils/log1.ts';

const TIMEOUTS: Record<'fast' | 'slow', number> = {
  fast: 2000,
  slow: 4000
};

const PROMISES: Record<'fast' | 'slow', () => Promise<string>> = {
  fast: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Fast Resolved');
      }, TIMEOUTS.fast);
    });
  },
  slow: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Slow Resolved');
      }, TIMEOUTS.slow);
    });
  }
};

type PromiseResolvedWithinTimeoutReturn = string | 'Rejected';

export const promiseResolvedWithinTimeout = async ({
  promise,
  timeoutMs = 0
}: {
  promise: Promise<string>;
  timeoutMs: number;
}): Promise<PromiseResolvedWithinTimeoutReturn> => {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject('Rejected');
    }, timeoutMs);
  });

  try {
    const result = await Promise.race([promise, timeoutPromise]);
    console.log('✅ Function resolved in time,', result);
    return result;
  } catch (error) {
    console.error('❌', error);
    return error as string;
  }
};

const promiseResolvedWithinTimeout_tests: Test<
  PromiseResolvedWithinTimeoutReturn,
  PromiseResolvedWithinTimeoutReturn
>[] = [
  {
    name: 'fast resolved within timeout',
    expected: 'Fast Resolved',
    actual: await promiseResolvedWithinTimeout({
      promise: PROMISES.fast(),
      timeoutMs: TIMEOUTS.fast
    })
  },
  {
    name: 'fast did not resolve within timeout',
    expected: 'Rejected',
    actual: await promiseResolvedWithinTimeout({
      promise: PROMISES.fast(),
      timeoutMs: TIMEOUTS.fast - 1000
    })
  },
  {
    name: 'slow resolved within timeout',
    expected: 'Slow Resolved',
    actual: await promiseResolvedWithinTimeout({
      promise: PROMISES.slow(),
      timeoutMs: TIMEOUTS.slow
    })
  },
  {
    name: 'slow did not resolve within timeout',
    expected: 'Rejected',
    actual: await promiseResolvedWithinTimeout({
      promise: PROMISES.slow(),
      timeoutMs: TIMEOUTS.slow - 1000
    })
  }
];

runTests({
  name: 'promiseResolvedWithinTimeout',
  tests: promiseResolvedWithinTimeout_tests
});
