export function log(name: string, expected: unknown, actual: unknown): void {
  console.log(name);

  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    console.log('✅ Passed');
  } else {
    console.error('❌ Failed');
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
  }
}
