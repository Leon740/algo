import { isArray } from '@src/array/0_utils/1_isArray/isArray.ts';

export const isArrayLike = (value: unknown): boolean => {
  const valueIsValid =
    typeof value !== 'undefined' && value !== null && typeof value !== 'function';
  if (!valueIsValid) return false;

  const length = (value as { length?: unknown }).length;
  const lengthIsValid = typeof length === 'number' && Number.isInteger(length) && length >= 0;
  if (!lengthIsValid) return false;

  const valueIsString = typeof value === 'string';
  const valueIsObject = typeof value === 'object';
  const valueIsArrayLikeObject = valueIsObject && (isArray(value) || 0 in (value as object));

  return valueIsArrayLikeObject || valueIsString;
};
