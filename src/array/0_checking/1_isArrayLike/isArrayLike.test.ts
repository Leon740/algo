import { type Test } from '@src/utils/log.ts';
import { isArrayLike } from './isArrayLike.ts';

export const allTestsOfIsArrayLike: Test[] = [
  {
    name: 'false || undefined',
    expected: false,
    actual: isArrayLike()
  },
  {
    name: 'false || null',
    expected: false,
    actual: isArrayLike(null)
  },
  {
    name: 'false || object does not contain length prop and zero element __{ name: "Leonid" }',
    expected: false,
    actual: isArrayLike({ name: 'Leonid' })
  },
  {
    name: 'true || object contains length prop and zero element __{ [0]: "Leonid", length: 1 }',
    expected: true,
    actual: isArrayLike({ [0]: 'Leonid', length: 1 })
  },
  {
    name: 'true || object is array __[1, 2]',
    expected: true,
    actual: isArrayLike([1, 2])
  }
];
