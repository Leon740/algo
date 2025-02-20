import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';
import { push } from '../1_push/push.ts';

export const slice = <ArrayItem>({
  array,
  startIndex,
  endIndex
}: {
  array: ArrayItem[];
  startIndex: number;
  endIndex?: number;
}): [] | ArrayItem[] => {
  if (isEmpty({ object: array })) return [];

  const effectiveEndIndex = endIndex ?? array.length;

  const isInvalidIndexes = startIndex > effectiveEndIndex;
  if (isInvalidIndexes) return [];

  const result: ArrayItem[] = [];

  for (let i = startIndex; i < effectiveEndIndex; i++) {
    push<ArrayItem>({ array: result, newArrayItem: array[i] });
  }

  return result;
};
