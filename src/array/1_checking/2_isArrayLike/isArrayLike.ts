import { isArray } from '@src/array/1_checking/1_isArray/isArray.ts';

export const isArrayLike = (value: unknown): boolean => {
  const valueIsValid =
    typeof value !== 'undefined' && value !== null && typeof value !== 'function';
  if (!valueIsValid) return false;

  const length = (value as { length?: unknown }).length;
  const lengthIsValid = typeof length === 'number' && length >= 0 && Number.isInteger(length);
  if (!lengthIsValid) return false;

  const valueIsString = typeof value === 'string';
  const valueIsObject = typeof value === 'object';
  const valueIsValidObject = valueIsObject && (isArray(value) || 0 in (value as object));

  return length >= 0 && (valueIsValidObject || valueIsString);
};
