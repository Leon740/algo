import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';
import { push } from '../1_push/push.ts';

export const slice = <ArrayItem>({
  array,
  startIndex = 0,
  endIndex = array.length
}: {
  array: ArrayItem[];
  startIndex?: number;
  endIndex?: number;
}): [] | ArrayItem[] => {
  if (isEmpty({ object: array })) return [];

  const isStartIndexOutOfRange = startIndex > array.length || startIndex >= endIndex;
  if (isStartIndexOutOfRange) return [];

  const isEndIndexOutOfRange = endIndex > array.length;
  if (isEndIndexOutOfRange) {
    endIndex = array.length;
  }

  const result: ArrayItem[] = [];

  for (let i = startIndex; i <= endIndex - 1; i++) {
    push<ArrayItem>({ array: result, newArrayItem: array[i] });
  }

  return result;
};
