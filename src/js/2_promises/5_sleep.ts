import { log } from '@src/utils/deprecated_log.ts';

// sleep = function which resolves value in timeoutMs
interface SleepArgs<V> {
  timeoutMs?: number;
  value: V;
}

export const sleep = <V>({ timeoutMs = 0, value }: SleepArgs<V>): Promise<V> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, timeoutMs);
  });
};

const measureSleep = async <V>({ timeoutMs = 0, value }: SleepArgs<V>) => {
  const startTime = Date.now();
  const resolvedValue = await sleep({
    timeoutMs,
    value
  });
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  return {
    elapsedTime,
    value: resolvedValue
  };
};

(async () => {
  const resolveImmediately = await measureSleep({ timeoutMs: 0, value: 10 });

  log(
    {
      elapsedTimeMs: resolveImmediately.elapsedTime,
      value: resolveImmediately.value
    },
    resolveImmediately.elapsedTime < 1000 && resolveImmediately.value === 10,
    'resolves number 10 in 0 sec'
  );

  const resolve10in1sec = await measureSleep({ timeoutMs: 1000, value: 10 });
  log(
    {
      elapsedTimeMs: resolve10in1sec.elapsedTime,
      value: resolve10in1sec.value
    },
    resolve10in1sec.elapsedTime < 2000 && resolve10in1sec.value === 10,
    'resolves number 10 in 1 sec'
  );

  // const sleepTests: Test<number, number>[] = [
  //   {
  //     name: 'resolves 10 immedeately',
  //     expected: 10,
  //     actual: await sleep({ timeoutMs: 0, value: 10 })
  //   },
  //   {
  //     name: 'resolves 10 in 1 sec',
  //     expected: 10,
  //     actual: await sleep({ timeoutMs: 1000, value: 10 })
  //   }
  // ];

  // runTests({
  //   name: 'sleep',
  //   tests: sleepTests
  // });
})();
