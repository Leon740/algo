import { Test } from '@src/utils/log.ts';
import { entries } from './entries.ts';

const OBJECTS_TO_TEST = {
  empty: {},
  regular: {
    a: 'a',
    2: 2,
    false: false,
    true: true,
    null: null,
    nested: { nestedA: 'nestedA' }
  }
};

export const entriesTests: Test[] = [
  {
    name: 'empty array of object entries if object is empty',
    expected: Object.entries(OBJECTS_TO_TEST.empty),
    actual: entries({ object: {} })
  },
  {
    name: 'full array of object entries if object contains entries',
    expected: Object.entries(OBJECTS_TO_TEST.regular),
    actual: entries({ object: OBJECTS_TO_TEST.regular })
  }
];
