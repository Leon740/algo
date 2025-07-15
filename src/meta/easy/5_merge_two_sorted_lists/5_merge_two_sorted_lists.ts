// O(n + m)
// n = length of left
// m = length of right

export const getMergedSortedListOutOfTwoSortedLists = ({
  left,
  right
}: {
  left: number[];
  right: number[];
}): -1 | 0 | number[] => {
  if (!left || !right) {
    return -1;
  }

  const isEmptyList = (list: number[]): boolean => list.length === 0;

  if (isEmptyList(left) && isEmptyList(right)) return 0;

  const mergedList = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedList.push(left[leftIndex++]);
    } else if (left[leftIndex] === right[rightIndex]) {
      mergedList.push(left[leftIndex++]);
      mergedList.push(right[rightIndex++]);
    } else {
      mergedList.push(right[rightIndex++]);
    }
  }

  return mergedList.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};
