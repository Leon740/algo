import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';
import { push } from '../1_push/push.ts';
import { validateIndexes } from '../6_validateIndexes/validateIndexes.ts';
import { slice } from '../7_slice/slice.ts';

export type SpliceArgs<ArrayItem> = {
  array: ArrayItem[];
  startIndex: number;
  deleteCount?: number;
  newItems?: ArrayItem[];
};

export const splice = <ArrayItem>({
  array,
  startIndex,
  deleteCount,
  newItems
}: SpliceArgs<ArrayItem>): [] | ArrayItem[] => {
  const isInvalidDeleteCount = deleteCount && deleteCount < 0;
  if (isInvalidDeleteCount) return [];

  const endIndex = deleteCount ? startIndex + deleteCount : array.length;

  const { startIndex: startI, endIndex: endI } = validateIndexes({
    array,
    startIndex,
    endIndex
  });

  const isInvalidIndexes = startI === 0 && endI === 0;
  if (isInvalidIndexes) {
    return [];
  }

  // [0 ... startIndex ... endIndex ... array.length - 1]

  // 0) collect items to remove
  const allRemovedItems: ArrayItem[] = [];
  for (let i = startI; i < endI; i++) {
    push({ array: allRemovedItems, newItem: array[i] });
  }

  // 1) save ending chunk [endIndex ... length]
  const endingChunk = slice({ array, startIndex: endI, endIndex: array.length });

  // 2) cut array
  array.length = startI;

  // 3) push new items
  const hasNewItems = !isEmpty({ object: newItems });
  if (hasNewItems) {
    for (let i = 0; i < newItems!.length; i++) {
      push({ array, newItem: newItems![i] });
    }
  }

  // 4) push ending chunk
  for (let i = 0; i < endingChunk.length; i++) {
    push({ array, newItem: endingChunk[i] });
  }

  return allRemovedItems;
};
