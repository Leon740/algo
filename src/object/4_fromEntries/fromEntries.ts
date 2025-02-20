type Key = string;
type Entry<Value> = [Key, Value];
type Object<Value> = Record<Key, Value>;

export const fromEntries = <Value>({ entries }: { entries: Entry<Value>[] }): Object<Value> => {
  const object: Object<Value> = {};

  entries.forEach(([key, value]) => {
    object[key] = value;
  });

  return object;
};
