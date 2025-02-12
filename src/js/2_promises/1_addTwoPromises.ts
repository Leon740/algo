import { log } from '@src/utils/log.ts';

export function addTwoPromisesModule() {
  // Task
  // Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

  const fetchNumber = (number?: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      if (number) {
        resolve(number);
      } else {
        reject(new Error('Number is not provided'));
      }
    });
  };

  (async () => {
    try {
      const call_fetchNumber_withNoNumber = await fetchNumber();
      log(call_fetchNumber_withNoNumber, true, 'Number is not provided');
    } catch (error) {
      log(error, true, 'Number is not provided');
    }

    const numberToFetch = 5;
    const call_fetchNumber_withNumber = await fetchNumber(numberToFetch);
    log(
      call_fetchNumber_withNumber,
      call_fetchNumber_withNumber === numberToFetch,
      'if number is provided return number'
    );
  })();

  type PromiseT = Promise<number>;

  const addTwoPromises = async (promise1?: PromiseT, promise2?: PromiseT): PromiseT => {
    if (promise1 && promise2) {
      return Promise.all([promise1, promise2]).then(([number1, number2]) => number1 + number2);
    }

    return promise1 ?? promise2 ?? Promise.resolve(0);
  };

  (async () => {
    const call_addTwoPromises_withNoPromises = await addTwoPromises();
    log(
      call_addTwoPromises_withNoPromises,
      call_addTwoPromises_withNoPromises === 0,
      'if promises are not provided return 0'
    );

    const firstNumberToResolve = 3;
    const call_addTwoPromises_withFirstPromise = await addTwoPromises(
      fetchNumber(firstNumberToResolve)
    );
    log(
      call_addTwoPromises_withFirstPromise,
      call_addTwoPromises_withFirstPromise === firstNumberToResolve,
      'if first promise is and second is not return first'
    );

    const secondNumberToResolve = 2;
    const call_addTwoPromises_withSecondPromise = await addTwoPromises(
      undefined,
      fetchNumber(secondNumberToResolve)
    );
    log(
      call_addTwoPromises_withSecondPromise,
      call_addTwoPromises_withSecondPromise === secondNumberToResolve,
      'if first promise is not and second is return second'
    );

    const call_addTwoPromises_withTwoPromises = await addTwoPromises(
      fetchNumber(firstNumberToResolve),
      fetchNumber(secondNumberToResolve)
    );
    log(
      call_addTwoPromises_withTwoPromises,
      call_addTwoPromises_withTwoPromises === firstNumberToResolve + secondNumberToResolve,
      'if both promises provided calc sum'
    );
  })();
}
