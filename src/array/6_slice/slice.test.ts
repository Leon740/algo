import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { slice } from './slice.ts';

export const sliceTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: ARRAYS.empty.slice(0, 2),
    actual: slice<string>({ array: ARRAYS.empty, startIndex: 0 })
  },
  {
    name: 'returns new sliced array',
    expected: ARRAYS.numbers.slice(0, 2),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: 0, endIndex: 2 })
  },
  {
    name: 'if startIndex is greater than endIndex, returns empty array',
    expected: ARRAYS.numbers.slice(2, 0),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: 2, endIndex: 0 })
  },
  {
    name: 'if endIndex is not specified, returns new sliced array starting from startIndex till array.length',
    expected: ARRAYS.numbers.slice(1),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: 1 })
  }
];
