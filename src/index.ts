import { isValidParenthesesTests } from './meta/easy/4_is_valid_parentheses/4_is_valid_parentheses.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'getTwoIndexesOfNumbersResultingToTargetTests',
  tests: isValidParenthesesTests
});
