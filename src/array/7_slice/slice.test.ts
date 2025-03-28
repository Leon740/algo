import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';
import { MyArray } from '../MyArray.ts';
import { slice } from './slice.ts';

const sliceTestItem = ({
  startIndex,
  endIndex
}: {
  startIndex?: number;
  endIndex?: number;
}): { expected: unknown; actual: unknown } => {
  const arrayExpected = new Array(...VALUES.numbersArray);
  const arrayActual = new MyArray(VALUES.numbersArray);

  return {
    expected: arrayExpected.slice(startIndex, endIndex),
    actual: arrayActual.slice({ startIndex, endIndex })
  };
};

const numbers = [...VALUES.numbersArray];
const numbersLength = numbers.length;

export const testsOfSlice: Test[] = [
  {
    name: '[], []',
    expected: VALUES.emptyArray.slice(),
    actual: slice<string>({ array: VALUES.emptyArray })
  },
  {
    name: 'startIndex and endIndex not specified, [0 ... array.length]',
    ...sliceTestItem({})
  },
  {
    // + startIndex OUT
    name: 'startIndex >= array.length, []',
    ...sliceTestItem({ startIndex: numbersLength + 1 })
  },
  {
    // + startIndex IN
    name: 'startIndex < array.length, [startIndex ... endIndex]',
    ...sliceTestItem({ startIndex: numbersLength - 1 })
  },
  {
    // - startIndex OUT,
    name: 'startIndex < -array.length, [0 ... endIndex]',
    ...sliceTestItem({ startIndex: -numbersLength - 1 })
  },
  {
    // - startIndex IN,
    name: '-array.length <= startIndex < 0, [startIndex + array.length ... endIndex]',
    ...sliceTestItem({ startIndex: -numbersLength + 1 })
  },
  {
    // + endIndex OUT
    name: 'endIndex >= array.length, [startIndex ... array.length]',
    ...sliceTestItem({ endIndex: numbersLength + 1 })
  },
  {
    // + endIndex IN
    name: 'endIndex < array.length, [startIndex ... endIndex]',
    ...sliceTestItem({ endIndex: numbersLength - 1 })
  },
  {
    // - endIndex OUT
    name: 'endIndex < -array.length, []',
    ...sliceTestItem({ endIndex: -numbersLength - 1 })
  },
  {
    // - endIndex IN
    name: '-array.length <= endIndex < 0, [startIndex ... endIndex + array.length]',
    ...sliceTestItem({ endIndex: -numbersLength + 1 })
  },
  {
    // + startIndex >= endIndex,
    name: '+ startIndex >= endIndex, []',
    ...sliceTestItem({ startIndex: 2, endIndex: 1 })
  },
  {
    // - startIndex >= endIndex,
    name: '- startIndex >= endIndex, []',
    ...sliceTestItem({ startIndex: -1, endIndex: -2 })
  }
];
