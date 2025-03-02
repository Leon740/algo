import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';
import { pop } from '../2_pop/pop.ts';

export const shift = <ArrayItem>({ array }: { array: ArrayItem[] }): [] | ArrayItem => {
  if (isEmpty({ object: array })) return [];

  const firstArrayItem = array[0];

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  pop({ array });

  return firstArrayItem;
};
