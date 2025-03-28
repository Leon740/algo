import { isEmpty } from '@src/array/0_utils/4_isEmpty/isEmpty.ts';
import { pop } from '@src/array/3_pop/pop.ts';

export const shift = <Item>(array: Item[]): undefined | Item => {
  if (isEmpty(array)) return undefined;

  const removedFirstItem = array[0];

  for (let index = 0; index < array.length; index++) {
    array[index] = array[index + 1];
  }

  pop(array);

  return removedFirstItem;
};
