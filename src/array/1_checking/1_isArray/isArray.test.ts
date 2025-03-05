import { type Test, type TestResult } from '@src/utils/log.ts';
import { isArray } from './isArray.ts';

const testIsArray = (arg: unknown): TestResult => {
  return {
    expected: Array.isArray(arg),
    actual: isArray(arg)
  };
};

export const allTestsOfIsArray: Test[] = [
  {
    name: 'false | undefined',
    ...testIsArray(undefined)
  },
  {
    name: 'false | null',
    ...testIsArray(null)
  },
  {
    name: 'false | Leonid',
    ...testIsArray('Leonid')
  },
  {
    name: 'false | 23',
    ...testIsArray(23)
  },
  {
    name: 'false | true',
    ...testIsArray(true)
  },
  {
    name: 'false | {}',
    ...testIsArray({})
  },
  {
    name: 'false | { name: "Leonid" }',
    ...testIsArray({ name: 'Leonid' })
  },
  {
    name: 'true | []',
    ...testIsArray([])
  },
  {
    name: 'true | [0, 1]',
    ...testIsArray([0, 1])
  }
];
