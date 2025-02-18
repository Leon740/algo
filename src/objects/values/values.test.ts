import { Test } from '@src/utils/log.ts';
import { OBJECTS_EXAMPLES } from '../constants.ts';
import { values } from './values.ts';

export const valuesTests: Test[] = [
  {
    name: 'empty values array if object is empty',
    expected: Object.values(OBJECTS_EXAMPLES.empty),
    actual: values(OBJECTS_EXAMPLES.empty)
  },
  {
    name: 'full array of object values if object contains entries',
    expected: Object.values(OBJECTS_EXAMPLES.regular),
    actual: values(OBJECTS_EXAMPLES.regular)
  }
];
