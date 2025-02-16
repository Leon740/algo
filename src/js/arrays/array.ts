import { runTests, Test } from '@src/utils/index.ts';
import { map } from './map.ts';

class MyArray<ArrayItem> {
  public storage: ArrayItem[];

  constructor(sourceArray: ArrayItem[]) {
    this.storage = sourceArray;
  }

  map<ResultArrayItem>(
    // eslint-disable-next-line no-unused-vars
    callback: ({ arrayItem, index }: { arrayItem: ArrayItem; index: number }) => ResultArrayItem
  ): ResultArrayItem[] {
    return map<ArrayItem, ResultArrayItem>({ sourceArray: this.storage, callback });
  }
}

const numbers = new MyArray<number>([0, 1, 2]);
console.log(numbers);
console.log(numbers.storage);
const doubledNumbers = numbers.map(({ arrayItem: currentNumber }) => currentNumber * 2);
console.log(doubledNumbers);

type ArrayItem = number;

const MyArray_tests: Test<ArrayItem[], ArrayItem[]>[] = [
  {
    name: 'initializes array',
    expected: [0, 1, 2],
    actual: new MyArray<number>([0, 1, 2]).storage
  }
];

runTests({
  name: 'MyArray',
  tests: MyArray_tests
});
