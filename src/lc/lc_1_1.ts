import { log } from '@src/utils/log.ts';

export function lc_1_1() {
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

  console.group('swap');

  const swapArrayItems = (
    array?: string[],
    leftIndex?: number,
    rightIndex?: number
  ): false | string[] => {
    if (!array || leftIndex === undefined || rightIndex === undefined) return false;

    [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];

    return array;
  };

  const callSwapArrayItemsWithNoArgs = swapArrayItems();
  log(
    callSwapArrayItemsWithNoArgs,
    callSwapArrayItemsWithNoArgs === false,
    'if no args provided, return false'
  );

  const callSwapArrayItems = swapArrayItems(['h', 'e', 'l', 'l', 'o'], 1, 4);
  log(
    callSwapArrayItems,
    JSON.stringify(callSwapArrayItems) === JSON.stringify(['h', 'o', 'l', 'l', 'e']),
    'swap e_1 with o_4'
  );

  console.groupEnd();

  const reverseVowels = (string: string = ''): string => {
    if (!string) return '';

    const stringArray = string.split('');
    let leftIndex = 0;
    let rightIndex = stringArray.length - 1;

    while (leftIndex < rightIndex) {
      while (leftIndex < rightIndex && !isVowel(stringArray[leftIndex])) {
        leftIndex++;
      }

      while (leftIndex < rightIndex && !isVowel(stringArray[rightIndex])) {
        rightIndex--;
      }
      swapArrayItems(stringArray, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }

    return stringArray.join('');
  };

  console.group('reverseVowels');

  const callReverseVowelsWithNoArgs = reverseVowels();
  log(
    callReverseVowelsWithNoArgs,
    callReverseVowelsWithNoArgs === '',
    'if no args provided return empty string'
  );

  const callReverseVowels = reverseVowels('IceCreAm');
  log(callReverseVowels, callReverseVowels === 'AceCreIm', 'reverse string vowels');

  console.groupEnd();
}
