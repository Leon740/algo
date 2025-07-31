import { Test } from '@src/utils/log.ts';
import { getLuckyNumberInArray } from './14_lucky_number.ts';

export const getLuckyNumberInArrayTests: Test[] = [
  {
    name: 'no lucky number in {[2, 2, 2, 3, 3]}',
    expected: -1,
    actual: getLuckyNumberInArray([2, 2, 2, 3, 3])
  },
  {
    name: 'lucky number {2} in {[2, 2, 3, 4]}',
    expected: 2,
    actual: getLuckyNumberInArray([2, 2, 3, 4])
  },
  {
    name: 'lucky number {3} in {[1, 2, 2, 3, 3, 3]}',
    expected: 3,
    actual: getLuckyNumberInArray([1, 2, 2, 3, 3, 3])
  }
];
