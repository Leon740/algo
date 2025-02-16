import { Test } from '@src/utils/log.ts';
import { values } from './values.ts';

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

export const valuesTests: Test[] = [
  {
    name: 'empty array of object values if object is empty',
    expected: Object.values(OBJECTS_TO_TEST.empty),
    actual: values({ object: OBJECTS_TO_TEST.empty })
  },
  {
    name: 'full array of object values if object contains values',
    expected: Object.values(OBJECTS_TO_TEST.regular),
    actual: values({ object: OBJECTS_TO_TEST.regular })
  }
];
