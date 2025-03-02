import { push } from '@src/array/1_push/push.ts';

export const values = <Value>({ object }: { object: Record<string, Value> }): Value[] => {
  const allValues: Value[] = [];

  for (const currentKey in object) {
    const currentValue = object[currentKey];
    push({ array: allValues, newItem: currentValue });
  }

  return allValues;
};
