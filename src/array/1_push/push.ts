export const push = <ArrayItem>({
  array,
  newArrayItem
}: {
  array: ArrayItem[];
  newArrayItem: ArrayItem;
}): number => {
  const indexForNewArrayItem = array.length;
  array[indexForNewArrayItem] = newArrayItem;

  const newArrayLength = array.length;
  return newArrayLength;
};
