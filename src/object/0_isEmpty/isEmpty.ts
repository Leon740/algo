import { keys } from '../1_keys/keys.ts';

export const isEmpty = ({ object }: { object: undefined | object | any[] }): boolean => {
  const isObject = !!object;
  if (!isObject) return true;

  if (Array.isArray(object)) {
    const arrayIsEmpty = object.length === 0;
    return arrayIsEmpty;
  }

  const objectIsEmpty = keys({ object }).length === 0;
  return objectIsEmpty;
};
