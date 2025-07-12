// O(n × m)
export const getLongestCommonPrefixOfArray = (strings: string[]): -1 | string => {
  if (typeof strings === 'undefined') return -1;

  if (strings.length === 0) return '';

  let prefix = strings[0];

  for (let i = 1; i < strings.length; i++) {
    while (!strings[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }

  return prefix;
};
