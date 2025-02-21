import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';
import { push } from '../1_push/push.ts';

export type SliceArgs<ArrayItem> = {
  array: ArrayItem[];
  startIndex?: number;
  endIndex?: number;
};

export const slice = <ArrayItem>({
  array,
  startIndex,
  endIndex
}: {
  array: ArrayItem[];
  startIndex?: number;
  endIndex?: number;
}): [] | ArrayItem[] => {
  if (isEmpty({ object: array })) return [];

  if (!startIndex) {
    startIndex = 0;
  }
  if (!endIndex) {
    endIndex = array.length;
  }

  // + startIndex OUT
  if (startIndex >= array.length) {
    return [];
  }

  // - startIndex OUT,
  if (startIndex < -array.length) {
    startIndex = 0;
  }

  // - startIndex IN,
  if (-array.length <= startIndex && startIndex < 0) {
    startIndex = startIndex + array.length;
  }

  // + endIndex OUT
  if (endIndex >= array.length) {
    endIndex = array.length;
  }

  // - endIndex OUT
  if (endIndex < -array.length) {
    endIndex = 0;
  }

  // - endIndex IN
  if (-array.length <= endIndex && endIndex < 0) {
    endIndex = endIndex + array.length;
  }

  // +- startIndex >= endIndex,
  if (startIndex >= endIndex) return [];

  const result: ArrayItem[] = [];

  for (let i = startIndex; i < endIndex; i++) {
    push<ArrayItem>({ array: result, newArrayItem: array[i] });
  }

  return result;
};
