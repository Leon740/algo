import { Test } from '@src/utils/log.ts';
import { getTwoIndexesOfNumbersResultingToTarget } from './1_two_sum.ts';

export const getTwoIndexesOfNumbersResultingToTargetTests: Test[] = [
  {
    name: 'returns -1 if params are undefined',
    expected: -1,
    actual: getTwoIndexesOfNumbersResultingToTarget()
  },
  {
    name: 'returns -1 if one of params (numbers) is undefined',
    expected: -1,
    actual: getTwoIndexesOfNumbersResultingToTarget({ target: 0 })
  },
  {
    name: 'returns -1 if one of params (target) is undefined',
    expected: -1,
    actual: getTwoIndexesOfNumbersResultingToTarget({ numbers: [0] })
  },
  {
    name: 'returns 0 if numbers is empty',
    expected: 0,
    actual: getTwoIndexesOfNumbersResultingToTarget({ numbers: [], target: 0 })
  },
  {
    name: 'returns -1 if sum of numbers resulting to target is not found',
    expected: -1,
    actual: getTwoIndexesOfNumbersResultingToTarget({ numbers: [0, 1, 2], target: -5 })
  },
  {
    name: '0) returns indexes of numbers resulting to target {[0, 1]}',
    expected: [0, 1],
    actual: getTwoIndexesOfNumbersResultingToTarget({ numbers: [2, 7, 11, 15], target: 9 })
  },
  {
    name: '1) returns indexes of duplicated numbers resulting to target {[0, 1]}',
    expected: [0, 1],
    actual: getTwoIndexesOfNumbersResultingToTarget({ numbers: [3, 3], target: 6 })
  },
  {
    name: '2) returns indexes of numbers no matter + or - resulting to target {[0, 2]}',
    expected: [0, 2],
    actual: getTwoIndexesOfNumbersResultingToTarget({ numbers: [-3, 5, 8], target: 5 })
  }
];
