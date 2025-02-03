import { log } from '@src/utils/log.ts';

export function map() {
  function addOne(number?: number): number {
    if (typeof number === 'undefined') return 0;

    return number + 1;
  }
  log(addOne(), addOne() === 0, 'if number is not provided, return 0');
  log(addOne(1), addOne(1) === 2, '1 + 1 = 2');

  function plusIndex(number?: number, index?: number): number {
    if (typeof number === 'undefined') return 0;

    if (typeof index === 'undefined') return number;

    return number + index;
  }

  log(plusIndex(), plusIndex() === 0, 'if number is not provided, return 0 ');
  log(plusIndex(1), plusIndex(1) === 1, 'if index is not provided, return number');
  log(plusIndex(1, 1), plusIndex(1, 1) === 2, '1 + 1 = 2');

  function constant(): number {
    return 42;
  }

  log(constant(), constant() === 42, 'always return 42');

  function map(array?: number[], callback?: (_number: number, _index: number) => number): number[] {
    if (!array?.length) {
      return [];
    }

    if (!callback) {
      return array;
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        result.push(callback(array[i], i));
      }
    }

    return result;
  }

  const inArray = [0, 1, 2, 3];

  log(map(), JSON.stringify(map()) === JSON.stringify([]), 'if array is not provided, return []');
  log(map([]), JSON.stringify(map([])) === JSON.stringify([]), 'if array is empty, return []');
  log(
    map(inArray),
    JSON.stringify(map(inArray)) === JSON.stringify(inArray),
    'if callback is not provided, return array'
  );
  log(
    map(inArray, addOne),
    JSON.stringify(map(inArray, addOne)) === JSON.stringify([1, 2, 3, 4]),
    'addOne'
  );
  log(
    map(inArray, plusIndex),
    JSON.stringify(map(inArray, plusIndex)) === JSON.stringify([0, 2, 4, 6]),
    'plusIndex'
  );
  log(
    map(inArray, constant),
    JSON.stringify(map(inArray, constant)) === JSON.stringify([42, 42, 42, 42]),
    'constant'
  );
}
