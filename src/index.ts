import { myObjectTests } from './objects/object/object.test.ts';
import { runTests } from './utils/log.ts';

runTests({
  name: 'myObject',
  tests: myObjectTests
});
