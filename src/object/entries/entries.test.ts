import { OBJECTS } from '@src/constants.ts';
import { Test } from '@src/utils/log.ts';
import { entries } from './entries.ts';

export const entriesTests: Test[] = [
  {
    name: 'empty entries array if object is empty',
    expected: Object.entries(OBJECTS.empty),
    actual: entries(OBJECTS.empty)
  },
  {
    name: 'full array of object entries if object contains entries',
    expected: Object.entries(OBJECTS.regular),
    actual: entries(OBJECTS.regular)
  }
];
