// O(max(n, m))

export const addStringifiedNums = (num_0: string, num_1: string): string => {
  let index_0 = num_0.length - 1;
  let index_1 = num_1.length - 1;
  let carry = 0;
  let result = '';

  while (index_0 >= 0 || index_1 >= 0 || carry) {
    const digit0 = index_0 >= 0 ? parseInt(num_0[index_0]) : 0;
    const digit1 = index_1 >= 0 ? parseInt(num_1[index_1]) : 0;
    const sum = digit0 + digit1 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10).toString() + result;

    console.log(`digit0 = ${digit0}`);
    console.log(`digit1 = ${digit1}`);
    console.log(`sum = ${sum}`);
    console.log(`carry = ${carry}`);
    console.log(`result = ${result}`);
    console.log('');

    index_0--;
    index_1--;
  }

  return result;
};
