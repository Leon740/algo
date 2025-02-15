let secondsPassedSinceStart = 0;

const intervalId = setInterval(() => {
  secondsPassedSinceStart++;
  console.log(secondsPassedSinceStart);

  if (secondsPassedSinceStart > 5) {
    clearInterval(intervalId);
  }
}, 1000);

type FnArgs = unknown[];
type Fn = (...args: FnArgs) => void;

export const debounceFunction = ({ fn, timeoutMs = 0 }: { fn: Fn; timeoutMs: number }): Fn => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: FnArgs) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, timeoutMs);
  };
};

const sayHello = () => console.log('Hello');
const sayHelloDebounceTimeoutMs = 2000;
const debouncedSayHelloFor2Sec = debounceFunction({
  fn: sayHello,
  timeoutMs: sayHelloDebounceTimeoutMs
});
debouncedSayHelloFor2Sec(); // hello
debouncedSayHelloFor2Sec(); // cancel
debouncedSayHelloFor2Sec(); // cancel

setTimeout(() => {
  debouncedSayHelloFor2Sec(); // call
}, sayHelloDebounceTimeoutMs * 2);
