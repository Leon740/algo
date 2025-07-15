import { Test } from '@src/utils/log.ts';
import { getMergedSortedListOutOfTwoSortedLists } from './5_merge_two_sorted_lists.ts';

export const getMergedSortedListOutOfTwoSortedListsTests: Test[] = [
  {
    name: 'returns -1 if one of lists (left) is undefined',
    expected: -1,
    actual: getMergedSortedListOutOfTwoSortedLists({ right: [] })
  },
  {
    name: 'returns -1 if one of lists (right) is undefined',
    expected: -1,
    actual: getMergedSortedListOutOfTwoSortedLists({ left: [] })
  },
  {
    name: 'returns 0 if both of lists are empty',
    expected: 0,
    actual: getMergedSortedListOutOfTwoSortedLists({ left: [], right: [] })
  },
  {
    name: '0) returns merged sorted list of two sorted lists of same length',
    expected: [1, 1, 2, 3, 4, 4],
    actual: getMergedSortedListOutOfTwoSortedLists({ left: [1, 2, 4], right: [1, 3, 4] })
  },
  {
    name: '1) returns merged sorted list of two sorted lists of different length',
    expected: [1, 1, 2, 3, 4, 4, 5, 6],
    actual: getMergedSortedListOutOfTwoSortedLists({ left: [1, 2, 4], right: [1, 3, 4, 5, 6] })
  }
];
