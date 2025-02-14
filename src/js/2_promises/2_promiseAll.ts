import { getPromiseResult } from '@src/js/2_promises/1_getPromiseResult.ts';
import { PROMISES } from '@src/js/2_promises/promises.ts';
import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';

// Promise.all([PROMISES.instant, PROMISES.medium, PROMISES.slow, PROMISES.instantNumber])
//   .then((results) => console.log(results))
//   .catch((error) => {
//     console.error(error);
//   });
// [ 'instant', 'medium', 'slow', 42 ]

// Promise.all([
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
// Rejected

export const promiseAll = async <T>(promises: Promise<T>[]): Promise<false | T[] | string> => {
  const isPromises = isArray(promises);

  if (!isPromises) {
    return false;
  }

  const promisesResults: T[] = [];

  for (const currentPromise of promises) {
    const currentPromiseResult = await getPromiseResult<T>(currentPromise);

    if (currentPromiseResult === 'Rejected') {
      return currentPromiseResult as string;
    } else {
      promisesResults.push(currentPromiseResult as T);
    }
  }

  return promisesResults;
};

(async () => {
  type PromiseValue = string | string[] | number;

  const promiseAll_tests: Test<PromiseValue, PromiseValue>[] = [
    {
      name: 'resolves all promises, returns result of all promises',
      expected: ['instant', 'medium', 'slow', 42],
      actual: await promiseAll([
        PROMISES.instant,
        PROMISES.medium,
        PROMISES.slow,
        PROMISES.instantNumber
      ])
    },
    {
      name: 'rejects if one of the promises rejects',
      expected: 'Rejected',
      actual: await promiseAll([
        PROMISES.instant,
        PROMISES.medium,
        PROMISES.slow,
        PROMISES.instantNumber,
        PROMISES.rejected
      ])
    }
  ];

  runTests({
    name: 'promiseAll',
    tests: promiseAll_tests
  });
})();
