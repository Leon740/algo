export const isArray = (arg: unknown): boolean => {
  const isArg = arg !== null || arg !== undefined || typeof arg !== 'undefined';
  if (!isArg) {
    return false;
  }

  return arg instanceof Array;
};
