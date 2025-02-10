export async function promiseTimeLimitModule() {
  const timeouts: { [key: string]: number } = {
    fast: 2000,
    slow: 4000
  };

  const functions = {
    fast: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Fast Resolved');
        }, timeouts.fast);
      });
    },
    slow: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Slow Resolved');
        }, timeouts.slow);
      });
    }
  };

  const checkIfResolvedWithinTimeout = async (fn: () => Promise<any>, timeout?: number = 0) => {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Function did not resolve within timeout');
      }, timeout);
    });

    try {
      const result = await Promise.race([fn(), timeoutPromise]);
      console.log('✅ Function resolved in time,', result);
      return result;
    } catch (error) {
      console.error('❌', error);
      return null;
    }
  };

  checkIfResolvedWithinTimeout(functions.fast, timeouts.fast + 1000);
  checkIfResolvedWithinTimeout(functions.fast, timeouts.fast - 1000);
  checkIfResolvedWithinTimeout(functions.slow, timeouts.slow + 1000);
  checkIfResolvedWithinTimeout(functions.slow, timeouts.slow - 1000);
}
