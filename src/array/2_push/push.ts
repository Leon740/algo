import { isArray } from '@src/array/0_utils/1_isArray/isArray.ts';

export const push = <Item>({
  array,
  newLastItems
}: {
  array: Item[];
  newLastItems: Item[] | Item;
}): number => {
  if (isArray(newLastItems)) {
    for (let index = 0; index < (newLastItems as Item[]).length; index++) {
      pushOneItem({ array, newLastItem: (newLastItems as Item[])[index] });
    }
  } else {
    pushOneItem({ array, newLastItem: newLastItems });
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
