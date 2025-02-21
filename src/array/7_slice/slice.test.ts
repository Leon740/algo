import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { type SliceArgs, slice } from './slice.ts';

const sliceTestItem = ({
  array,
  startIndex,
  endIndex
}: SliceArgs<number>): { expected: unknown; actual: unknown } => {
  return {
    expected: array.slice(startIndex, endIndex),
    actual: slice<number>({ array, startIndex, endIndex })
  };
};

const numbers = ARRAYS.numbers;
const numbersLength = numbers.length;

export const sliceTests: Test[] = [
  {
    name: '[], []',
    expected: ARRAYS.empty.slice(),
    actual: slice<string>({ array: ARRAYS.empty })
  },
  {
    name: 'startIndex and endIndex not specified, [0 ... array.length]',
    ...sliceTestItem({ array: numbers })
  },
  {
    // + startIndex OUT
    name: 'startIndex >= array.length, []',
    ...sliceTestItem({ array: numbers, startIndex: numbersLength + 1 })
  },
  {
    // + startIndex IN
    name: 'startIndex < array.length, [startIndex ... endIndex]',
    ...sliceTestItem({ array: numbers, startIndex: numbersLength - 1 })
  },
  {
    // - startIndex OUT,
    name: 'startIndex < -array.length, [0 ... endIndex]',
    ...sliceTestItem({ array: numbers, startIndex: -numbersLength - 1 })
  },
  {
    // - startIndex IN,
    name: '-array.length <= startIndex < 0, [startIndex + array.length ... endIndex]',
    ...sliceTestItem({ array: numbers, startIndex: -numbersLength + 1 })
  },
  {
    // + endIndex OUT
    name: 'endIndex >= array.length, [startIndex ... array.length]',
    ...sliceTestItem({ array: numbers, endIndex: numbersLength + 1 })
  },
  {
    // + endIndex IN
    name: 'endIndex < array.length, [startIndex ... endIndex]',
    ...sliceTestItem({ array: numbers, endIndex: numbersLength - 1 })
  },
  {
    // - endIndex OUT
    name: 'endIndex < -array.length, []',
    ...sliceTestItem({
      array: numbers,
      endIndex: -numbersLength - 1
    })
  },
  {
    // - endIndex IN
    name: '-array.length <= endIndex < 0, [startIndex ... endIndex + array.length]',
    ...sliceTestItem({
      array: numbers,
      endIndex: -numbersLength + 1
    })
  },
  {
    // + startIndex >= endIndex,
    name: '+ startIndex >= endIndex, []',
    ...sliceTestItem({
      array: numbers,
      startIndex: 2,
      endIndex: 1
    })
  },
  {
    // - startIndex >= endIndex,
    name: '- startIndex >= endIndex, []',
    ...sliceTestItem({
      array: numbers,
      startIndex: -1,
      endIndex: -2
    })
  }
];
