const getCleanedWord = (dirtyWord: string): string => {
  return dirtyWord
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '');
};

export const isPalindrome_0 = (word: string): boolean => {
  if (word.length === 0) {
    return false;
  }
  if (word.length === 1) {
    return true;
  }

  const cleanedWord = getCleanedWord(word);
  let startIndex = 0;
  let endIndex = cleanedWord.length - 1;

  while (startIndex < endIndex) {
    console.log(cleanedWord[startIndex]);
    console.log(cleanedWord[endIndex]);

    if (cleanedWord[startIndex] !== cleanedWord[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }

  return true;
};

export const isPalindrome_1 = (word: string): boolean => {
  const cleanedWord = getCleanedWord(word);
  const wordLength = cleanedWord.length;
  const middleIndex = Math.floor(wordLength / 2);
  const firstHalf = cleanedWord.slice(0, middleIndex);
  const secondHalf = cleanedWord.slice(
    wordLength % 2 === 0 ? middleIndex : middleIndex + 1,
    wordLength
  );
  const secondHalfReversed = secondHalf.split('').reverse().join('');

  return firstHalf === secondHalfReversed;
};
