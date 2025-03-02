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
    name: 'false || not defined',
    ...testIsArray()
  },
  {
    name: 'false || string __"Leonid"',
    ...testIsArray('Leonid')
  },
  {
    name: 'false || number __23',
    ...testIsArray(23)
  },
  {
    name: 'false || boolean __true',
    ...testIsArray(true)
  },
  {
    name: 'false || null',
    ...testIsArray(null)
  },
  {
    name: 'false || undefined',
    ...testIsArray(undefined)
  },
  {
    name: 'false || empty object __{}',
    ...testIsArray({})
  },
  {
    name: 'false || __object { name: "Leonid" }',
    ...testIsArray({ name: 'Leonid' })
  },
  {
    name: 'true || empty array __[]',
    ...testIsArray([])
  },
  {
    name: 'true || array __[1]',
    ...testIsArray([1])
  },
  {
    name: 'true || array __[a, b, c]',
    ...testIsArray(['a', 'b', 'c'])
  }
];
