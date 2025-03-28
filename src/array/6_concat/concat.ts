import { push } from '@src/array/2_push/push.ts';

export const concat = <Item>(...arrays: Item[][]): Item[] => {
  const result: Item[] = [];

  for (let i = 0; i < arrays.length; i++) {
    push<Item>({ array: result, newLastItems: arrays[i] });
  }

  return result;
};
