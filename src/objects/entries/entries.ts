type Key = string;
type Entry<Value> = [Key, Value];

export const entries = <Value>({ object }: { object: object }): Entry<Value>[] => {
  const entries: Entry<Value>[] = [];

  for (const currentKey in object) {
    const currentValue = object[currentKey];
    const currentEntry = [currentKey, currentValue];

    entries.push(currentEntry);
  }

  return entries;
};
