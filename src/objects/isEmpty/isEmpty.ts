import { keys } from '../keys/keys.ts';

type IsEmpty = boolean;

export const isEmpty = ({ object = {} }: { object: object | any[] }): IsEmpty => {
  if (Array.isArray(object)) {
    const arrayIsEmpty = object.length === 0;
    return arrayIsEmpty;
  }

  const objectIsEmpty = keys({ object }).length === 0;
  return objectIsEmpty;
};
