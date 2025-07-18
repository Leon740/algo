import { mergeTwoSortedArraysTests } from './meta/easy/9_merge_two_sorted_arrays/9_merge_two_sorted_array.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'removeDuplicatesFromArrayTests',
  tests: mergeTwoSortedArraysTests
});
