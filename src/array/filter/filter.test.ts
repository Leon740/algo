import { type User } from '@src/constants.ts';
import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { type Callback, filter } from './filter.ts';

const CALLBACKS = {
  empty: (() => false) as Callback<string>,
  isEvenNumber: ((number) => number % 2 === 0) as Callback<number>,
  isEvenIndex: ((_, index) => index % 2 === 0) as Callback<string>,
  isAdultUser: ((user) => {
    const todaysYear = new Date().getFullYear();
    const birthYear = new Date(user.dob).getFullYear();
    const isAdult = todaysYear - birthYear >= 18;

    return isAdult;
  }) as Callback<User>
};

export const filterTests: Test[] = [
  {
    name: 'empty array if provided array is empty',
    expected: ARRAYS.empty.filter(CALLBACKS.empty),
    actual: filter<string>(ARRAYS.empty, CALLBACKS.empty)
  },
  {
    name: 'array of even numbers',
    expected: ARRAYS.numbers.filter(CALLBACKS.isEvenNumber),
    actual: filter<number>(ARRAYS.numbers, CALLBACKS.isEvenNumber)
  },
  {
    name: 'array of letters located in even indexes',
    expected: ARRAYS.letters.filter(CALLBACKS.isEvenIndex),
    actual: filter<string>(ARRAYS.letters, CALLBACKS.isEvenIndex)
  },
  {
    name: 'array of user names',
    expected: ARRAYS.users.filter(CALLBACKS.isAdultUser),
    actual: filter<User>(ARRAYS.users, CALLBACKS.isAdultUser)
  }
];
