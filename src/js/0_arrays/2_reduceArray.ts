import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';

// array.reduce((accumulator, currentValue, index, array) => {
//   return newAccumulatorValue;
// }, initialValue);

const sumOfArrayNumbers = [1, 2, 3, 4, 5].reduce((accumulator, currentNumber, index) => {
  // console.log(`accumulator = ${accumulator}`);
  // console.log(`currentNumber = ${currentNumber}`);
  // console.log(`index = ${index}`);
  return accumulator + currentNumber;
}, 0);
console.log(`sumOfArrayNumbers = ${sumOfArrayNumbers}`);

interface User {
  id: number;
  name: string;
  dob: string;
}

const USERS: User[] = [
  { id: 0, name: 'Ivan', dob: '05/31/2000' },
  { id: 1, name: 'Leonid', dob: '04/01/2001' },
  { id: 2, name: 'Elena', dob: '05/03/2001' },
  { id: 3, name: 'Grigoriy', dob: '05/04/2002' }
];

const usersMap = USERS.reduce((accumulator, currentUser) => {
  accumulator[currentUser.id] = currentUser.name;
  return accumulator;
}, {});
console.log(usersMap);

const usersGroupedByBirthYear = USERS.reduce((accumulator, currentUser) => {
  const currentUserBirthYear = new Date(currentUser.dob).getFullYear();
  accumulator[currentUserBirthYear] = accumulator[currentUserBirthYear] || [];
  accumulator[currentUserBirthYear].push(currentUser.name);
  return accumulator;
}, {});
console.log(usersGroupedByBirthYear);

export const reduceArray = <S, R>({
  sourceArray = [],
  callback,
  initialValue
}: {
  sourceArray: S[];
  callback: ({
    accumulator,
    current,
    index
  }: {
    accumulator: R;
    current: S;
    index?: number;
  }) => void;
  initialValue: R;
}): R => {
  if (!isArray(sourceArray)) return initialValue;

  let accumulator = initialValue;

  for (let i = 0; i < sourceArray.length; i++) {
    accumulator = callback({ accumulator, current: sourceArray[i], index: i });
  }

  return accumulator;
};

const reduceArray_tests: Test<any, any>[] = [
  {
    name: 'returns initial value when array is empty',
    expected: 0,
    actual: reduceArray({ sourceArray: [], callback: () => false, initialValue: 0 })
  },
  {
    name: 'calcs sum of numbers in numbers array',
    expected: 15,
    actual: reduceArray<number, number>({
      sourceArray: [1, 2, 3, 4, 5],
      callback: ({ accumulator, current: currentNumber }) => accumulator + currentNumber,
      initialValue: 0
    })
  },
  {
    name: 'creates users map',
    expected: usersMap,
    actual: reduceArray<User, Record<number, string>>({
      sourceArray: USERS,
      callback: ({ accumulator, current: currentUser }) => {
        accumulator[currentUser.id] = currentUser.name;
        return accumulator;
      },
      initialValue: {}
    })
  },
  {
    name: 'groups users by birth year',
    expected: usersGroupedByBirthYear,
    actual: reduceArray<User, Record<number, string>>({
      sourceArray: USERS,
      callback: ({ accumulator, current: currentUser }) => {
        const currentUserBirthYear = new Date(currentUser.dob).getFullYear();
        accumulator[currentUserBirthYear] = accumulator[currentUserBirthYear] || [];
        accumulator[currentUserBirthYear].push(currentUser.name);
        return accumulator;
      },
      initialValue: {}
    })
  }
];

runTests({
  name: 'reduceArray',
  tests: reduceArray_tests
});
