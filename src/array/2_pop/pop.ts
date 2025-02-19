import { isEmpty } from '@src/object/isEmpty/isEmpty.ts';

export const pop = <ArrayItem>(array: ArrayItem[]): [] | ArrayItem => {
  if (isEmpty(array)) return [];

  const lastArrayItem = array[array.length - 1];

  array.length--;

  return lastArrayItem;
};
