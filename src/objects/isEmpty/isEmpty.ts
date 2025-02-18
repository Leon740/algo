import { keys } from '../keys/keys.ts';

export const isEmpty = (object: object | any[]): boolean => {
  if (Array.isArray(object)) {
    const arrayIsEmpty = object.length === 0;
    return arrayIsEmpty;
  }

  const objectIsEmpty = keys(object).length === 0;
  return objectIsEmpty;
};
