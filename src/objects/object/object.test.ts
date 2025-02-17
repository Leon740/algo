import { type Test } from '@src/utils/log.ts';
import { OBJECTS_EXAMPLES } from '../constants.ts';
import { entriesToTest } from '../fromEntries/fromEntries.test.ts';
import { fromEntries } from '../fromEntries/fromEntries.ts';
import { MyObject } from './object.ts';

const createdObjects = {
  empty: new MyObject<string>({ sourceObject: OBJECTS_EXAMPLES.empty }),
  string: new MyObject<string>({ sourceObject: OBJECTS_EXAMPLES.string }),
  number: new MyObject<number>({ sourceObject: OBJECTS_EXAMPLES.number }),
  boolean: new MyObject<boolean>({ sourceObject: OBJECTS_EXAMPLES.boolean }),
  nested: new MyObject<object>({ sourceObject: OBJECTS_EXAMPLES.nested })
};

const initTests: Test[] = [
  {
    name: 'init: empty object',
    expected: OBJECTS_EXAMPLES.empty,
    actual: createdObjects.empty.store
  },
  {
    name: 'init: object with string values',
    expected: OBJECTS_EXAMPLES.string,
    actual: createdObjects.string.store
  },
  {
    name: 'init: object with number values',
    expected: OBJECTS_EXAMPLES.number,
    actual: createdObjects.number.store
  },
  {
    name: 'init: object with boolean values',
    expected: OBJECTS_EXAMPLES.boolean,
    actual: createdObjects.boolean.store
  },
  {
    name: 'init: object with nested objects',
    expected: OBJECTS_EXAMPLES.nested,
    actual: createdObjects.nested.store
  }
];

const keysTests: Test[] = [
  {
    name: 'empty keys array if object is empty',
    expected: Object.keys(createdObjects.empty.store),
    actual: createdObjects.empty.keys()
  },
  {
    name: 'full array of object keys if object contains entries',
    expected: Object.keys(createdObjects.nested.store),
    actual: createdObjects.nested.keys()
  }
];

const valuesTests: Test[] = [
  {
    name: 'empty values array if object is empty',
    expected: Object.values(createdObjects.empty.store),
    actual: createdObjects.empty.values()
  },
  {
    name: 'full array of object values if object contains entries',
    expected: Object.values(createdObjects.nested.store),
    actual: createdObjects.nested.values()
  }
];

const entriesTests: Test[] = [
  {
    name: 'empty entries array if object is empty',
    expected: Object.entries(createdObjects.empty.store),
    actual: createdObjects.empty.entries()
  },
  {
    name: 'full array of object entries if object contains entries',
    expected: Object.entries(createdObjects.nested.store),
    actual: createdObjects.nested.entries()
  }
];

const fromEntriesTests: Test[] = [
  {
    name: 'empty object if entries is empty',
    expected: Object.fromEntries(entriesToTest.empty),
    actual: fromEntries({ entries: entriesToTest.empty })
  },
  {
    name: 'full object if entries is full',
    expected: Object.fromEntries(entriesToTest.regular),
    actual: fromEntries({ entries: entriesToTest.regular })
  }
];

const isEmptyTests: Test[] = [
  {
    name: 'isEmpty: true if object is empty',
    expected: true,
    actual: createdObjects.empty.isEmpty()
  },
  {
    name: 'isEmpty: false if object is full',
    expected: false,
    actual: createdObjects.string.isEmpty()
  }
];

export const myObjectTests = [
  ...initTests,
  ...keysTests,
  ...valuesTests,
  ...entriesTests,
  ...fromEntriesTests,
  ...isEmptyTests
];
