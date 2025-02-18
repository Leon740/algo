import { isEmpty } from '@src/objects/isEmpty/isEmpty.ts';

export type Callback<SourceItem, Result> = (
  // eslint-disable-next-line no-unused-vars
  accumulator: Result,
  // eslint-disable-next-line no-unused-vars
  currentItem: SourceItem,
  // eslint-disable-next-line no-unused-vars
  index: number
) => Result;

export const reduce = <SourceItem, Result>(
  source: SourceItem[],
  callback: Callback<SourceItem, Result>,
  initialValue: Result
): Result => {
  if (isEmpty(source)) return initialValue;

  let accumulator = initialValue;

  for (let i = 0; i < source.length; i++) {
    accumulator = callback(accumulator, source[i], i);
  }

  return accumulator;
};
