import { log } from '@src/utils/log.ts';

export function lc_2() {
  const ARRAY = [0, 1, 0, 3, 12];

  const moveZeroes = (array?: number[] = []): false | number[] => {
    if (!array?.length) return false;

    if (array.length === 1) return array;

    let index = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        array[index] = array[i];
        index++;
      }
    }

    for (let i = index; i < array.length; i++) {
      array[i] = 0;
    }

    return array;
  };

  const callMoveZeroesWithNoArgs = moveZeroes();
  log(
    callMoveZeroesWithNoArgs,
    callMoveZeroesWithNoArgs === false,
    'if args are not provided return false'
  );

  const oneItemArray = [2];
  const callMoveZeroesWithOneItemInArray = moveZeroes(oneItemArray);
  log(
    callMoveZeroesWithOneItemInArray,
    JSON.stringify(callMoveZeroesWithOneItemInArray) === JSON.stringify(oneItemArray),
    'if provided array length is 1 return array'
  );

  const callMoveZeroesProperly = moveZeroes(ARRAY);
  log(
    callMoveZeroesProperly,
    JSON.stringify(callMoveZeroesProperly) === JSON.stringify([1, 3, 12, 0, 0]),
    'properly call moveZeroes'
  );
}
