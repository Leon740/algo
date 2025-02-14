import { runTests, type Test } from '@src/utils/log1.ts';

// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

const fetchNumber = (number: number = 0): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (number) {
      resolve(number);
    } else {
      reject('Number is not provided' as string);
    }
  });
};

(async () => {
  type FetchNumberReturn = number | string;

  const fetchNumber_tests: Test<FetchNumberReturn, FetchNumberReturn>[] = [
    {
      name: 'if number is provided fetches number',
      expected: 10,
      actual: await fetchNumber(10)
    },
    {
      name: 'if number is not provided rejects',
      expected: 'Number is not provided',
      actual: await (async () => {
        try {
          return await fetchNumber();
        } catch (err) {
          return err;
        }
      })()
    }
  ];

  runTests({
    name: 'fetchNumber',
    tests: fetchNumber_tests
  });
})();

type PromiseT = Promise<number>;

const addTwoPromises = async (promise1?: PromiseT, promise2?: PromiseT): PromiseT => {
  if (promise1 && promise2) {
    return Promise.all([promise1, promise2]).then(([number1, number2]) => number1 + number2);
  }

  return promise1 ?? promise2 ?? Promise.resolve(0);
};

(async () => {
  const addTwoPromises_tests: Test<number, number>[] = [
    {
      name: 'returns sum of resolved promises',
      expected: 15,
      actual: await addTwoPromises(fetchNumber(10), fetchNumber(5))
    },
    {
      name: 'returns 0 if no promises',
      expected: 0,
      actual: await addTwoPromises()
    }
  ];

  runTests({
    name: 'addTwoPromises',
    tests: addTwoPromises_tests
  });
})();
