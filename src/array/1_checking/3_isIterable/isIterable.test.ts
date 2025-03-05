import { type Test } from '@src/utils/log.ts';
import { isIterable } from './isIterable.ts';

export const allTestsOfIsIterable: Test[] = [
  {
    name: 'false | undefined',
    expected: false,
    actual: isIterable(undefined)
  },
  {
    name: 'false | null',
    expected: false,
    actual: isIterable(null)
  },
  {
    name: 'false | {}',
    expected: false,
    actual: isIterable({})
  },
  {
    name: 'true | Leonid',
    expected: true,
    actual: isIterable('Leonid')
  },
  {
    name: 'true | []',
    expected: true,
    actual: isIterable([])
  },
  {
    name: 'true | [1]',
    expected: true,
    actual: isIterable([1])
  },
  {
    name: 'true | Set()',
    expected: true,
    actual: isIterable(new Set())
  },
  {
    name: 'true | Set([0, 1])',
    expected: true,
    actual: isIterable(new Set([0, 1]))
  },
  {
    name: 'true | Map()',
    expected: true,
    actual: isIterable(new Map())
  },
  {
    name: 'true | Map([[a, 0]])',
    expected: true,
    actual: isIterable(new Map([['a', 0]]))
  }
];
