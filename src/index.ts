import { arrayContainsDuplicatesTests } from './meta/easy/12_array_contains_duplicates/12_contains_duplicate.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'removeDuplicatesFromArrayTests',
  tests: arrayContainsDuplicatesTests
});
