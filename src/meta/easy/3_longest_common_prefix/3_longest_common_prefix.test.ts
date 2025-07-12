import { Test } from '@src/utils/log.ts';
import { getLongestCommonPrefixOfArray } from './3_longest_common_prefix.ts';

export const getLongestCommonPrefixOfArrayTests: Test[] = [
  {
    name: 'returns -1 if strings is undefined',
    expected: -1,
    actual: getLongestCommonPrefixOfArray()
  },
  {
    name: 'returns empty string if strings array is empty',
    expected: '',
    actual: getLongestCommonPrefixOfArray([])
  },
  {
    name: '0) returns empty string if strings is empty',
    expected: '',
    actual: getLongestCommonPrefixOfArray([])
  },
  {
    name: '1) returns entire word if strings is one word',
    expected: 'dog',
    actual: getLongestCommonPrefixOfArray(['dog'])
  },
  {
    name: '2) returns empty string if longest common prefix is _not found',
    expected: '',
    actual: getLongestCommonPrefixOfArray(['dog', 'cat'])
  },
  {
    name: '3) returns longest common prefix found',
    expected: 'fl',
    actual: getLongestCommonPrefixOfArray(['flower', 'flow', 'flight'])
  }
];
