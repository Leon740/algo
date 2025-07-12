import { Test } from '@src/utils/log.ts';
import { isPalindrome } from './2_is_palindrome.ts';

export const isPalindromeTests: Test[] = [
  {
    name: 'returns -1 if value is undefined',
    expected: -1,
    actual: isPalindrome()
  },
  {
    name: 'returns 0 if value is empty',
    expected: 0,
    actual: isPalindrome('')
  },
  {
    name: 'returns true if is one char palindrome {1}',
    expected: true,
    actual: isPalindrome(1)
  },
  {
    name: 'returns true if is number palindrome {121}',
    expected: true,
    actual: isPalindrome(121)
  },
  {
    name: 'returns false if is _not number palindrome {-121}',
    expected: false,
    actual: isPalindrome(-121)
  },
  {
    name: 'returns true if is string palindrome {aba}',
    expected: true,
    actual: isPalindrome('aba')
  },
  {
    name: 'returns false if is _not string palindrome {abc}',
    expected: false,
    actual: isPalindrome('abc')
  },
  {
    name: 'returns true if is palindrome with spaces {a b a}',
    expected: true,
    actual: isPalindrome('a b a')
  },
  {
    name: 'returns true if is palindrome with multiple registers {a B A}',
    expected: true,
    actual: isPalindrome('a B A')
  }
];
