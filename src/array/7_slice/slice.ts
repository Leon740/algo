import { validateIndexes } from '../0_utils/5_validateIndexes/validateIndexes.ts';
import { push } from '../2_push/push.ts';

export const slice = <Item>({
  array,
  startIndex,
  endIndex
}: {
  array: Item[];
  startIndex?: number;
  endIndex?: number;
}): [] | Item[] => {
  const { startIndex: startI, endIndex: endI } = validateIndexes({ array, startIndex, endIndex });

  const isInvalidIndexes = startI === 0 && endI === 0;
  if (isInvalidIndexes) {
    return [];
  }

  const result: Item[] = [];

  for (let i = startI; i < endI; i++) {
    push<Item>({ array: result, newLastItems: array[i] });
  }

  return result;
};
