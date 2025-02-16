import { type Test, USERS } from '@src/utils/index.ts';
import { map } from './map.ts';

const ARRAYS = {
  empty: [],
  numbers: [0, 1, 2, 3],
  letters: ['a', 'b', 'c'],
  users: USERS
};

type Letter = Record<number, string>;

type ArrayItem = string | number | Letter;

export const map_tests: Test<ArrayItem[], ArrayItem[]>[] = [
  {
    name: 'empty array if provided array is empty',
    expected: ARRAYS.empty.map(() => ''),
    actual: map({ source: ARRAYS.empty, callback: () => '' })
  },
  {
    name: 'array of numbers with every number doubled',
    expected: ARRAYS.numbers.map((currentNumber) => currentNumber * 2),
    actual: map({
      source: ARRAYS.numbers,
      callback: ({ item: currentNumber }) => currentNumber * 2
    })
  },
  {
    name: 'array of objects {index: letter}',
    expected: ARRAYS.letters.map((currentLetter, index) => ({ [index]: currentLetter })),
    actual: map({
      source: ARRAYS.letters,
      callback: ({ item: currentLetter, index }) => ({ [index]: currentLetter })
    })
  },
  {
    name: 'array of user names',
    expected: ARRAYS.users.map(({ firstName, lastName }) => `${firstName} ${lastName}`),
    actual: map({
      source: ARRAYS.users,
      callback: ({ item: { firstName, lastName } }) => `${firstName} ${lastName}`
    })
  }
];
