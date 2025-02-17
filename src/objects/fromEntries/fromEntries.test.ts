import { Test } from '@src/utils/log.ts';
import { fromEntries } from './fromEntries.ts';

export const entriesToTest: Record<string, [string, any][]> = {
  empty: [],
  regular: [
    ['a', 'a'],
    ['2', 2],
    ['false', false],
    ['true', true],
    ['null', null],
    ['nested', { nestedA: 'nestedA' }]
  ]
};

export const fromEntriesTests: Test[] = [
  {
    name: 'empty object if entries is empty',
    expected: Object.fromEntries(entriesToTest.empty),
    actual: fromEntries({ entries: entriesToTest.empty })
  },
  {
    name: 'full object if entries is full',
    expected: Object.fromEntries(entriesToTest.regular),
    actual: fromEntries({ entries: entriesToTest.regular })
  }
];
