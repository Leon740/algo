import { addStringifiedNumsTests } from './meta/easy/13_add_stringified_nums/13_add_stringified_nums.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'removeDuplicatesFromArrayTests',
  tests: addStringifiedNumsTests
});
