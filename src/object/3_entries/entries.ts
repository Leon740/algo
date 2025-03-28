import { push } from '@src/array/2_push/push.ts';

type Key = string;
type Entry<Value> = [Key, Value];

export const entries = <Value>({ object }: { object: Record<Key, Value> }): Entry<Value>[] => {
  const allEntries: Entry<Value>[] = [];

  for (const currentKey in object) {
    const currentValue = object[currentKey];
    const currentEntry: Entry<Value> = [currentKey, currentValue];

    push({ array: allEntries, newItem: currentEntry });
  }

  return allEntries;
};
