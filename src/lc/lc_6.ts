import { log } from '@src/utils/log.ts';

export function lc_6() {
  const compress = (chars?: string[]): false | string[] => {
    if (!chars?.length) return false;

    const charsMap = new Map();

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];

      if (!charsMap.has(char)) {
        charsMap.set(char, 1);
      } else {
        charsMap.set(char, charsMap.get(char) + 1);
      }
    }

    const outputArray: string[] = [];

    charsMap.forEach((value, key) => {
      outputArray.push(key);

      if (value > 1 && value < 10) {
        outputArray.push(value.toString());
      } else if (value >= 10) {
        outputArray.push(...value.toString().split(''));
      }
    });

    return outputArray;
  };

  const call_compress_withNoCharsArray = compress();
  log(
    call_compress_withNoCharsArray,
    call_compress_withNoCharsArray === false,
    'if array is not provided return false'
  );

  const oneCharArray = ['a'];
  const call_compress_withOneChar = compress(oneCharArray);
  log(
    call_compress_withOneChar,
    JSON.stringify(oneCharArray) === JSON.stringify(oneCharArray),
    'if only one char, return char'
  );

  const charsArrayRegularFrequency = ['a', 'a', 'b', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'c', 'c'];
  const call_compress_withCharsArrayRegularFrequency = compress(charsArrayRegularFrequency);
  log(
    call_compress_withCharsArrayRegularFrequency,
    JSON.stringify(call_compress_withCharsArrayRegularFrequency) ===
      JSON.stringify(['a', '2', 'b', '4', 'c', '6']),
    'regular char frequency'
  );

  const charsArrayFrequencyGreaterThan10 = [
    'a',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b',
    'b'
  ];
  const call_compress_withCharsArrayFrequencyGreaterThan10 = compress(
    charsArrayFrequencyGreaterThan10
  );
  log(
    call_compress_withCharsArrayFrequencyGreaterThan10,
    JSON.stringify(call_compress_withCharsArrayFrequencyGreaterThan10) ===
      JSON.stringify(['a', 'b', '1', '2']),
    'char frequency greater than 10'
  );
}
