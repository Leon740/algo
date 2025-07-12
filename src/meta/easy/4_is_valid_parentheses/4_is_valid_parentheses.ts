// O(n)
export const isValidParentheses = (parentheses: string): -1 | 0 | boolean => {
  if (typeof parentheses === 'undefined') return -1;

  if (!parentheses || parentheses?.length % 2 !== 0) return false;

  const bracketsPairsMap = new Map();

  bracketsPairsMap.set('{', '}');
  bracketsPairsMap.set('[', ']');
  bracketsPairsMap.set('(', ')');

  const bracketsStack = [];

  for (let currentBracket of parentheses) {
    const isOpeningBracket = bracketsPairsMap.has(currentBracket);

    if (isOpeningBracket) {
      bracketsStack.push(currentBracket);
    } else {
      const lastOpeningBracket = bracketsStack.pop();
      const correspondingClosingBracket = bracketsPairsMap.get(lastOpeningBracket);
      if (correspondingClosingBracket !== currentBracket) {
        return false;
      }
    }
  }

  return bracketsStack.length === 0;
};
