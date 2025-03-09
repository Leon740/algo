import { isArray } from './1_checking/1_isArray/isArray.ts';
import { isArrayLike } from './1_checking/2_isArrayLike/isArrayLike.ts';
import { isIterable } from './1_checking/3_isIterable/isIterable.ts';
import { isEmpty } from './1_checking/4_isEmpty/isEmpty.ts';
import { from, type FromArgs, type FromReturn } from './2_creating/1_from/from.ts';
import { push } from './3_adding_removing/1_push/push.ts';
import { pop } from './3_adding_removing/2_pop/pop.ts';
import { unshift } from './3_adding_removing/3_unshift/unshift.ts';
import { shift } from './3_adding_removing/4_shift/shift.ts';

export class MyArray<Item> {
  public store: Item[];

  constructor(initialArray?: unknown) {
    this.store = isArray(initialArray) ? [...initialArray] : [];
  }

  static isArray = isArray;
  static isArrayLike = isArrayLike;
  static isIterable = isIterable;

  static from<FromItem>(args: FromArgs<FromItem>) {
    return from(args);
  }

  public isEmpty() {
    return isEmpty(this.store);
  }

  public push(newLastItems: Item[]) {
    return push<Item>({ array: this.store, newLastItems });
  }

  public pop() {
    return pop<Item>(this.store);
  }

  public unshift(newFirstItems: Item[]) {
    return unshift({ array: this.store, newFirstItems });
  }

  public shift() {
    return shift<Item>(this.store);
  }
}
