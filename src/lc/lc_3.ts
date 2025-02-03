import { log } from '@src/utils/log.ts';

export function lc_3() {
  console.group('isSubsequence');

  const isSubsequence = (s: string = '', t: string = ''): boolean => {
    if (!s || !t) return false;

    if (s === t) return true;

    let indexS = 0;

    for (let i = 0; i < t.length; i++) {
      if (s[indexS] === t[i]) {
        indexS++;
      }

      if (indexS === s.length) {
        return true;
      }
    }

    return false;
  };

  const callIsSubsequenceWithNoArgs = isSubsequence();
  log(
    callIsSubsequenceWithNoArgs,
    callIsSubsequenceWithNoArgs === false,
    'if args are not provided return false'
  );

  const callIsSubsequenceWithOneArg = isSubsequence('a');
  log(
    callIsSubsequenceWithOneArg,
    callIsSubsequenceWithOneArg === false,
    'if one arg is not provided return false'
  );

  const callIsSubsequenceWithSameStrings = isSubsequence('abc', 'abc');
  log(
    callIsSubsequenceWithSameStrings,
    callIsSubsequenceWithSameStrings === true,
    'if same strings return true'
  );

  const callIsSubsequenceTrue = isSubsequence('aceg', 'abcdefg');
  log(callIsSubsequenceTrue, callIsSubsequenceTrue === true, 'aceg isSubsequence of abcdefg');

  const callIsSubsequenceFalse = isSubsequence('aecg', 'abcdefg');
  log(callIsSubsequenceFalse, callIsSubsequenceFalse === false, 'aecg !isSubsequence of abcdefg');

  console.groupEnd();
}
