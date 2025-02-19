export const values = <Value>(object: Record<string, Value>): Value[] => {
  const allValues: Value[] = [];

  for (const currentKey in object) {
    const currentValue = object[currentKey];
    allValues.push(currentValue);
  }

  return allValues;
};
