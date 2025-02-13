import { isArray } from '@src/utils/isArray.ts';
import { type Test, runTests } from '@src/utils/log1.ts';

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

type SplitArrayIntoChunksReturn = JSONValue[][];

export const splitArrayIntoChunks = ({
  array,
  size
}: {
  array?: JSONValue[];
  size?: number;
}): SplitArrayIntoChunksReturn => {
  if (!isArray(array) || !size) {
    return [];
  }

  let startIndex = 0;
  let endIndex = size;

  const allChunks: JSONValue[][] = [];

  while (endIndex <= array.length) {
    const chunk = [];

    while (startIndex < endIndex) {
      chunk.push(array[startIndex]);
      startIndex++;
    }

    allChunks.push(chunk);
    endIndex = endIndex + size;
  }

  const lastChunkLeft = startIndex < array.length;

  if (lastChunkLeft) {
    const lastChunk = [];

    while (startIndex < array.length) {
      lastChunk.push(array[startIndex]);
      startIndex++;
    }

    allChunks.push(lastChunk);
  }

  console.log(allChunks);
  return allChunks;
};

const splitArrayIntoChunks_tests: Test<SplitArrayIntoChunksReturn, SplitArrayIntoChunksReturn>[] = [
  {
    name: 'if no arguments returns []',
    expected: [],
    actual: splitArrayIntoChunks({})
  },
  {
    name: 'if no array returns []',
    expected: [],
    actual: splitArrayIntoChunks({ array: [], size: 1 })
  },
  {
    name: 'if no size returns []',
    expected: [],
    actual: splitArrayIntoChunks({ array: [1, 2] })
  },
  {
    name: 'if size is 0 returns []',
    expected: [],
    actual: splitArrayIntoChunks({ array: [1, 2], size: 0 })
  },
  {
    name: 'splits array into even chunks of 1',
    expected: [[1], [2], [3], [4], [5]],
    actual: splitArrayIntoChunks({ array: [1, 2, 3, 4, 5], size: 1 })
  },
  {
    name: 'splits array into even chunks of 2',
    expected: [
      [1, 2],
      [3, 4],
      [5, 6]
    ],
    actual: splitArrayIntoChunks({ array: [1, 2, 3, 4, 5, 6], size: 2 })
  },
  {
    name: 'if size of last chunk is less than size, returns chunked array + actual last chunk',
    expected: [
      [1, 2, 3],
      [4, 5]
    ],
    actual: splitArrayIntoChunks({ array: [1, 2, 3, 4, 5], size: 3 })
  },
  {
    name: 'if size of last chunk is less than size, returns chunked array + actual last chunk',
    expected: [[1, 2, 3, 4], [5]],
    actual: splitArrayIntoChunks({ array: [1, 2, 3, 4, 5], size: 4 })
  },
  {
    name: 'if size of first chunk is less than size, returns actual first chunk',
    expected: [[1, 2, 3, 4, 5]],
    actual: splitArrayIntoChunks({ array: [1, 2, 3, 4, 5], size: 7 })
  }
];

runTests({
  name: 'splitArrayIntoChunks',
  tests: splitArrayIntoChunks_tests
});
