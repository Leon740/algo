import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';

// eslint-disable-next-line no-unused-vars
export type Callback<SourceItem> = (item: SourceItem, index: number) => boolean;

export const filter = <SourceItem>(
  source: SourceItem[],
  callback: Callback<SourceItem>
): SourceItem[] => {
  if (isEmpty(source)) return [];

  const result: SourceItem[] = [];

  for (let i = 0; i < source.length; i++) {
    const sourceItem = source[i];
    const isValidItem = callback(sourceItem, i);

    if (isValidItem) {
      result.push(sourceItem);
    }
  }

  return result;
};
