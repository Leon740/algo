export function log(expression: unknown, test: boolean, description: string): void {
  console.log(expression);
  console.log(`Test: ${description}`);
  if (test) {
    console.log('✅ Passed');
  } else {
    console.error('❌ Failed');
  }
}
