import { isArray } from '@src/utils/index.ts';

// console.log(ARRAYS.empty.map(() => ''));
// console.log(ARRAYS.numbers.map((currentNumber) => currentNumber * 2));
// console.log(ARRAYS.letters.map((currentLetter, index) => ({ [index]: currentLetter })));
// console.log(ARRAYS.users.map(({ firstName, lastName }) => `${firstName} ${lastName}`));

export const map = <SourceArrayItem, ResultArrayItem>({
  source,
  callback
}: {
  source: SourceArrayItem[];
  callback: ({
    // eslint-disable-next-line no-unused-vars
    item,
    // eslint-disable-next-line no-unused-vars
    index
  }: {
    item: SourceArrayItem;
    index: number;
  }) => ResultArrayItem;
}): ResultArrayItem[] => {
  const sourceIsEmpty = !isArray(source);
  if (sourceIsEmpty) return [];

  const result: ResultArrayItem[] = [];

  for (let i = 0; i < source.length; i++) {
    const sourceItem = source[i];
    const resultItem = callback({ item: sourceItem, index: i });

    result.push(resultItem);
  }

  return result;
};
