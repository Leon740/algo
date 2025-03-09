export const push = <Item>({
  array,
  newLastItem
}: {
  array: Item[];
  newLastItem: Item;
}): number => {
  const indexForNewLastItem = array.length;
  array[indexForNewLastItem] = newLastItem;

  const newLength = array.length;
  return newLength;
};
