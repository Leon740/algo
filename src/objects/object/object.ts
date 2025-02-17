import { entries } from '../entries/entries.ts';
import { fromEntries } from '../fromEntries/fromEntries.ts';
import { isEmpty } from '../isEmpty/isEmpty.ts';
import { keys } from '../keys/keys.ts';
import { values } from '../values/values.ts';

type Object<Value> = {
  [key: string]: Value;
};

export class MyObject<Value> {
  public store: Object<Value>;

  constructor({ sourceObject = {} }: { sourceObject: Object<Value> }) {
    this.store = sourceObject as Object<Value>;
  }

  keys() {
    return keys({ object: this.store });
  }

  values() {
    return values<Value>({ object: this.store });
  }

  entries() {
    return entries<Value>({ object: this.store });
  }

  fromEntries({ entries }: { entries: [string, Value][] }) {
    return fromEntries<Value>({ entries });
  }

  isEmpty() {
    return isEmpty({ object: this.store });
  }
}
