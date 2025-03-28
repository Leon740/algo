import { isArray } from '../0_utils/1_isArray/isArray.ts';
import { validateIndexes } from '../0_utils/5_validateIndexes/validateIndexes.ts';
import { push } from '../2_push/push.ts';
import { slice } from '../7_slice/slice.ts';

export const splice = <Item>({
  array,
  startIndex,
  deleteCount,
  newItems
}: {
  array: Item[];
  startIndex: number;
  deleteCount?: number;
  newItems?: Item[];
}): [] | Item[] => {
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
  const allRemovedItems: Item[] = [];
  for (let i = startI; i < endI; i++) {
    push({ array: allRemovedItems, newLastItems: array[i] });
  }

  // 1) save ending chunk [endIndex ... length]
  const endingChunk = slice({ array, startIndex: endI, endIndex: array.length });

  // 2) cut array
  array.length = startI;

  // 3) push new items
  const hasNewItems = isArray(newItems);
  if (hasNewItems) {
    for (let i = 0; i < newItems!.length; i++) {
      push({ array, newLastItems: newItems![i] });
    }
  }

  // 4) push ending chunk
  for (let i = 0; i < endingChunk.length; i++) {
    push({ array, newLastItems: endingChunk[i] });
  }

  return allRemovedItems;
};
