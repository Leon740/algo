import { reduceTests } from './arrays/reduce/reduce.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'reduceTests',
  tests: reduceTests
});
