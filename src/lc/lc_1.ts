import { log } from '@src/utils/log.ts';

export function lc_1() {
  const isVowel = (char: string = ''): boolean => {
    if (typeof char !== 'string') return false;

    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

    return vowelsSet.has(char.toLowerCase());
  };

  console.group('isVowel');

  const callIsVowelWithNoArgs = isVowel();
  log(callIsVowelWithNoArgs, callIsVowelWithNoArgs === false, 'if no args return false');

  const callIsVowelWithIncorrectType = isVowel(1);
  log(
    callIsVowelWithIncorrectType,
    callIsVowelWithIncorrectType === false,
    'if incorrect type return false'
  );

  const callIsVowelWithLowerCaseVowel = isVowel('a');
  log(
    callIsVowelWithLowerCaseVowel,
    callIsVowelWithLowerCaseVowel === true,
    'if vowel return true'
  );

  const callIsVowelWithUpperCaseVowel = isVowel('A');
  log(
    callIsVowelWithUpperCaseVowel,
    callIsVowelWithUpperCaseVowel === true,
    'if vowel return true'
  );

  const callIsVowelWithConsonant = isVowel('b');
  log(callIsVowelWithConsonant, callIsVowelWithConsonant === false, 'if consonant return false');

  console.groupEnd();

  const getVowelsArrayInString = (str: string = ''): string[] => {
    if (typeof str !== 'string') return [];

    const vowelsArray: string[] = [];

    for (let i = 0; i < str.length; i++) {
      if (isVowel(str[i])) {
        vowelsArray.push(str[i]);
      }
    }

    return vowelsArray;
  };

  console.group('getVowelsArrayInString');

  const callGetVowelsArrayInStringWithNoStr = getVowelsArrayInString();
  log(
    callGetVowelsArrayInStringWithNoStr,
    callGetVowelsArrayInStringWithNoStr.length === 0,
    'if no args return empty array'
  );

  const callGetVowelsArrayInStringWithIncorrectType = getVowelsArrayInString(1);
  log(
    callGetVowelsArrayInStringWithIncorrectType,
    callGetVowelsArrayInStringWithIncorrectType.length === 0,
    'if incorrect type return empty array'
  );

  const callGetVowelsArrayInString = getVowelsArrayInString('leetcode');
  log(
    callGetVowelsArrayInString,
    JSON.stringify(callGetVowelsArrayInString) === JSON.stringify(['e', 'e', 'o', 'e']),
    'string return vowels array'
  );

  console.groupEnd();

  const reverseVowelsInString = (str: string = ''): string => {
    if (typeof str !== 'string') return '';

    const vowelsArray = getVowelsArrayInString(str);
    let reversedVowelsString = '';

    for (let i = 0; i < str.length; i++) {
      reversedVowelsString += isVowel(str[i]) ? vowelsArray.pop() : str[i];
    }

    return reversedVowelsString;
  };

  console.group('reverseVowelsInString');

  const callReverseVowelsInStringWithNoArgs = reverseVowelsInString();
  log(
    callReverseVowelsInStringWithNoArgs,
    callReverseVowelsInStringWithNoArgs === '',
    'if no args return empty string'
  );

  const callReverseVowelsInStringWithIncorrectType = reverseVowelsInString(1);
  log(
    callReverseVowelsInStringWithIncorrectType,
    callReverseVowelsInStringWithIncorrectType === '',
    'if incorrect type return empty string'
  );

  const callReverseVowelsInString = reverseVowelsInString('leetcode');
  log(
    callReverseVowelsInString,
    callReverseVowelsInString === 'leotcede',
    'string return reversed vowels'
  );

  console.groupEnd();
}
