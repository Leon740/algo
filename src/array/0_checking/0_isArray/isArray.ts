export const isArray = (arg: unknown): boolean => {
  const argIsNotDefined = arg === null || arg === undefined || typeof arg === 'undefined';
  if (argIsNotDefined) {
    return false;
  }

  return arg instanceof Array;
};
