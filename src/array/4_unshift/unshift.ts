export const unshift = <ArrayItem>({
  array,
  newArrayItem
}: {
  array: ArrayItem[];
  newArrayItem: ArrayItem;
}): number => {
  for (let i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = newArrayItem;

  return array.length;
};
