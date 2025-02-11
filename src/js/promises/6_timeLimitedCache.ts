import { log } from '@src/utils/log.ts';

export function timeLimitedCacheModule() {
  class TimeLimitedCache<V> {
    storage: Map<
      string,
      {
        value: V;
        timeoutId: NodeJS.Timeout;
      }
    >;

    constructor() {
      this.storage = new Map();
    }

    get(key: string): V | -1 {
      if (this.storage.has(key)) {
        return this.storage.get(key)!.value;
      }
      return -1;
    }

    set(key: string, value: V, duration: number): boolean {
      const alreadyExists = this.storage.has(key);

      if (alreadyExists) {
        clearTimeout(this.storage.get(key)!.timeoutId);
      }

      this.storage.set(key, {
        value,
        timeoutId: setTimeout(() => {
          this.storage.delete(key);
        }, duration)
      });

      return alreadyExists;
    }

    count(): number {
      return this.storage.size;
    }
  }

  const timeLimitedCache = new TimeLimitedCache<string>();

  const key_A = 'key_A';
  const value_A = 'value_A';
  const newValue_A = 'value_AA';
  const timeout_A = 3000;
  const newTimeout_A = timeout_A - 1000;
  const timeoutLess_timeout_A = timeout_A / 2;
  const timeoutGreater_timeout_A = timeout_A * 2;

  const getKey_A_beforeItWasSet = timeLimitedCache.get(key_A);
  log(getKey_A_beforeItWasSet, getKey_A_beforeItWasSet === -1, `${key_A} was not set yet`);

  timeLimitedCache.set(key_A, value_A, timeout_A);

  const getKey_A_afterItWasSet = timeLimitedCache.get(key_A);
  log(getKey_A_afterItWasSet, getKey_A_afterItWasSet === value_A, `${key_A} was set to ${value_A}`);

  setTimeout(() => {
    const getKey_A_after1500ms = timeLimitedCache.get(key_A);
    log(
      getKey_A_after1500ms,
      getKey_A_after1500ms === newValue_A,
      `${key_A} is available while ${timeoutLess_timeout_A}ms`
    );
  }, timeoutLess_timeout_A);
  setTimeout(() => {
    const getKey_A_after6000ms = timeLimitedCache.get(key_A);
    log(
      getKey_A_after6000ms,
      getKey_A_after6000ms === -1,
      `${key_A} is not available after ${timeoutGreater_timeout_A}ms`
    );
  }, timeoutGreater_timeout_A);

  timeLimitedCache.set(key_A, newValue_A, newTimeout_A);

  // console.log(timeLimitedCache.get('key_A'));
  // console.log(`count: ${timeLimitedCache.count()}`);

  // timeLimitedCache.set('key_BB', 'value_BB', 10000);
  // console.log(timeLimitedCache.get('key_BB'));
  // console.log(`count: ${timeLimitedCache.count()}`);

  // setTimeout(() => {
  //   console.log(timeLimitedCache.get('key_A'));
  //   console.log(timeLimitedCache.count());
  //   console.log(timeLimitedCache.get('key_BB'));
  //   console.log(timeLimitedCache.count());
  // }, 6000);
}
