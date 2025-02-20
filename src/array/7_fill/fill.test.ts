import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { fill } from './fill.ts';

export const fillTests: Test[] = [
  {
    name: 'if array is empty, returns empty array',
    expected: ARRAYS.empty,
    actual: fill<string>({ array: ARRAYS.empty })
  }
];
