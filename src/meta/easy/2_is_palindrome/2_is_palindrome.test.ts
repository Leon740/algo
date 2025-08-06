import { Test } from '@src/utils/log.ts';
import { isPalindrome_0 } from './2_is_palindrome.ts';

export const isPalindromeTests: Test[] = [
  {
    name: 'returns {false} if value is empty {""}',
    expected: false,
    actual: isPalindrome_0('')
  },
  {
    name: 'returns {true} if is one char palindrome {" "}',
    expected: true,
    actual: isPalindrome_0(' ')
  },
  {
    name: 'returns {true} if is one char palindrome {"a"}',
    expected: true,
    actual: isPalindrome_0('a')
  },
  {
    name: 'returns {true} if is palindrome {"aba"} of odd length',
    expected: true,
    actual: isPalindrome_0('aba')
  },
  {
    name: 'returns {false} if is _not palindrome {"abc"} of odd length',
    expected: false,
    actual: isPalindrome_0('abc')
  },
  {
    name: 'returns {true} if is palindrome {"abba"} of even length',
    expected: true,
    actual: isPalindrome_0('abba')
  },
  {
    name: 'returns {false} if is _not palindrome {"abcd"} of even length',
    expected: false,
    actual: isPalindrome_0('abcd')
  },
  {
    name: 'returns {true} if is palindrome with spaces {"a b a"}',
    expected: true,
    actual: isPalindrome_0('a b a')
  },
  {
    name: 'returns {true} if is palindrome with multiple registers {"a B A"}',
    expected: true,
    actual: isPalindrome_0('a B A')
  },
  {
    name: 'returns {true} if is palindrome with only alphabetical chars {"A man, a plan, a canal: Panama"}',
    expected: true,
    actual: isPalindrome_0('A man, a plan, a canal: Panama')
  }
];
