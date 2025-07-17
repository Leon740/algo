// O(n * m)
// n = searchableWord
// m = entireString

export const getIndexOfFirstOccurrenceInString = (
  { searchableWord, entireString }: { searchableWord: string; entireString: string } = {
    searchableWord: '',
    entireString: ''
  }
): number => {
  if (searchableWord?.length === 0 || entireString?.length === 0) {
    return -1;
  }

  if (searchableWord.length === entireString.length && searchableWord === entireString) {
    return 0;
  }

  const searchableWordLength = searchableWord.length;

  for (let i = 0; i <= entireString.length - searchableWordLength; i++) {
    const potentialWord = entireString.slice(i, i + searchableWordLength);
    if (potentialWord === searchableWord) {
      return i;
    }
  }

  return -1;
};
