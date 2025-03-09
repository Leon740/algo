export const push = <Item>({
  array,
  newLastItems
}: {
  array: Item[];
  newLastItems: Item[];
}): number => {
  for (let index = 0; index < newLastItems.length; index++) {
    pushOneItem({ array, newLastItem: newLastItems[index] });
  }

  const newLength = array.length;
  return newLength;
};

const pushOneItem = <Item>({
  array,
  newLastItem
}: {
  array: Item[];
  newLastItem: Item;
}): Item[] => {
  const indexForNewLastItem = array.length;
  array[indexForNewLastItem] = newLastItem;

  return array;
};
