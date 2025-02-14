import { runTests, type Test } from '@src/utils/log1.ts';
import { PROMISES } from './promises.ts';

export const getPromiseResult = async <R>(promise: Promise<R>): Promise<R | string> => {
  try {
    const result = await promise;
    // console.log(result);
    return result;
  } catch (error) {
    // console.error(error);
    return 'Rejected';
  }
};

(async () => {
  type PromiseResult = string | number;

  const getPromiseResult_tests: Test<PromiseResult, PromiseResult>[] = [
    {
      name: 'rejects',
      expected: 'Rejected',
      actual: await getPromiseResult(PROMISES.rejected)
    },
    {
      name: 'returns min delay promise result',
      expected: 'instant',
      actual: await getPromiseResult(PROMISES.instant)
    },
    {
      name: 'returns instant promise result',
      expected: 42,
      actual: await getPromiseResult(PROMISES.instantNumber)
    }
  ];

  runTests({
    name: 'getPromiseResult',
    tests: getPromiseResult_tests
  });
})();
