import { multiply } from '@src/utils/multiply.ts';

type ExecutableFunction<R> = (...args: unknown[]) => R;

export const executeFnOnInterval = <R>({
  fn = () => {},
  timeoutMs = 0
}: {
  fn: ExecutableFunction<R>;
  timeoutMs: number;
}): { cancelInterval: () => void; getCurrentResult: () => R } => {
  let currentResult: R;

  const intervalId = setInterval(() => {
    currentResult = fn();
  }, timeoutMs);

  return {
    cancelInterval: () => clearInterval(intervalId),
    getCurrentResult: () => currentResult
  };
};

// const logHiEverySec = () => console.log('Hi');
// const { cancelInterval } = executeFnOnInterval({
//   fn: logHiEverySec,
//   timeoutMs: 1000
// });

// setTimeout(() => {
//   cancelInterval();
//   console.log('stopped logHiEverySec');
// }, 4000);

let startTime = Date.now();
let previousMultiplyResult = 2;
let multiplyResults: { value: number; time: number }[] = [];

const multiply2ByPreviousResultEverySec = (): number => {
  const now = Date.now();
  const elapsedTime = Math.round((now - startTime) / 1000);

  previousMultiplyResult = multiply(2)(previousMultiplyResult);
  multiplyResults.push({ value: previousMultiplyResult, time: elapsedTime });

  console.log(`At ${elapsedTime}s: Result = ${previousMultiplyResult}`);

  return previousMultiplyResult;
};

const multiply2ByPreviousResultEverySec_controller = executeFnOnInterval<number>({
  fn: multiply2ByPreviousResultEverySec,
  timeoutMs: 1000
});

const checkInterval = setInterval(() => {
  const currentResult = multiply2ByPreviousResultEverySec_controller.getCurrentResult();

  if (currentResult > 64) {
    console.log(`Result exceeded 64 (${currentResult}), stopping interval.`);
    multiply2ByPreviousResultEverySec_controller.cancelInterval();
    clearInterval(checkInterval);
  }
}, 1000);
