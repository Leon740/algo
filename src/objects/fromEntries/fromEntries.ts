type Key = string;
type Entry<Value> = [Key, Value];
type Object<Value> = Record<string, Value>;

export const fromEntries = <Value>({ entries }: { entries: Entry<Value>[] }): Object<Value> => {
  const object: Record<string, Value> = {};

  entries.forEach(([key, value]) => {
    object[key] = value;
  });

  return object;
};
