import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';
import { push } from '../1_push/push.ts';

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

  // startIndex positive OUT of range
  if (startIndex >= array.length) {
    return [];
  }

  // startIndex negative OUT of range
  if (startIndex < -array.length) {
    startIndex = 0;
  }

  // startIndex negative IN range
  if (-array.length <= startIndex && startIndex < 0) {
    startIndex = startIndex + array.length;
  }

  // endIndex positive OUT of range
  if (endIndex >= array.length) {
    endIndex = array.length;
  }

  // endIndex negative OUT of range
  if (endIndex < -array.length) {
    endIndex = 0;
  }

  // endIndex negative IN of range
  if (-array.length <= endIndex && endIndex < 0) {
    endIndex = endIndex + array.length;
  }

  if (startIndex >= endIndex) return [];

  const result: ArrayItem[] = [];

  for (let i = startIndex; i < endIndex; i++) {
    push<ArrayItem>({ array: result, newArrayItem: array[i] });
  }

  return result;
};
