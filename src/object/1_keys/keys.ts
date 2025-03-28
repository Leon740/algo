import { push } from '@src/array/2_push/push.ts';

type Key = string;

export const keys = ({ object }: { object: Record<Key, any> }): Key[] => {
  const allKeys: Key[] = [];

  for (const currentKey in object) {
    push({ array: allKeys, newItem: currentKey });
  }

  return allKeys;
};
