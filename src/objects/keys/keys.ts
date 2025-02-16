type Key = string;

export const keys = ({ object }: { object: object }): Key[] => {
  const keys: Key[] = [];

  for (const currentKey in object) {
    keys.push(currentKey);
  }

  return keys;
};
