import { isArrayLike } from '@src/array/1_checking/2_isArrayLike/isArrayLike.ts';
import { isIterable } from '@src/array/1_checking/3_isIterable/isIterable.ts';
import { push } from '@src/array/3_adding_removing/1_push/push.ts';

export type Value<Item> = Iterable<Item> | ArrayLike<Item>;
export type FromArgs<Item> = {
  value: Value<Item>;
  // eslint-disable-next-line no-unused-vars
  mapFn?: ({ item, index }: { item: Item; index: number }) => Item;
};
export type FromReturn<Item> = Item[] | Error;

export const from = <Item>({ value, mapFn }: FromArgs<Item>): FromReturn<Item> => {
  if (!isArrayLike(value) && !isIterable(value)) return [];

  console.log('test');

  const newArray: Item[] = [];

  if (isIterable(value)) {
    let index = 0;

    for (const arrayItem of value as Iterable<Item>) {
      push({
        array: newArray,
        newLastItem: mapFn ? mapFn({ item: arrayItem, index }) : arrayItem
      });
      index++;
    }
  } else {
    const arrayLikeValue = value as ArrayLike<Item>;

    for (let i = 0; i < arrayLikeValue.length; i++) {
      const arrayItem = arrayLikeValue[i];
      push({
        array: newArray,
        newLastItem: mapFn ? mapFn({ item: arrayItem, index: i }) : arrayItem
      });
    }
  }

  return newArray;
};
