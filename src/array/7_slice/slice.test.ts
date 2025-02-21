import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { slice } from './slice.ts';

export const sliceTests: Test[] = [
  {
    name: '[], []',
    expected: ARRAYS.empty.slice(),
    actual: slice<string>({ array: ARRAYS.empty })
  },
  {
    name: 'startIndex and endIndex not specified, [0 ... array.length]',
    expected: ARRAYS.numbers.slice(),
    actual: slice<number>({ array: ARRAYS.numbers })
  },
  {
    // startIndex positive OUT of range
    name: 'startIndex >= array.length, []',
    expected: ARRAYS.numbers.slice(ARRAYS.numbers.length),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: ARRAYS.numbers.length })
  },
  {
    // startIndex positive IN of range,
    name: 'startIndex < array.length, [startIndex ... endIndex]',
    expected: ARRAYS.numbers.slice(ARRAYS.numbers.length - 1),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: ARRAYS.numbers.length - 1 })
  },
  {
    // startIndex negative OUT of range
    name: 'startIndex < -array.length, [0 ... endIndex]',
    expected: ARRAYS.numbers.slice(-ARRAYS.numbers.length - 1),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: -ARRAYS.numbers.length - 1 })
  },
  {
    // startIndex negative IN range
    name: '-array.length <= startIndex < 0 , [startIndex + array.length ... endIndex]',
    expected: ARRAYS.numbers.slice(-ARRAYS.numbers.length + 1),
    actual: slice<number>({ array: ARRAYS.numbers, startIndex: -ARRAYS.numbers.length + 1 })
  },
  {
    // endIndex positive OUT of range
    name: 'endIndex >= array.length, [startIndex ... array.length]',
    expected: ARRAYS.numbers.slice(undefined, ARRAYS.numbers.length),
    actual: slice<number>({
      array: ARRAYS.numbers,
      endIndex: ARRAYS.numbers.length
    })
  },
  {
    // endIndex positive IN of range
    name: 'endIndex < array.length, [startIndex ... endIndex]',
    expected: ARRAYS.numbers.slice(undefined, ARRAYS.numbers.length - 1),
    actual: slice<number>({
      array: ARRAYS.numbers,
      endIndex: ARRAYS.numbers.length - 1
    })
  },
  {
    // endIndex negative OUT of range
    name: 'endIndex < -array.length, []',
    expected: ARRAYS.numbers.slice(undefined, -ARRAYS.numbers.length - 1),
    actual: slice<number>({
      array: ARRAYS.numbers,
      endIndex: -ARRAYS.numbers.length - 1
    })
  },
  {
    // endIndex negative IN of range
    name: '-array.length <= endIndex < 0, [startIndex .... endIndex + array.length]',
    expected: ARRAYS.numbers.slice(undefined, -ARRAYS.numbers.length + 1),
    actual: slice<number>({
      array: ARRAYS.numbers,
      endIndex: -ARRAYS.numbers.length + 1
    })
  },
  {
    // startIndex >= endIndex,
    name: 'startIndex > =endIndex, []',
    expected: ARRAYS.numbers.slice(2, 1),
    actual: slice<number>({
      array: ARRAYS.numbers,
      startIndex: 2,
      endIndex: 1
    })
  }
];
