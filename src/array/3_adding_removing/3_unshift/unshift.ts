export const unshift = <Item>({
  array,
  newFirstItems
}: {
  array: Item[];
  newFirstItems: Item[];
}): number => {
  for (let index = newFirstItems.length - 1; index >= 0; index--) {
    unshiftOneItem<Item>({ array, newFirstItem: newFirstItems[index] });
  }

  const newLength = array.length;
  return newLength;
};

const unshiftOneItem = <Item>({
  array,
  newFirstItem
}: {
  array: Item[];
  newFirstItem: Item;
}): Item[] => {
  for (let index = array.length; index > 0; index--) {
    array[index] = array[index - 1];
  }

  array[0] = newFirstItem;

  return array;
};
