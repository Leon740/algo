import { isEmpty } from '@src/array/1_checking/4_isEmpty/isEmpty.ts';

export const pop = <Item>(array: Item[]): undefined | Item => {
  if (isEmpty(array)) return undefined;

  const removedLastItem = array[array.length - 1];
  array.length--;

  return removedLastItem;
};
