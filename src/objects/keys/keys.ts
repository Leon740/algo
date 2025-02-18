type Key = string;

export const keys = (object: Record<Key, any>): Key[] => {
  const allKeys: Key[] = [];

  for (const currentKey in object) {
    allKeys.push(currentKey);
  }

  return allKeys;
};
