export const push = <ArrayItem>({
  array,
  newItem
}: {
  array: ArrayItem[];
  newItem: ArrayItem;
}): number => {
  const indexForNewItem = array.length;
  array[indexForNewItem] = newItem;

  const newArrayLength = array.length;
  return newArrayLength;
};
