export const getInsertIndex = (
  { number, array }: { number: number; array: number[] } = { number: 0, array: [] }
): number => {
  if (!array || array.length === 0) return 0;

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === number) return mid;
    if (array[mid] < number) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
