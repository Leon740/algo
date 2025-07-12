import { Test } from '@src/utils/log.ts';
import { isValidParentheses } from './4_is_valid_parentheses.ts';

export const isValidParenthesesTests: Test[] = [
  {
    name: 'returns -1 if value is undefined',
    expected: -1,
    actual: isValidParentheses()
  },
  {
    name: 'returns false if value is empty',
    expected: false,
    actual: isValidParentheses('')
  },
  {
    name: 'returns false if value length is odd',
    expected: false,
    actual: isValidParentheses('(')
  },
  {
    name: '0) returns true if valid parentheses ()',
    expected: true,
    actual: isValidParentheses('()')
  },
  {
    name: '1) returns true if valid parentheses ([{}])',
    expected: true,
    actual: isValidParentheses('([{}])')
  },
  {
    name: '2) returns true if valid parentheses ()[]{}',
    expected: true,
    actual: isValidParentheses('()[]{}')
  },
  {
    name: 'returns false if is not valid parentheses',
    expected: false,
    actual: isValidParentheses('([{)])')
  }
];
