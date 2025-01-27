import { log } from '@src/utils/log.ts';

export function lc1() {
  const CANDIES = [2, 3, 5, 1, 3];
  const EXTRA_CANDIES = 3;

  const getGreatestAmountOfCandies = (candies?: number[]): number => {
    if (!candies?.length) return 0;

    let max = 0;

    for (let i = 0; i < candies.length; i++) {
      if (max < candies[i]) {
        max = candies[i];
      }
    }

    return max;
  };

  log(
    getGreatestAmountOfCandies(),
    getGreatestAmountOfCandies() === 0,
    'if candies is not provided return 0'
  );
  log(
    getGreatestAmountOfCandies([]),
    getGreatestAmountOfCandies([]) === 0,
    'if candies is empty return 0'
  );
  log(
    getGreatestAmountOfCandies(CANDIES),
    getGreatestAmountOfCandies(CANDIES) === 5,
    'returns the greatest amount of candies'
  );

  const calcWithExtraCandies = (
    candies?: number[],
    extraCandies?: number
  ): 0 | number[] | boolean[] => {
    if (!candies?.length) return 0;

    if (!extraCandies) return candies;

    const result: boolean[] = [];

    for (let i = 0; i < candies.length; i++) {
      result.push(candies[i] + extraCandies >= getGreatestAmountOfCandies(candies));
    }

    return result;
  };

  log(calcWithExtraCandies(), calcWithExtraCandies() === 0, 'if candies is not provided return 0');
  log(calcWithExtraCandies([]), calcWithExtraCandies([]) === 0, 'if candies is empty return 0');
  log(
    calcWithExtraCandies(CANDIES),
    JSON.stringify(calcWithExtraCandies(CANDIES)) === JSON.stringify(CANDIES),
    'if callback is not provided return candies'
  );
  log(
    calcWithExtraCandies(CANDIES, EXTRA_CANDIES),
    JSON.stringify(calcWithExtraCandies(CANDIES, EXTRA_CANDIES)) ===
      JSON.stringify([true, true, true, false, true]),
    'executes appropriately'
  );
}
