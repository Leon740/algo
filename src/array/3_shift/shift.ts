import { isEmpty } from '@src/object/isEmpty/isEmpty.ts';

export const shift = <ArrayItem>(array: ArrayItem[]): [] | ArrayItem => {
  if (isEmpty(array)) return [];

  const firstArrayItem = array[0];

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length--;

  return firstArrayItem;
};
