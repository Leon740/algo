import { Test } from '@src/utils/log.ts';
import { climbStairs } from './10_climb_stairs.ts';

export const climbStairsTests: Test[] = [
  {
    name: '1',
    expected: 1,
    actual: climbStairs(1)
  },
  {
    name: '2',
    expected: 2,
    actual: climbStairs(2)
  },
  {
    name: '3',
    expected: 3,
    actual: climbStairs(3)
  },
  {
    name: '4',
    expected: 5,
    actual: climbStairs(4)
  },
  {
    name: '5',
    expected: 8,
    actual: climbStairs(5)
  }
];
