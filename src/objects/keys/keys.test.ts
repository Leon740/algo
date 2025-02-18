import { Test } from '@src/utils/log.ts';
import { OBJECTS_EXAMPLES } from '../constants.ts';
import { keys } from './keys.ts';

export const keysTests: Test[] = [
  {
    name: 'empty keys array if object is empty',
    expected: Object.keys(OBJECTS_EXAMPLES.empty),
    actual: keys(OBJECTS_EXAMPLES.empty)
  },
  {
    name: 'full array of object keys if object contains entries',
    expected: Object.keys(OBJECTS_EXAMPLES.regular),
    actual: keys(OBJECTS_EXAMPLES.regular)
  }
];
