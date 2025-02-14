import { PROMISES } from '@src/js/2_promises/promises.ts';
import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';
// Promise.race([PROMISES.instant, PROMISES.medium, PROMISES.slow])
//   .then((results) => console.log(results))
//   .catch((error) => {
//     console.error(error);
//   });
// instant

// Promise.race([PROMISES.instantNumber, PROMISES.instant, PROMISES.medium, PROMISES.slow])
//   .then((results) => console.log(results))
//   .catch((error) => {
//     console.error(error);
//   });
// instantNumber (42)

// Promise.race([
//   PROMISES.instant,
//   PROMISES.medium,
//   PROMISES.slow,
//   PROMISES.rejected,
//   PROMISES.instantNumber
// ])
//   .then((results) => console.log(results))
//   .catch((error) => {
//     console.error(error);
//   });
// Rejected

Promise.race([
  PROMISES.instant,
  PROMISES.medium,
  PROMISES.slow,
  PROMISES.instantNumber,
  PROMISES.rejected
])
  .then((results) => console.log(results))
  .catch((error) => {
    console.error(error);
  });
// instantNumber (42)

export const promiseRace = <T>(promises: T[]): false | Promise<T | string> => {
  const isPromises = isArray(promises);

  if (!isPromises) {
    return false;
  }

  return new Promise((resolve, reject) => {
    for (const currentPromise of promises) {
      // Key Point: The first promise that resolves will call resolve, and once a promise is settled (resolved or rejected), further calls to resolve or reject are ignored.
      Promise.resolve(currentPromise).then(resolve).catch(reject);
    }
  });
};

(async () => {
  const promiseRace_tests: Test<string | number, string | number>[] = [
    {
      name: 'returns first resolved promise value',
      expected: 'instant',
      actual: await promiseRace([PROMISES.instant, PROMISES.medium, PROMISES.slow])
    },
    {
      name: 'returns instant promise resolved value',
      expected: 42,
      actual: await promiseRace([
        PROMISES.instantNumber,
        PROMISES.instant,
        PROMISES.medium,
        PROMISES.slow
      ])
    },
    {
      name: 'rejects if first resolved promise rejected',
      expected: 'Rejected',
      actual: await promiseRace([
        PROMISES.rejected,
        PROMISES.instantNumber,
        PROMISES.instant,
        PROMISES.medium,
        PROMISES.slow
      ])
    }
  ];

  runTests({
    name: 'promiseRace',
    tests: promiseRace_tests
  });
})();
