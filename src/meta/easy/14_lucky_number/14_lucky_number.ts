type NumberOccurrenceMap = Map<number, number>;
type MaxLuckyNumber = number | -1;

const createNumberOccurrenceMap = (numbers: number[]): NumberOccurrenceMap => {
  const numberOccurrenceMap: NumberOccurrenceMap = new Map();

  for (const currentNumber of numbers) {
    numberOccurrenceMap.set(currentNumber, (numberOccurrenceMap.get(currentNumber) ?? 0) + 1);
  }

  console.log(numberOccurrenceMap);
  return numberOccurrenceMap;
};

const getMaxLuckyNumberInNumberOccurrenceMap = (
  numberOccurrenceMap: NumberOccurrenceMap
): MaxLuckyNumber => {
  let maxLuckyNumber = -1;

  for (const [currentNumber, currentNumberOccurrence] of numberOccurrenceMap) {
    const isCurrentNumberLucky = currentNumber === currentNumberOccurrence;

    if (isCurrentNumberLucky && maxLuckyNumber < currentNumber) {
      maxLuckyNumber = currentNumber;
    }
  }

  return maxLuckyNumber;
};

export const getLuckyNumberInArray = (numbers: number[]): MaxLuckyNumber => {
  const numberOccurrenceMap = createNumberOccurrenceMap(numbers);
  const maxLuckyNumber = getMaxLuckyNumberInNumberOccurrenceMap(numberOccurrenceMap);
  return maxLuckyNumber;
};
