import { OBJECTS } from '@src/constants.ts';
import { Test } from '@src/utils/log.ts';
import { values } from './values.ts';

export const valuesTests: Test[] = [
  {
    name: 'empty values array if object is empty',
    expected: Object.values(OBJECTS.empty),
    actual: values({ object: OBJECTS.empty })
  },
  {
    name: 'full array of object values if object contains entries',
    expected: Object.values(OBJECTS.regular),
    actual: values({ object: OBJECTS.regular })
  }
];
