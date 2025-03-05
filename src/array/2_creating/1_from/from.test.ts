import { type Test, type TestResult } from '@src/utils/log.ts';
import { from } from './from.ts';

const testFrom = (value: unknown): TestResult => {
  return {
    expected: Array.from(value),
    actual: from(value)
  };
};

export const allTestsOfFrom: Test[] = [
  {
    name: '[] | undefined',
    expected: [],
    actual: from(undefined)
  },
  {
    name: '[] | null',
    expected: [],
    actual: from(null)
  },
  {
    name: '[] | {}',
    expected: [],
    actual: from({})
  },
  {
    name: '[] | {a: 1}',
    expected: [],
    actual: from({ a: 1 })
  },
  {
    name: 'string[] | string',
    ...testFrom('hello')
  },
  // {
  //   name: 'number[] | number[]',
  //   expected: [0, 1, 2],
  //   actual: from([0, 1, 2])
  // },
  {
    name: 'number[] | Set()',
    ...testFrom(new Set())
  },
  {
    name: 'number[] | Set([0, 1, 1])',
    ...testFrom(new Set([0, 1, 1]))
  },
  {
    name: 'number[] | Map()',
    ...testFrom(new Map())
  },
  {
    name: 'number[] | Map([["a", 1]])',
    ...testFrom(new Map([['a', 1]]))
  }
];

// const helloString = 'hello';
// console.log(helloString);
// const lettersOfHello = Array.from(helloString);
// console.log(lettersOfHello);

// const string = 'Hello';
// console.log(string);
// for (const char of string) {
//   console.log(char);
// }

// const stringIterator = string[Symbol.iterator]();
// console.log(stringIterator);

// while (true) {
//   let result = stringIterator.next();
//   console.log(result);
//   if (result.done) break;
// }

// const range = {
//   start: 0,
//   end: 5,
//   [Symbol.iterator]: function () {
//     return {
//       current: this.start,
//       last: this.end,
//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   }
// };

// for (const number of range) {
//   console.log(number);
// }

// const set = new Set([0, 1, 2, 2, 3, 3, 3]);
// for (const setItem of set) {
//   console.log(setItem);
// }
// console.log(Array.from(set));

// const map = new Map([
//   ['a', 0],
//   ['b', 1]
// ]);
// map.set('c', 2);
// for (const mapItem of map) {
//   console.log(mapItem);
// }
// console.log(Array.from(map));

// const audis = Array.from(['A6', 'Q8'], (model) => `Audi ${model}`);
// console.log(audis);

// const lettersOfHello = Array.from('Hello');
// console.log(lettersOfHello);

// const numbers = Array.from({ length: 5 }, (_, index) => index);
// console.log(numbers);
