import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { fill } from './fill.ts';

const test_0_arrayExpected = [...ARRAYS.empty];
const test_0_arrayActual = [...ARRAYS.empty];

const test_1_arrayExpected = [...ARRAYS.numbers];
const test_1_arrayActual = [...ARRAYS.numbers];

const test_2_arrayExpected = [...ARRAYS.letters];
const test_2_arrayActual = [...ARRAYS.letters];

const test_3_arrayExpected = [...ARRAYS.numbers];
const test_3_arrayActual = [...ARRAYS.numbers];

const test_4_arrayExpected = [...ARRAYS.letters];
const test_4_arrayActual = [...ARRAYS.letters];

export const fillTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: test_0_arrayExpected.fill('0'),
    actual: fill<string>({ array: test_0_arrayActual, value: '0' })
  },
  {
    name: 'fills array with 0 starting from 1 to 3',
    expected: test_1_arrayExpected.fill(0, 1, 3),
    actual: fill<number>({ array: test_1_arrayActual, value: 0, startIndex: 1, endIndex: 3 })
  },
  {
    name: 'if startIndex and endIndex are not specified, fills entire array',
    expected: test_2_arrayExpected.fill('K'),
    actual: fill<string>({ array: test_2_arrayActual, value: 'K' })
  },
  {
    name: 'if startIndex is not specified, fills the array starting 0 index till endIndex',
    expected: test_3_arrayExpected.fill(9, undefined, 3),
    actual: fill<number>({ array: test_3_arrayActual, value: 9, endIndex: 3 })
  },
  {
    name: 'if endIndex is not specified, fills the array starting startIndex till array.length - 1 index',
    expected: test_4_arrayExpected.fill('J', 1),
    actual: fill<string>({ array: test_4_arrayActual, value: 'J', startIndex: 1 })
  }
];
