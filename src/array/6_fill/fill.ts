import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';

export const fill = <ArrayItem>({
  array,
  value,
  startIndex = 0,
  endIndex = array.length
}: {
  array: ArrayItem[];
  value: ArrayItem;
  startIndex?: number;
  endIndex?: number;
}): ArrayItem[] => {
  if (isEmpty({ object: array })) return [];

  for (let i = startIndex; i < endIndex; i++) {
    array[i] = value;
  }

  return array;
};
