import { OBJECTS } from '@src/constants.ts';
import { Test } from '@src/utils/log.ts';
import { keys } from './keys.ts';

export const keysTests: Test[] = [
  {
    name: 'empty keys array if object is empty',
    expected: Object.keys(OBJECTS.empty),
    actual: keys(OBJECTS.empty)
  },
  {
    name: 'full array of object keys if object contains entries',
    expected: Object.keys(OBJECTS.regular),
    actual: keys(OBJECTS.regular)
  }
];
