import { isEmpty } from '@src/object/0_isEmpty/isEmpty.ts';

export const validateIndexes = ({
  array,
  startIndex,
  endIndex
}: {
  array: any[];
  startIndex?: number;
  endIndex?: number;
}): { startIndex: number; endIndex: number } => {
  const throwInvalidIndexes = () => {
    startIndex = endIndex = 0;

    return {
      startIndex,
      endIndex
    };
  };

  if (isEmpty({ object: array })) {
    throwInvalidIndexes();
  }

  if (!startIndex) {
    startIndex = 0;
  }
  if (!endIndex) {
    endIndex = array.length;
  }

  // + startIndex OUT
  if (startIndex >= array.length) {
    // return [];
    throwInvalidIndexes();
  }

  // - startIndex OUT,
  if (startIndex < -array.length) {
    startIndex = 0;
  }

  // - startIndex IN,
  if (-array.length <= startIndex && startIndex < 0) {
    startIndex = startIndex + array.length;
  }

  // + endIndex OUT
  if (endIndex >= array.length) {
    endIndex = array.length;
  }

  // - endIndex OUT
  if (endIndex < -array.length) {
    endIndex = 0;
  }

  // - endIndex IN
  if (-array.length <= endIndex && endIndex < 0) {
    endIndex = endIndex + array.length;
  }

  // +- startIndex >= endIndex,
  if (startIndex >= endIndex) {
    // return [];
    throwInvalidIndexes();
  }

  return { startIndex, endIndex };
};
