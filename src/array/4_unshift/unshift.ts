export const unshift = <ArrayItem>({
  array,
  newItem
}: {
  array: ArrayItem[];
  newItem: ArrayItem;
}): number => {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = newItem;

  return array.length;
};
