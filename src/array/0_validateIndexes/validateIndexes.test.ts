import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { validateIndexes } from './validateIndexes.ts';

const numbers = ARRAYS.numbers;
const numbersLength = numbers.length;

export const validateIndexesTests: Test[] = [
  {
    name: '[0 ... 0]',
    expected: { startIndex: 0, endIndex: 0 },
    actual: validateIndexes({ array: ARRAYS.empty })
  },
  {
    name: 'startIndex and endIndex not specified, { 0, array.length }',
    expected: { startIndex: 0, endIndex: numbersLength },
    actual: validateIndexes({ array: numbers })
  },
  {
    // + startIndex OUT
    name: 'startIndex >= array.length, [0 ... 0]',
    expected: { startIndex: 0, endIndex: 0 },
    actual: validateIndexes({ array: numbers, startIndex: numbersLength + 1 })
  },
  {
    // + startIndex IN
    name: 'startIndex < array.length, [startIndex ... endIndex]',
    expected: { startIndex: numbersLength - 1, endIndex: numbersLength },
    actual: validateIndexes({ array: numbers, startIndex: numbersLength - 1 })
  },
  {
    // - startIndex OUT,
    name: 'startIndex < -array.length, [0 ... endIndex]',
    expected: { startIndex: 0, endIndex: numbersLength },
    actual: validateIndexes({ array: numbers, startIndex: -numbersLength - 1 })
  },
  {
    // - startIndex IN,
    name: '-array.length <= startIndex < 0, [startIndex + array.length ... endIndex]',
    expected: { startIndex: 1, endIndex: numbersLength },
    actual: validateIndexes({ array: numbers, startIndex: -numbersLength + 1 })
  },
  {
    // + endIndex OUT
    name: 'endIndex >= array.length, [startIndex ... array.length]',
    expected: { startIndex: 0, endIndex: numbersLength },
    actual: validateIndexes({ array: numbers, endIndex: numbersLength + 1 })
  },
  {
    // + endIndex IN
    name: 'endIndex < array.length, [startIndex ... endIndex]',
    expected: { startIndex: 0, endIndex: numbersLength - 1 },
    actual: validateIndexes({ array: numbers, endIndex: numbersLength - 1 })
  },
  {
    // - endIndex OUT
    name: 'endIndex < -array.length, [0 ... 0]',
    expected: { startIndex: 0, endIndex: 0 },
    actual: validateIndexes({
      array: numbers,
      endIndex: -numbersLength - 1
    })
  },
  {
    // - endIndex IN
    name: '-array.length <= endIndex < 0, [startIndex ... endIndex + array.length]',
    expected: { startIndex: 0, endIndex: 1 },
    actual: validateIndexes({
      array: numbers,
      endIndex: -numbersLength + 1
    })
  },
  {
    // + startIndex >= endIndex,
    name: '+ startIndex >= endIndex, [0 ... 0]',
    expected: { startIndex: 0, endIndex: 0 },
    actual: validateIndexes({
      array: numbers,
      startIndex: 2,
      endIndex: 1
    })
  },
  {
    // - startIndex >= endIndex,
    name: '- startIndex >= endIndex, [0 ... 0]',
    expected: { startIndex: 0, endIndex: 0 },
    actual: validateIndexes({
      array: numbers,
      startIndex: -1,
      endIndex: -2
    })
  }
];
