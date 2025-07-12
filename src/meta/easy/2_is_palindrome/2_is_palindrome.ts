// O(n)
export const isPalindrome = (value: string | number): -1 | 0 | boolean => {
  if (typeof value === 'undefined') return -1;

  const stringifiedValue = String(value).trim().toLowerCase();

  if (stringifiedValue.length === 0) return 0;

  let startIndex = 0;
  let endIndex = stringifiedValue.length - 1;

  while (startIndex < endIndex) {
    if (stringifiedValue[startIndex] === stringifiedValue[endIndex]) {
      startIndex++;
      endIndex--;
    }
  }

  return true;
};
