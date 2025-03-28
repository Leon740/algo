export const forEach = <Item>({
  array,
  callbackFn
}: {
  array: Item[];
  // eslint-disable-next-line no-unused-vars
  callbackFn: ({ item, index }: { item: Item; index?: number }) => void;
}): void => {
  for (let index = 0; index < array.length; index++) {
    callbackFn({ item: array[index], index });
  }
};
