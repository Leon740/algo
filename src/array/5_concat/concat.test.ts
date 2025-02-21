import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { concat } from './concat.ts';

export const concatTests: Test[] = [
  {
    name: 'concats arrays',
    expected: ARRAYS.numbers.concat(ARRAYS.numbers, ARRAYS.numbers),
    actual: concat({ arrays: [ARRAYS.numbers, ARRAYS.numbers, ARRAYS.numbers] })
  }
];
