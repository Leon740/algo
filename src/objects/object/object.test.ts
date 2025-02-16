import { type Test } from '@src/utils/log.ts';
import { MyObject } from './object.ts';

const OBJECTS_TO_TEST = {
  empty: {},
  string: {
    keyA: 'valueA'
  },
  number: {
    one: 1,
    two: 2,
    three: 3
  },
  boolean: {
    isAdult: false
  },
  nested: {
    nestedA: {
      a: 'a'
    },
    nestedB: {
      b: 'b'
    }
  }
};

const CREATED_OBJECTS = {
  empty: new MyObject<string>({ sourceObject: OBJECTS_TO_TEST.empty }),
  string: new MyObject<string>({ sourceObject: OBJECTS_TO_TEST.string }),
  number: new MyObject<number>({ sourceObject: OBJECTS_TO_TEST.number }),
  boolean: new MyObject<boolean>({ sourceObject: OBJECTS_TO_TEST.boolean }),
  nested: new MyObject<object>({ sourceObject: OBJECTS_TO_TEST.nested })
};

const initTests: Test[] = [
  {
    name: 'init: empty object',
    expected: OBJECTS_TO_TEST.empty,
    actual: CREATED_OBJECTS.empty.store
  },
  {
    name: 'init: object with string values',
    expected: OBJECTS_TO_TEST.string,
    actual: CREATED_OBJECTS.string.store
  },
  {
    name: 'init: object with number values',
    expected: OBJECTS_TO_TEST.number,
    actual: CREATED_OBJECTS.number.store
  },
  {
    name: 'init: object with boolean values',
    expected: OBJECTS_TO_TEST.boolean,
    actual: CREATED_OBJECTS.boolean.store
  },
  {
    name: 'init: object with nested objects',
    expected: OBJECTS_TO_TEST.nested,
    actual: CREATED_OBJECTS.nested.store
  }
];

const keysTests: Test[] = [
  {
    name: 'empty array of object keys if object is empty',
    expected: Object.keys(CREATED_OBJECTS.empty.store),
    actual: CREATED_OBJECTS.empty.keys()
  },
  {
    name: 'full array of object keys if object contains keys',
    expected: Object.keys(CREATED_OBJECTS.nested.store),
    actual: CREATED_OBJECTS.nested.keys()
  }
];

const valuesTests: Test[] = [
  {
    name: 'empty array of object values if object is empty',
    expected: Object.values(CREATED_OBJECTS.empty.store),
    actual: CREATED_OBJECTS.empty.values()
  },
  {
    name: 'full array of object values if object contains values',
    expected: Object.values(CREATED_OBJECTS.nested.store),
    actual: CREATED_OBJECTS.nested.values()
  }
];

const entriesTests: Test[] = [
  {
    name: 'empty array of object entries if object is empty',
    expected: Object.entries(CREATED_OBJECTS.empty.store),
    actual: CREATED_OBJECTS.empty.entries()
  },
  {
    name: 'full array of object entries if object contains entries',
    expected: Object.entries(CREATED_OBJECTS.nested.store),
    actual: CREATED_OBJECTS.nested.entries()
  }
];

const isEmptyTests: Test[] = [
  {
    name: 'isEmpty: true if object is empty',
    expected: true,
    actual: CREATED_OBJECTS.empty.isEmpty()
  },
  {
    name: 'isEmpty: false if object is full',
    expected: false,
    actual: CREATED_OBJECTS.string.isEmpty()
  }
];

export const myObjectTests = [
  ...initTests,
  ...keysTests,
  ...valuesTests,
  ...entriesTests,
  ...isEmptyTests
];
