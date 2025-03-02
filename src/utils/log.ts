export interface Test {
  name: string;
  expected: unknown;
  actual: unknown;
}

export type TestResult = Omit<Test, 'name'>;

export const log = ({ name, expected, actual }: Test): void => {
  console.log('');
  console.log(name);

  const testIsValid = JSON.stringify(expected) === JSON.stringify(actual);
  const status = testIsValid ? '✅ Passed' : '❌ Failed';

  console.log('Status', status);
  console.log('Result', actual);

  if (!testIsValid) {
    console.log('Expected', expected);
  }

  console.log('');
};

export const runTests = ({ name, tests }: { name: string; tests: Test[] }): void => {
  console.group(name);

  tests.forEach(({ name, expected, actual }) => {
    log({
      name,
      expected,
      actual
    });
  });

  console.groupEnd();
};
