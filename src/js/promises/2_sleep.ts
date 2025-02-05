import { log } from '@src/utils/log.ts';

export function sleepModule() {
  const sleep = (ms?: number = 0, value?: any): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, ms);
    });
  };

  // const fetchNumberImmediately = sleep(0, 3).then((result) => console.log(result));

  // const fetchNumberIn1s = sleep(1000, 333).then((result) => console.log(result));

  (async () => {
    const call_sleep_withNoMs_ms = 0;
    const call_sleep_withNoMs_number = 5;
    const call_sleep_withNoMs_start = Date.now();
    const call_sleep_withNoMs = await sleep(call_sleep_withNoMs_ms, call_sleep_withNoMs_number);
    const call_sleep_withNoMs_end = Date.now();
    const call_sleep_withNoMs_elapsed = call_sleep_withNoMs_end - call_sleep_withNoMs_start;

    log(
      'call_sleep_withNoMs_elapsed',
      call_sleep_withNoMs_elapsed <= 2000,
      `expected ${call_sleep_withNoMs_ms} ms, actual: ${call_sleep_withNoMs_elapsed.toFixed(0)} ms`
    );
    log(
      call_sleep_withNoMs,
      call_sleep_withNoMs === 5,
      'if ms in not provided call func immediately'
    );

    const call_sleep_with2s_ms = 2000;
    const call_sleep_with2s_number = 555;
    const call_sleep_with2s_start = Date.now();
    const call_sleep_with2s = await sleep(call_sleep_with2s_ms, call_sleep_with2s_number);
    const call_sleep_with2s_end = Date.now();
    const call_sleep_with2s_elapsed = call_sleep_with2s_end - call_sleep_with2s_start;

    log(
      'call_sleep_with2s_elapsed',
      call_sleep_with2s_elapsed <= 3000,
      `expected ${call_sleep_with2s_ms} ms, actual: ${call_sleep_with2s_elapsed.toFixed(0)} ms`
    );
    console.log(`expected 2000 ms, actual: ${call_sleep_with2s_elapsed.toFixed(0)} ms`);
    log(call_sleep_with2s, call_sleep_with2s === 555, 'call func in ms');
  })();
}
