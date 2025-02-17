type Key = string;

export const keys = ({ object }: { object: object }): Key[] => {
  const allKeys: Key[] = [];

  for (const currentKey in object) {
    allKeys.push(currentKey);
  }

  return allKeys;
};
