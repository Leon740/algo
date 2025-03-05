import { type Test } from '@src/utils/log.ts';
import { isArrayLike } from './isArrayLike.ts';

export const allTestsOfIsArrayLike: Test[] = [
  {
    name: 'false | undefined',
    expected: false,
    actual: isArrayLike(undefined)
  },
  {
    name: 'false | null',
    expected: false,
    actual: isArrayLike(null)
  },
  {
    name: 'false | () => {}',
    expected: false,
    actual: isArrayLike(() => {})
  },
  {
    name: 'false | Set([0, 1, 2, 2])',
    expected: false,
    actual: isArrayLike(new Set([0, 1, 2, 2]))
  },
  {
    name: 'false | Map([["a", 0]])',
    expected: false,
    actual: isArrayLike(new Map([['a', 0]]))
  },
  {
    name: 'false | { name: "Leonid" }',
    expected: false,
    actual: isArrayLike({ name: 'Leonid' })
  },
  {
    name: 'true | { [0]: "a", length: 1 }',
    expected: true,
    actual: isArrayLike({ [0]: 'a', length: 1 })
  },
  {
    name: 'true | Leonid',
    expected: true,
    actual: isArrayLike('Leonid')
  },
  {
    name: 'true | []',
    expected: true,
    actual: isArrayLike([])
  },
  {
    name: 'true | [0, 1]',
    expected: true,
    actual: isArrayLike([0, 1])
  }
];
