import { climbStairsTests } from './meta/easy/10_climb_stairs/10_climb_stair.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'removeDuplicatesFromArrayTests',
  tests: climbStairsTests
});
