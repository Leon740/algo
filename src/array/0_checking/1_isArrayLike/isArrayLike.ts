export const isArrayLike = (object: unknown): boolean => {
  const isObject = object !== null && object !== undefined && typeof object === 'object';
  if (!isObject) {
    return false;
  }

  const objectLength = (object as { length?: unknown }).length;
  const containsValidLength = typeof objectLength === 'number' && objectLength > 0;
  const containsZeroIndex = containsValidLength && 0 in object;

  return containsValidLength && containsZeroIndex;
};
