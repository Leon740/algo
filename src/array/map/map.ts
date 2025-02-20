import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';

// eslint-disable-next-line no-unused-vars
export type Callback<SourceItem, ResultItem> = (item: SourceItem, index: number) => ResultItem;

export const map = <SourceItem, ResultItem>(
  source: SourceItem[],
  callback: Callback<SourceItem, ResultItem>
): ResultItem[] => {
  if (isEmpty(source)) return [];

  const result: ResultItem[] = [];

  for (let i = 0; i < source.length; i++) {
    const resultItem = callback(source[i], i);

    result.push(resultItem);
  }

  return result;
};
