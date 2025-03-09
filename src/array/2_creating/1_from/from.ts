import { isArrayLike } from '@src/array/1_checking/2_isArrayLike/isArrayLike.ts';
import { isIterable } from '@src/array/1_checking/3_isIterable/isIterable.ts';
import { push } from '@src/array/3_adding_removing/1_push/push.ts';

export type FromArgs<Item> = {
  value: Iterable<Item> | ArrayLike<Item>;
  // eslint-disable-next-line no-unused-vars
  mapFn?: ({ item, index }: { item: Item; index: number }) => Item;
};
export const from = <Item>({ value, mapFn }: FromArgs<Item>): Item[] | Error => {
  if (!isArrayLike(value) && !isIterable(value)) return [];

  const newArray: Item[] = [];

  if (isIterable(value)) {
    let index = 0;

    for (const arrayItem of value as Iterable<Item>) {
      push({
        array: newArray,
        newLastItems: [mapFn ? mapFn({ item: arrayItem, index }) : arrayItem]
      });
      index++;
    }
  } else {
    const arrayLikeValue = value as ArrayLike<Item>;

    for (let index = 0; index < arrayLikeValue.length; index++) {
      const arrayItem = arrayLikeValue[index];
      push({
        array: newArray,
        newLastItems: [mapFn ? mapFn({ item: arrayItem, index }) : arrayItem]
      });
    }
  }

  return newArray;
};
