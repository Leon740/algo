import { push } from '../1_push/push.ts';
import { validateIndexes } from '../6_validateIndexes/validateIndexes.ts';

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
  const { startIndex: startI, endIndex: endI } = validateIndexes({ array, startIndex, endIndex });

  const isInvalidIndexes = startI === 0 && endI === 0;
  if (isInvalidIndexes) {
    return [];
  }

  const result: ArrayItem[] = [];

  for (let i = startI; i < endI; i++) {
    push<ArrayItem>({ array: result, newItem: array[i] });
  }

  return result;
};
