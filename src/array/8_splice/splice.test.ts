import { type Test } from '@src/utils/log.ts';
import { VALUES } from '@src/utils/values.ts';
import { MyArray } from '../MyArray.ts';
import { splice } from './splice.ts';

const numbers = [...VALUES.numbersArray];
const numbersLength = numbers.length;
const numbersMiddleIndex = Math.round(numbersLength / 2);

const spliceTestItem = ({
  startIndex,
  deleteCount,
  newItems = []
}: {
  startIndex: number;
  deleteCount?: number;
  newItems?: number[];
}): {
  removedItems: {
    expected: number[];
    actual: number[];
  };
  modifiedArrays: {
    expected: number[];
    actual: number[];
  };
} => {
  const arrayExpected = new Array(...numbers);
  const arrayActual = new MyArray<number>(numbers);

  const removedItemsExpected = arrayExpected.splice(startIndex, deleteCount, ...newItems);
  const removedItemsActual = arrayActual.splice({
    startIndex,
    deleteCount,
    newItems
  });

  return {
    removedItems: {
      expected: removedItemsExpected,
      actual: removedItemsActual
    },
    modifiedArrays: {
      expected: arrayExpected,
      actual: arrayActual.store
    }
  };
};

const testPositiveStartIndexIn = spliceTestItem({
  startIndex: 0,
  deleteCount: Infinity,
  newItems: [11]
});
const testPositiveStartIndexOut = spliceTestItem({
  startIndex: numbersLength + 1,
  deleteCount: Infinity
});
const testNegativeStartIndexIn = spliceTestItem({
  startIndex: -numbersLength + 1,
  deleteCount: Infinity
});
const testNegativeStartIndexOut = spliceTestItem({
  startIndex: -numbersLength - 1,
  deleteCount: Infinity
});
const testPositiveDeleteCountIn = spliceTestItem({
  startIndex: 0,
  deleteCount: numbersMiddleIndex
});
const testPositiveDeleteCountOut = spliceTestItem({
  startIndex: numbersMiddleIndex,
  deleteCount: numbersLength * 2
});
const testNegativeDeleteCount = spliceTestItem({
  startIndex: numbersMiddleIndex,
  deleteCount: -2
});
const testNewItemsShorterDeleteCount = spliceTestItem({
  startIndex: numbersMiddleIndex,
  deleteCount: 2,
  newItems: [11]
});
const testNewItemsLongerDeleteCount = spliceTestItem({
  startIndex: numbersMiddleIndex,
  deleteCount: 2,
  newItems: [11, 12, 13]
});

export const testsOfSplice: Test[] = [
  {
    name: '[], []',
    expected: VALUES.emptyArray.splice(0),
    actual: splice({ array: VALUES.emptyArray, startIndex: 0 })
  },
  // + startIndex IN
  {
    name: '+ startIndex IN removedItems',
    ...testPositiveStartIndexIn.removedItems
  },
  {
    name: '+ startIndex IN modifiedArrays',
    ...testPositiveStartIndexIn.modifiedArrays
  },
  // + startIndex OUT
  {
    name: '+ startIndex OUT removedItems',
    ...testPositiveStartIndexOut.removedItems
  },
  {
    name: '+ startIndex OUT modifiedArrays',
    ...testPositiveStartIndexOut.modifiedArrays
  },
  // - startIndex IN
  {
    name: '- startIndex IN removedItems',
    ...testNegativeStartIndexIn.removedItems
  },
  {
    name: '- startIndex IN modifiedArrays',
    ...testNegativeStartIndexIn.modifiedArrays
  },
  // - startIndex OUT
  {
    name: '- startIndex OUT removedItems',
    ...testNegativeStartIndexOut.removedItems
  },
  {
    name: '- startIndex OUT modifiedArrays',
    ...testNegativeStartIndexOut.modifiedArrays
  },
  // + deleteCount IN
  {
    name: '+ deleteCount IN removedItems',
    ...testPositiveDeleteCountIn.removedItems
  },
  {
    name: '+ deleteCount IN modifiedArrays',
    ...testPositiveDeleteCountIn.modifiedArrays
  },
  // + deleteCount OUT
  {
    name: '+ deleteCount OUT removedItems',
    ...testPositiveDeleteCountOut.removedItems
  },
  {
    name: '+ deleteCount OUT modifiedArrays',
    ...testPositiveDeleteCountOut.modifiedArrays
  },
  // - deleteCount,
  {
    name: '- deleteCount removedItems',
    ...testNegativeDeleteCount.removedItems
  },
  {
    name: '- deleteCount modifiedArrays',
    ...testNegativeDeleteCount.modifiedArrays
  },
  // newItems
  {
    name: 'newItems, removedItems',
    ...testNewItemsShorterDeleteCount.removedItems
  },
  {
    name: 'newItems, modifiedArrays',
    ...testNewItemsShorterDeleteCount.modifiedArrays
  },
  {
    name: 'newItems, removedItems',
    ...testNewItemsLongerDeleteCount.removedItems
  },
  {
    name: 'newItems, modifiedArrays',
    ...testNewItemsLongerDeleteCount.modifiedArrays
  }
];
