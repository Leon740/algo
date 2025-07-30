import { Test } from '@src/utils/log.ts';
import { addStringifiedNums } from './13_add_stringified_nums.ts';

export const addStringifiedNumsTests: Test[] = [
  {
    name: 'returns sum {"0"}, nums0 = {"0"}, nums1 = {"0"}',
    expected: '0',
    actual: addStringifiedNums('0', '0')
  },
  {
    name: 'returns sum {"20"}, nums0 = {"10"}, nums1 = {"10"}',
    expected: '20',
    actual: addStringifiedNums('10', '10')
  },
  {
    name: 'returns sum {"142"}, nums0 = {"19"}, nums1 = {"123"}',
    expected: '142',
    actual: addStringifiedNums('19', '123')
  }
];
