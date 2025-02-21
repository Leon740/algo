import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { slice } from './slice.ts';

export const sliceTests: Test[] = [
  {
    name: 'array [], returns []',
    expected: ARRAYS.empty.slice(),
    actual: slice<string>({ array: ARRAYS.empty })
  },
  // {
  //   name: 'returns new sliced array',
  //   expected: ARRAYS.numbers.slice(0, 2),
  //   actual: slice<number>({ array: ARRAYS.numbers, startIndex: 0, endIndex: 2 })
  // },
  {
    name: 'startIndex > array.length, returns []',
    expected: ARRAYS.numbers.slice(ARRAYS.numbers.length + 1),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: ARRAYS.numbers.length + 1 })
  },
  {
    name: 'startIndex = array.length, returns []',
    expected: ARRAYS.numbers.slice(ARRAYS.numbers.length),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: ARRAYS.numbers.length })
  },
  {
    name: 'endIndex > array.length, returns [startIndex..array.length]',
    expected: ARRAYS.numbers.slice(1, ARRAYS.numbers.length + 1),
    actual: slice<number>({
      array: ARRAYS.numbers,
      startIndex: 1,
      endIndex: ARRAYS.numbers.length + 1
    })
  },
  {
    name: 'endIndex = array.length, returns [startIndex..array.length]',
    expected: ARRAYS.numbers.slice(1, ARRAYS.numbers.length),
    actual: slice<number>({
      array: ARRAYS.numbers,
      startIndex: 1,
      endIndex: ARRAYS.numbers.length
    })
  },
  {
    name: 'startIndex > endIndex, returns []',
    expected: ARRAYS.numbers.slice(2, 1),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: 2, endIndex: 1 })
  },
  {
    name: 'startIndex = endIndex, returns []',
    expected: ARRAYS.numbers.slice(2, 2),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: 2, endIndex: 2 })
  }
  // {
  //   name: 'startIndex >= array.length, returns []',
  //   expected: ARRAYS.numbers.slice(5),
  //   actual: slice<number>({ array: ARRAYS.numbers, startIndex: 5 })
  // }
  // {
  //   name: 'endIndex >= array.length, returns []',
  //   expected: ARRAYS.numbers.slice(0, 5),
  //   actual: slice<number>({ array: ARRAYS.numbers, startIndex: 0, endIndex: 5 })
  // }
  // {
  //   name: 'if startIndex is greater than endIndex, returns empty array',
  //   expected: ARRAYS.numbers.slice(2, 0),
  //   actual: slice<number>({ array: ARRAYS.numbers, startIndex: 2, endIndex: 0 })
  // },
  // {
  //   name: 'if endIndex is not specified, returns new sliced array starting from startIndex till array.length',
  //   expected: ARRAYS.numbers.slice(1),
  //   actual: slice<number>({ array: ARRAYS.numbers, startIndex: 1 })
  // }
];
