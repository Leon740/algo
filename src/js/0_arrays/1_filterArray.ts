import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';

export const filterArray = <S>({
  sourceArray = [],
  callback
}: {
  sourceArray: S[];
  callback: (arrayItem: S, index?: number) => boolean;
}): S[] => {
  if (!isArray(sourceArray)) return sourceArray;

  const resultArray: R[] = [];

  for (let i = 0; i < sourceArray.length; i++) {
    const sourceArrayItem = sourceArray[i];

    if (callback(sourceArrayItem, i)) {
      resultArray.push(sourceArrayItem);
    }
  }

  return resultArray;
};

interface User {
  name: string;
  age: number;
}

const filterArray_tests: Test<any[], any[]>[] = [
  {
    name: 'returns [] if sourceArray is empty',
    expected: [],
    actual: filterArray({ sourceArray: [], callback: () => false })
  },
  {
    name: 'returns array of even numbers',
    expected: [2, 4],
    actual: filterArray<number>({
      sourceArray: [1, 2, 3, 4, 5],
      callback: (currentNumber) => currentNumber % 2 === 0
    })
  },
  {
    name: 'returns array of chars located in even indexes',
    expected: ['h', 'l', 'o'],
    actual: filterArray<string>({
      sourceArray: ['h', 'e', 'l', 'l', 'o'],
      callback: (_, index) => index! % 2 === 0
    })
  },
  {
    name: 'returns array of adult users',
    expected: [
      {
        name: 'Leonid',
        age: 23
      }
    ],
    actual: filterArray<User>({
      sourceArray: [
        {
          name: 'Leonid',
          age: 23
        },
        {
          name: 'Ivan',
          age: 16
        }
      ],
      callback: (currentUser) => currentUser.age >= 18
    })
  }
];

runTests({
  name: 'filterArray',
  tests: filterArray_tests
});
