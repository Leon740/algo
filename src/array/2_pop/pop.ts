import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';

export const pop = <ArrayItem>({ array }: { array: ArrayItem[] }): [] | ArrayItem => {
  if (isEmpty({ object: array })) return [];

  const lastArrayItem = array[array.length - 1];

  array.length--;

  return lastArrayItem;
};
