import { Test } from '@src/utils/log.ts';
import { arrayContainsDuplicates } from './12_array_contains_duplicates.ts';

export const arrayContainsDuplicatesTests: Test[] = [
  {
    name: '0',
    expected: true,
    actual: arrayContainsDuplicates({ nums: [1, 2, 3, 1], k: 3 })
  },
  {
    name: '1',
    expected: true,
    actual: arrayContainsDuplicates({ nums: [1, 0, 0, 1], k: 1 })
  },
  {
    name: '2',
    expected: false,
    actual: arrayContainsDuplicates({ nums: [1, 2, 3, 1, 2, 3], k: 2 })
  }
];
