import { sliceTests } from './array/7_slice/slice.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'sliceTests',
  tests: sliceTests
});
