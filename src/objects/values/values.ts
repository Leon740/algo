export const values = <Value>({ object }: { object: object }): Value[] => {
  const values: Value[] = [];

  for (const currentKey in object) {
    const currentValue = object[currentKey];
    values.push(currentValue);
  }

  return values;
};
