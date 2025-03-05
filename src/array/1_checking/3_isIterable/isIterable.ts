export const isIterable = (value: unknown): boolean => {
  if (!value) return false;

  return typeof (value as any)[Symbol.iterator] === 'function';
};
