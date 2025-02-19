import { type User } from '@src/constants.ts';
import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { type Callback, map } from './map.ts';

type Letter = Record<string, string>;

const CALLBACKS = {
  empty: (() => '') as Callback<string, string>,
  isEvenNumber: ((number) => number * 2) as Callback<number, number>,
  getLetterByIndex: ((letter, index) => ({ [index]: letter })) as Callback<string, Letter>,
  getUserName: ((user: User) => `${user.firstName} ${user.lastName}`) as Callback<User, string>
};

export const mapTests: Test[] = [
  {
    name: 'empty array if provided array is empty',
    expected: ARRAYS.empty.map(CALLBACKS.empty),
    actual: map<string, string>(ARRAYS.empty, CALLBACKS.empty)
  },
  {
    name: 'array of numbers with every number doubled',
    expected: ARRAYS.numbers.map(CALLBACKS.isEvenNumber),
    actual: map<number, number>(ARRAYS.numbers, CALLBACKS.isEvenNumber)
  },
  {
    name: 'array of objects {index: letter}',
    expected: ARRAYS.letters.map(CALLBACKS.getLetterByIndex),
    actual: map<string, Record<string, string>>(ARRAYS.letters, CALLBACKS.getLetterByIndex)
  },
  {
    name: 'array of user names',
    expected: ARRAYS.users.map(CALLBACKS.getUserName),
    actual: map<User, string>(ARRAYS.users, CALLBACKS.getUserName)
  }
];
