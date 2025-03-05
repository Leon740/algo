import { isArrayLike } from '@src/array/1_checking/2_isArrayLike/isArrayLike.ts';
import { isIterable } from '@src/array/1_checking/3_isIterable/isIterable.ts';
import { push } from '@src/array/1_push/push.ts';

export const from = <ArrayItem>(value: unknown): ArrayItem[] => {
  const valueIsArrayLike = isArrayLike(value);
  const valueIsIterable = isIterable(value);

  if (!valueIsArrayLike && !valueIsIterable) return [];

  if (valueIsIterable) {
    const newArrayFromIterable: ArrayItem[] = [];

    for (const arrayItem of value) {
      push({ array: newArrayFromIterable, newItem: arrayItem });
    }

    return newArrayFromIterable;
  }

  if (valueIsArrayLike) {
    const newArrayFromArrayLike: ArrayItem[] = [];

    const arrayLikeValue = value as { length: number };

    for (let i = 0; i < arrayLikeValue.length; i++) {
      push({ array: newArrayFromArrayLike, newItem: arrayLikeValue[i] });
    }

    return newArrayFromArrayLike;
  }
};
