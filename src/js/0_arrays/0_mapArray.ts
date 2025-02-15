import { isArray } from '@src/utils/isArray.ts';
import { runTests, type Test } from '@src/utils/log1.ts';

export const mapArray = <S, R>({
  sourceArray = [],
  callback
}: {
  sourceArray: S[];
  callback: (arrayItem: S, index?: number) => R;
}): R[] => {
  if (!isArray(sourceArray)) return sourceArray;

  const resultArray: R[] = [];

  for (let i = 0; i < sourceArray.length; i++) {
    const sourceArrayItem = sourceArray[i];

    const resultArrayItem = callback(sourceArrayItem, i);

    if (resultArrayItem) {
      resultArray.push(resultArrayItem);
    }
  }

  return resultArray;
};

interface User {
  name: string;
  age: number;
}

const mapArray_tests: Test<any[], any[]>[] = [
  {
    name: 'returns [] if sourceArray is empty',
    expected: [],
    actual: mapArray({ sourceArray: [], callback: () => false })
  },
  {
    name: 'returns doubled array of numbers',
    expected: [2, 4, 6, 8, 10],
    actual: mapArray<number, number>({
      sourceArray: [1, 2, 3, 4, 5],
      callback: (currentNumber) => currentNumber * 2
    })
  },
  {
    name: 'returns array of chars located in even indexes',
    expected: ['h', 'l', 'o'],
    actual: mapArray<string, string>({
      sourceArray: ['h', 'e', 'l', 'l', 'o'],
      callback: (currentChar, index) => (index! % 2 === 0 ? currentChar : '')
    })
  },
  {
    name: 'returns array of user names',
    expected: ['Leonid', 'Ivan'],
    actual: mapArray<User, string>({
      sourceArray: [
        {
          name: 'Leonid',
          age: 23
        },
        {
          name: 'Ivan',
          age: 24
        }
      ],
      callback: (currentUser) => currentUser.name
    })
  }
];

runTests({
  name: 'mapArray',
  tests: mapArray_tests
});
