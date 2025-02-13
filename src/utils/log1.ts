export interface Test<E, A> {
  name: string;
  expected: E;
  actual: A;
}

export const log = <E, A>({ name, expected, actual }: Test<E, A>): void => {
  console.log('');
  console.log(name);

  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('✅ Passed');
  } else {
    console.error('❌ Failed');
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
  }
  console.log('');
};

export const runTests = <E, A>({ name, tests }: { name: string; tests: Test<E, A>[] }): void => {
  console.group(`${name} tests`);

  tests.forEach(({ name, expected, actual }) => {
    log({
      name,
      expected,
      actual
    });
  });

  console.groupEnd();
};
