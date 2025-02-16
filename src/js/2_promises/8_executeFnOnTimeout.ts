import { sum } from '@src/utils/example_functions/sum/sum.ts';

type ExecutableFunction = (...args: unknown[]) => unknown;

export const executeFnOnTimeout = ({
  fn = () => {},
  timeoutMs = 0
}: {
  fn: ExecutableFunction;
  timeoutMs: number;
}): { cancelTimeout: () => void } => {
  let timeoutId = setTimeout(() => {
    fn();
  }, timeoutMs);

  return {
    cancelTimeout: () => clearTimeout(timeoutId)
  };
};

const { cancelTimeout: cancelDelayedSum } = executeFnOnTimeout({
  fn: () => {
    console.log(sum(3, 5));
  },
  timeoutMs: 2000
});

setTimeout(() => {
  cancelDelayedSum();
}, 1000);
