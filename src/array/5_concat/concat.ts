import { push } from '../1_push/push.ts';

export const concat = <ArrayItem>({ arrays }: { arrays: ArrayItem[][] }): ArrayItem[] => {
  const result: ArrayItem[] = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let k = 0; k < arrays[i].length; k++) {
      push<ArrayItem>({ array: result, newItem: arrays[i][k] });
    }
  }

  return result;
};
