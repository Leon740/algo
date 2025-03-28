import { testsOfFrom } from './array/1_from/from.test.ts';
import { testsOfPush } from './array/2_push/push.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: '',
  tests: testsOfPush
});
