import { push } from '../1_push/push.ts';

export const concat = <ArrayItem>(...sources: ArrayItem[][]): ArrayItem[] => {
  const result: ArrayItem[] = [];

  for (let i = 0; i < sources.length; i++) {
    for (let k = 0; k < sources[i].length; k++) {
      push(result, sources[i][k]);
    }
  }

  return result;
};
