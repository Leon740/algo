export function debounceModule() {
  let secondsPassedSinceStart = 0;

  const intervalId = setInterval(() => {
    secondsPassedSinceStart++;
    console.log(secondsPassedSinceStart);

    if (secondsPassedSinceStart > 5) {
      clearInterval(intervalId);
    }
  }, 1000);

  type FnArgs = number[];
  type Fn = (...args: FnArgs) => void;

  const debounce = (fn: Fn, timeoutMs?: number = 0): Fn => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        fn(...args);
      }, timeoutMs);
    };
  };

  const sayHello = () => console.log('Hello');
  const sayHelloDebounceTimeMs = 2000;
  const debouncedSayHelloFor2Sec = debounce(sayHello, sayHelloDebounceTimeMs);
  debouncedSayHelloFor2Sec(); // call
  debouncedSayHelloFor2Sec(); // cancel
  debouncedSayHelloFor2Sec(); // cancel

  setTimeout(() => {
    debouncedSayHelloFor2Sec(); // call
  }, sayHelloDebounceTimeMs * 2);
}
