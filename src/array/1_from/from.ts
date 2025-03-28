import { isArrayLike } from '@src/array/0_utils/2_isArrayLike/isArrayLike.ts';
import { isIterable } from '@src/array/0_utils/3_isIterable/isIterable.ts';
import { push } from '@src/array/2_push/push.ts';
import { forEach } from '../0_utils/6_forEach/forEach.ts';

export type FromArgs<Item> = {
  value: Iterable<Item> | ArrayLike<Item>;
  // eslint-disable-next-line no-unused-vars
  mapFn?: ({ item, index }: { item: Item; index?: number }) => Item;
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
    forEach({
      array: value as ArrayLike<Item>,
      callbackFn: ({ item, index }) => {
        push({
          array: newArray,
          newLastItems: mapFn ? mapFn({ item, index }) : item
        });
      }
    });
  }

  return newArray;
};
