import { validateIndexes } from '../0_validateIndexes/validateIndexes.ts';
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
  const { startIndex: startI, endIndex: endI } = validateIndexes({ array, startIndex, endIndex });

  if (startI === 0 && endI === 0) {
    return [];
  }

  const result: ArrayItem[] = [];

  for (let i = startI; i < endI; i++) {
    push<ArrayItem>({ array: result, newArrayItem: array[i] });
  }

  return result;
};
