import { type User } from '@src/constants.ts';
import { ARRAYS } from '@src/constants.ts';
import { type Test } from '@src/utils/log.ts';
import { type Callback, reduce } from './reduce.ts';

type RegularUsersMapRecord = Record<string, User>;
type BirthYearUsersMapRecord = Record<string, User[]>;

const CALLBACKS = {
  empty: (() => 0) as Callback<number, number>,
  getSumOfNumbersArray: ((previousSum, currentNumber) => previousSum + currentNumber) as Callback<
    number,
    number
  >,
  createUsersMap: ((previousMap, user) => {
    const { firstName, lastName, dob } = user;
    const userKey = `${firstName}_${lastName}_${dob}`;

    previousMap[userKey] = user;

    return previousMap;
  }) as Callback<User, RegularUsersMapRecord>,
  createUsersMapByBirthYear: ((previousMap, user) => {
    const birthYear = new Date(user.dob).getFullYear();
    previousMap[birthYear] = previousMap[birthYear] || [];

    previousMap[birthYear].push(user);

    return previousMap;
  }) as Callback<User, BirthYearUsersMapRecord>
};

export const reduceTests: Test[] = [
  {
    name: 'returns initial value if provided array is empty',
    expected: ARRAYS.empty.reduce(CALLBACKS.empty, 0),
    actual: reduce<number, number>(ARRAYS.empty, CALLBACKS.empty, 0)
  },
  {
    name: 'calcs sum of numbers array',
    expected: ARRAYS.numbers.reduce(CALLBACKS.getSumOfNumbersArray),
    actual: reduce<number, number>(ARRAYS.numbers, CALLBACKS.getSumOfNumbersArray, 0)
  },
  {
    name: 'creates users map',
    expected: ARRAYS.users.reduce(CALLBACKS.createUsersMap, {}),
    actual: reduce<User, RegularUsersMapRecord>(ARRAYS.users, CALLBACKS.createUsersMap, {})
  },
  {
    name: 'creates users map by birth year',
    expected: ARRAYS.users.reduce(CALLBACKS.createUsersMapByBirthYear, {}),
    actual: reduce<User, BirthYearUsersMapRecord>(
      ARRAYS.users,
      CALLBACKS.createUsersMapByBirthYear,
      {}
    )
  }
];
