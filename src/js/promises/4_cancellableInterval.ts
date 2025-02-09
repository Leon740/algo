import { log } from '@src/utils/log.ts';
import { isValidVar } from '../utils/isValidVar.ts';

export function cancellableIntervalModule() {
  const multiply = (number?: number): false | ((amount?: number) => number) => {
    if (!isValidVar(number, 'number')) {
      return false;
    }

    return (amount?: number = 1) => {
      if (!isValidVar(amount, 'number')) return 1;
      return (number as number) * amount;
    };
  };

  console.group('multiply');

  const call_multiply_withNoArgs = multiply();
  log(
    call_multiply_withNoArgs,
    call_multiply_withNoArgs === false,
    'if no number is provided return false'
  );

  const call_multiply_withInvalidType = multiply('2' as any);
  log(
    call_multiply_withInvalidType,
    call_multiply_withInvalidType === false,
    'if number is invalid type return false'
  );

  const multiplyTwo = multiply(2);
  if (multiplyTwo !== false) {
    const call_multiply_properly = multiplyTwo(2);
    log(
      call_multiply_properly,
      call_multiply_properly === 4,
      'if number and amount return number * amount'
    );
  }

  console.groupEnd();

  type ExecutableFunctionT = (...args: unknown[]) => unknown;

  const executeFnOnInterval = (
    fn?: ExecutableFunctionT = () => {},
    interval?: number = 0
    // todo: returntype
  ): { clearInterval: () => void; getResult: () => number } => {
    let lastResult = 0;

    const intervalId = setInterval(() => {
      lastResult = fn();
    }, interval);

    return {
      clearInterval: () => clearInterval(intervalId),
      getResult: () => lastResult
    };

    // return () => {
    //   clearInterval(intervalId);
    // };
  };

  // console.group('logMessageEverySecond');

  // const logMessageEverySecond = () => console.log('logMessageEverySecond');
  // const cancel_logMessageEverySecond = executeFnOnInterval(logMessageEverySecond, 1000);
  // setTimeout(() => {
  //   cancel_logMessageEverySecond();
  //   console.log('stopped logMessageEverySecond');
  // }, 4000);

  // console.groupEnd();

  console.group('multiply2ByPreviousResultEvery2Seconds');

  let startTime = Date.now();
  let previousResult = 2;
  let results: { value: number; time: number }[] = [];

  const multiply2ByPreviousResultEvery2Seconds = (): number => {
    const now = Date.now();
    const elapsedTime = Math.round((now - startTime) / 1000);

    previousResult = multiply(2)(previousResult);
    results.push({ value: previousResult, time: elapsedTime });

    console.log(`At ${elapsedTime}s: Result = ${previousResult}`);

    return previousResult;
  };

  const multiply2ByPreviousResultEvery2Seconds_controller = executeFnOnInterval(
    multiply2ByPreviousResultEvery2Seconds,
    2000
  );
  const checkInterval = setInterval(() => {
    const currentResult = multiply2ByPreviousResultEvery2Seconds_controller.getResult();

    if (currentResult > 64) {
      console.log(`Result exceeded 64 (${currentResult}), stopping interval.`);
      multiply2ByPreviousResultEvery2Seconds_controller.clearInterval();
      clearInterval(checkInterval);
    }
  }, 2000);

  // setTimeout(() => {
  //   cancel_multiply2ByPreviousResultEvery2Seconds.clearInterval();
  //   console.log('stopped multiply2ByPreviousResultEvery2Seconds');

  //   for (let i = 0; i < results.length; i++) {
  //     const expectedValue = Math.pow(2, i + 2);
  //     const expectedTime = (i + 1) * 2;

  //     const actualValue = results[i].value;
  //     const actualTime = results[i].time;

  //     log(
  //       actualValue,
  //       actualValue === expectedValue,
  //       `At ${expectedTime}s, expected ${expectedValue}`
  //     );

  //     log(
  //       actualTime,
  //       actualTime === expectedTime,
  //       `Execution run at correct time: ${expectedTime}s`
  //     );
  //   }
  // }, 11000);

  console.groupEnd();
}
