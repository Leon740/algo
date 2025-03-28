import { isArray } from './0_utils/1_isArray/isArray.ts';
import { isArrayLike } from './0_utils/2_isArrayLike/isArrayLike.ts';
import { isIterable } from './0_utils/3_isIterable/isIterable.ts';
import { isEmpty } from './0_utils/4_isEmpty/isEmpty.ts';
import { from, type FromArgs } from './1_from/from.ts';
import { push } from './2_push/push.ts';
import { pop } from './3_pop/pop.ts';
import { shift } from './4_shift/shift.ts';
import { unshift } from './5_unshift/unshift.ts';
import { concat } from './6_concat/concat.ts';
import { slice } from './7_slice/slice.ts';
import { splice } from './8_splice/splice.ts';

export class MyArray<Item> {
  public store: Item[];

  constructor(initialArray?: unknown) {
    this.store = isArray(initialArray) ? [...initialArray] : [];
  }

  static isArray = isArray;
  static isArrayLike = isArrayLike;
  static isIterable = isIterable;
  static isEmpty = isEmpty;

  static from<FromItem>(args: FromArgs<FromItem>) {
    return from(args);
  }

  public push(newLastItems: Item[] | Item) {
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

  public concat(...arrays: Item[][]) {
    return concat<Item>(this.store, ...arrays);
  }

  public slice({ startIndex, endIndex }: { startIndex?: number; endIndex?: number }) {
    return slice<Item>({ array: this.store, startIndex, endIndex });
  }

  public splice({
    startIndex,
    deleteCount,
    newItems
  }: {
    startIndex: number;
    deleteCount?: number;
    newItems?: Item[];
  }) {
    return splice<Item>({ array: this.store, startIndex, deleteCount, newItems });
  }
}
