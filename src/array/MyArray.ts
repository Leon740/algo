import { isArray } from './1_checking/1_isArray/isArray.ts';
import { isArrayLike } from './1_checking/2_isArrayLike/isArrayLike.ts';
import { isIterable } from './1_checking/3_isIterable/isIterable.ts';
import { from, type FromArgs, type FromReturn } from './2_creating/1_from/from.ts';
import { push } from './3_adding_removing/1_push/push.ts';

export class MyArray<Item> {
  public store: Item[];

  constructor(initialArray?: unknown) {
    this.store = isArray(initialArray) ? [...initialArray] : [];
  }

  static isArray = isArray;
  static isArrayLike = isArrayLike;
  static isIterable = isIterable;
  static from<FromItem>(args: FromArgs<FromItem>): FromReturn<FromItem> {
    return from(args);
  }

  public push(newLastItem: Item): number {
    return push<Item>({ array: this.store, newLastItem });
  }
}
