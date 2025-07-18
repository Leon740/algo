import { getInsertIndexTests } from './meta/easy/8_search_insert/8_search_insert.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'removeDuplicatesFromArrayTests',
  tests: getInsertIndexTests
});
