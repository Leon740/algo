import { log } from '@src/utils/log.ts';

export function filterModule() {
  const numberIsGreaterThan10 = (number?: number): boolean => {
    if (typeof number !== 'number') return false;

    return number > 10;
  };

  console.group('numberIsGreaterThan10');

  const callNumberIsGreaterThan10WithNoArguments = numberIsGreaterThan10();
  log(
    callNumberIsGreaterThan10WithNoArguments,
    callNumberIsGreaterThan10WithNoArguments === false,
    'if number is not provided, return false'
  );

  const callNumberIsGreaterThan10WithNull = numberIsGreaterThan10('10');
  log(
    callNumberIsGreaterThan10WithNull,
    callNumberIsGreaterThan10WithNull === false,
    'if number is not a type number, return false'
  );

  const callNumberIsGreaterThan10With10 = numberIsGreaterThan10(10);
  log(
    callNumberIsGreaterThan10With10,
    callNumberIsGreaterThan10With10 === false,
    'if number is less than 10, return false'
  );

  const callNumberIsGreaterThan10With20 = numberIsGreaterThan10(20);
  log(
    callNumberIsGreaterThan10With20,
    callNumberIsGreaterThan10With20 === true,
    'if number is greater than 10, return true'
  );

  console.groupEnd();

  const plusOneToIndexOne = (number?: number, index?: number): boolean => {
    if (typeof number !== 'number') return false;

    if (typeof index !== 'number') return false;

    return index === 1 ? Boolean(number + 1) : true;
  };

  console.group('plusOneToIndexOne');

  const callPlusOneToIndexOneWithNoArguments = plusOneToIndexOne();
  log(
    callPlusOneToIndexOneWithNoArguments,
    callPlusOneToIndexOneWithNoArguments === false,
    'if number is not provided, return false'
  );

  const callPlusOneToIndexOneWithNoIndex = plusOneToIndexOne(1);
  log(
    callPlusOneToIndexOneWithNoIndex,
    callPlusOneToIndexOneWithNoIndex === false,
    'if index is not provided, return false'
  );

  const callPlusOneToIndexOneWithIndex0 = plusOneToIndexOne(1, 2);
  log(
    callPlusOneToIndexOneWithIndex0,
    callPlusOneToIndexOneWithIndex0 === true,
    'if index is not 1, return true'
  );

  const callPlusOneToIndexOneWithIndex1 = plusOneToIndexOne(1, 1);
  log(
    callPlusOneToIndexOneWithIndex1,
    callPlusOneToIndexOneWithIndex1 === true,
    'if index is 1, return boolean(number + 1)'
  );
  const callPlusOneToIndexOneWithResult0 = plusOneToIndexOne(-1, 1);
  log(
    callPlusOneToIndexOneWithResult0,
    callPlusOneToIndexOneWithResult0 === false,
    'if index is 1, and calced number is 0, return false'
  );

  console.groupEnd();

  const firstIndex = (number?: number, index?: number): boolean => {
    if (typeof number !== 'number') return false;

    if (typeof index !== 'number') return false;

    return index === 0;
  };

  console.group('firstIndex');

  const callFirstIndexWithNoArguments = firstIndex();
  log(
    callFirstIndexWithNoArguments,
    callFirstIndexWithNoArguments === false,
    'if number is not provided, return false'
  );

  const callFirstIndexWithNull = firstIndex('1');
  log(
    callFirstIndexWithNull,
    callFirstIndexWithNull === false,
    'if number is not a type number, return false'
  );

  const callFirstIndexWithoutIndex = firstIndex(10);
  log(
    callFirstIndexWithoutIndex,
    callFirstIndexWithoutIndex === false,
    'if index is not provided, return false'
  );

  const callFirstIndexWithIndex1 = firstIndex(10, 1);
  log(
    callFirstIndexWithIndex1,
    callFirstIndexWithIndex1 === false,
    'if index is not 0, return false'
  );

  const callFirstIndexWithIndex0 = firstIndex(10, 0);
  log(callFirstIndexWithIndex0, callFirstIndexWithIndex0 === true, 'if index is 0, return true');

  console.groupEnd();

  const filter = (
    array?: number[],
    callback?: (_number: number, _index: number) => boolean
  ): number[] | null => {
    if (!array) return null;

    if (!array.length) return [];

    if (!callback) return array;

    const result = [];

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i)) {
        result.push(array[i]);
      }
    }

    return result;
  };

  const IN_ARRAY = [0, 1, 2, 3];

  console.group('filter');

  const callFilterWithNoArguments = filter();
  log(
    callFilterWithNoArguments,
    callFilterWithNoArguments === null,
    'if array is not provided, return null'
  );

  const callFilterWithEmptyArray = filter([]);
  log(
    callFilterWithEmptyArray,
    JSON.stringify(callFilterWithEmptyArray) === JSON.stringify([]),
    'if array is empty, return []'
  );

  const callFilterWithoutCallback = filter(IN_ARRAY);
  log(
    callFilterWithoutCallback,
    JSON.stringify(callFilterWithoutCallback) === JSON.stringify(IN_ARRAY),
    'if callback is not provided, return array'
  );

  const callFilterWithNumberIsGreaterThan10 = filter([0, 10, 20, 30], numberIsGreaterThan10);
  log(
    callFilterWithNumberIsGreaterThan10,
    JSON.stringify(callFilterWithNumberIsGreaterThan10) === JSON.stringify([20, 30]),
    'numberIsGreaterThan10'
  );

  const callFilterWithPlusOneToIndexOne = filter([-2, -1, 0, 1, 2], plusOneToIndexOne);
  log(
    callFilterWithPlusOneToIndexOne,
    JSON.stringify(callFilterWithPlusOneToIndexOne) === JSON.stringify([-2, 0, 1, 2]),
    'plusOneToIndexOne'
  );

  const callFilterWithFirstIndex = filter(IN_ARRAY, firstIndex);
  log(
    callFilterWithFirstIndex,
    callFilterWithFirstIndex?.length === 1 && callFilterWithFirstIndex[0] === 0,
    'firstIndex'
  );

  console.groupEnd();
}
