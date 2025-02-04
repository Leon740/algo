import { log } from '@src/utils/log.ts';

export function lc_5() {
  const increasingTriplet = (array?: number[]): boolean => {
    if (!array || array.length < 3) return false;

    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < array.length; i++) {
      if (array[i] <= first) {
        first = array[i];
      } else if (array[i] <= second) {
        second = array[i];
      } else {
        return true;
      }
    }

    return false;
  };

  const call_increasingTriplet_withNoArray = increasingTriplet();
  log(
    call_increasingTriplet_withNoArray,
    call_increasingTriplet_withNoArray === false,
    'if array is not provided return false'
  );

  const call_increasingTriplet_withShortArray = increasingTriplet([1, 2]);
  log(
    call_increasingTriplet_withShortArray,
    call_increasingTriplet_withShortArray === false,
    'if array is not provided return false'
  );

  const call_increasingTriplet_withIncreasingArray = increasingTriplet([1, 2, 3, 4, 5]);
  log(
    call_increasingTriplet_withIncreasingArray,
    call_increasingTriplet_withIncreasingArray === true,
    'true'
  );

  const call_increasingTriplet_withDecreasingArray = increasingTriplet([5, 4, 3, 2, 1]);
  log(
    call_increasingTriplet_withDecreasingArray,
    call_increasingTriplet_withDecreasingArray === false,
    'false'
  );

  const call_increasingTriplet_properly = increasingTriplet([2, 1, 5, 0, 4, 6]);
  log(call_increasingTriplet_properly, call_increasingTriplet_properly === true, 'properly');
}
