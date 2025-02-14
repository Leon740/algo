import { getPromiseResult } from '@src/js/2_promises/1_getPromiseResult.ts';
import { PROMISES } from '@src/js/2_promises/promises.ts';
import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';

// Promise.allSettled([
//   PROMISES.instant,
//   PROMISES.medium,
//   PROMISES.slow,
//   PROMISES.instantNumber,
//   PROMISES.rejected
// ])
//   .then((results) => console.log(results))
//   .catch((error) => {
//     console.error(error);
//   });

// [
//   { status: 'fulfilled', value: 'instant' },
//   { status: 'fulfilled', value: 'medium' },
//   { status: 'fulfilled', value: 'slow' },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'Rejected' }
// ]

interface PromiseResult {
  status: 'fulfilled' | 'rejected';
  value?: unknown;
  reason?: string;
}

export const promiseAllSettled = async <T>(
  promises: Promise<T>[]
): Promise<false | PromiseResult[]> => {
  const isPromises = isArray(promises);

  if (!isPromises) {
    return false;
  }

  const promisesResults: PromiseResult[] = [];

  for (const currentPromise of promises) {
    const currentPromiseResult = await getPromiseResult<T>(currentPromise);
    const currentPromiseRejected = currentPromiseResult === 'Rejected';
    const currentPromiseInfo: PromiseResult = currentPromiseRejected
      ? {
          status: 'rejected',
          reason: currentPromiseResult as string
        }
      : {
          status: 'fulfilled',
          value: currentPromiseResult
        };
    promisesResults.push(currentPromiseInfo);
  }

  return promisesResults;
};

(async () => {
  const promiseAllSettled_tests: Test<PromiseResult[], PromiseResult[]>[] = [
    {
      name: 'returns array with every promise status and value',
      expected: [
        { status: 'fulfilled', value: 'instant' },
        { status: 'fulfilled', value: 'medium' },
        { status: 'fulfilled', value: 'slow' },
        { status: 'fulfilled', value: 42 },
        { status: 'rejected', reason: 'Rejected' }
      ],
      actual: await promiseAllSettled([
        PROMISES.instant,
        PROMISES.medium,
        PROMISES.slow,
        PROMISES.instantNumber,
        PROMISES.rejected
      ])
    }
  ];

  runTests({
    name: 'promiseAllSettled',
    tests: promiseAllSettled_tests
  });
})();
