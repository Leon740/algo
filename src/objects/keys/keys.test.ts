import { Test } from '@src/utils/log.ts';
import { keys } from './keys.ts';

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

export const keysTests: Test[] = [
  {
    name: 'empty array of object keys if object is empty',
    expected: Object.keys(OBJECTS_TO_TEST.empty),
    actual: keys({ object: OBJECTS_TO_TEST.empty })
  },
  {
    name: 'full array of object keys if object contains keys',
    expected: Object.keys(OBJECTS_TO_TEST.regular),
    actual: keys({ object: OBJECTS_TO_TEST.regular })
  }
];
