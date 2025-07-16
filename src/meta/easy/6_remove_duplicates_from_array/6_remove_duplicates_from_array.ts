// O(n)

export const removeDuplicatesFromArray = (array: string[] | number[]): -1 | 0 | number => {
  if (typeof array === 'undefined') return -1;
  if (array.length === 0) return 0;

  const uniqueValuesSet = new Set<string | number>();
  let uniqueValuesCounter = 0;

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (!uniqueValuesSet.has(currentValue)) {
      uniqueValuesSet.add(currentValue);
      array[uniqueValuesCounter] = currentValue;
      uniqueValuesCounter++;
    }
  }

  const fillRemainingItemsWithEmptyValue = ({
    array,
    startIndex
  }: {
    array: string[] | number[];
    startIndex: number;
  }): void => {
    for (let i = startIndex; i < array.length; i++) {
      array[i] = typeof array[0] === 'string' ? '' : 0;
    }
  };

  fillRemainingItemsWithEmptyValue({ array, startIndex: uniqueValuesCounter });

  return uniqueValuesCounter;
};
