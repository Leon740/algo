// O(n)
export const getTwoIndexesOfNumbersResultingToTarget = (
  {
    numbers,
    target
  }: {
    numbers: number[];
    target: number;
  } = {
    numbers: [],
    target: 0
  }
): -1 | 0 | [number, number] => {
  if (typeof numbers === 'undefined' || typeof target === 'undefined') return -1;

  if (numbers?.length === 0) return 0;

  const numbersIndexesMap = new Map<number, number>();

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    const subtractionOfTargetAndCurrentNumber = target - currentNumber;

    if (numbersIndexesMap.has(subtractionOfTargetAndCurrentNumber)) {
      return [numbersIndexesMap.get(subtractionOfTargetAndCurrentNumber)!, i];
    }

    numbersIndexesMap.set(currentNumber, i);
  }

  return -1;
};
