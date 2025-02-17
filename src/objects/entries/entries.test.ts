import { Test } from '@src/utils/log.ts';
import { OBJECTS_EXAMPLES } from '../constants.ts';
import { entries } from './entries.ts';

export const entriesTests: Test[] = [
  {
    name: 'empty entries array if object is empty',
    expected: Object.entries(OBJECTS_EXAMPLES.empty),
    actual: entries({ object: OBJECTS_EXAMPLES.empty })
  },
  {
    name: 'full array of object entries if object contains entries',
    expected: Object.entries(OBJECTS_EXAMPLES.regular),
    actual: entries({ object: OBJECTS_EXAMPLES.regular })
  }
];
