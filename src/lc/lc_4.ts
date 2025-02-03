import { log } from '@src/utils/log.ts';

export function lc_4() {
  // [1, 2, 3, 4] = [24, 12, 8, 6]
  // input = [1, 2, 3, 4]
  // output = [24, 12, 8, 6]
  // output[i] = multiply all numbers of array except current number at i

  type productExceptSelf_T = (numbers: number[]) => 0 | number[];
  // O(n)
  const productExceptSelf: productExceptSelf_T = (numbers) => {
    if (!numbers?.length) return 0;

    const result = [];

    for (let i = 0; i < numbers.length; i++) {
      let resultK = 1;

      for (let k = 0; k < numbers.length; k++) {
        if (numbers[k] === numbers[i]) {
          continue;
        } else {
          resultK *= numbers[k];
        }
      }

      result[i] = resultK;
    }

    return result;
  };

  const call_productExceptSelf_WithNoArgs = productExceptSelf();
  log(
    call_productExceptSelf_WithNoArgs,
    call_productExceptSelf_WithNoArgs === 0,
    'if args are not provided return 0'
  );

  const call_productExceptSelf_WithFalsyArgs = productExceptSelf([0, 0, null, 0, 0]);
  log(
    call_productExceptSelf_WithFalsyArgs,
    JSON.stringify(call_productExceptSelf_WithFalsyArgs) === JSON.stringify([0, 0, 0, 0, 0]),
    'if passed numbers array is falsy return []'
  );

  const call_productExceptSelf_Properly = productExceptSelf([-1, 1, 0, -3, 3]);
  log(
    call_productExceptSelf_Properly,
    JSON.stringify(call_productExceptSelf_Properly) === JSON.stringify([0, 0, 9, 0, 0]),
    'call_productExceptSelf_Properly'
  );
}
