import { log } from '@src/utils/deprecated_log.ts';

export function composeModule() {
  type F = (x: number) => number;

  console.group('double');

  const double: F = (x = 1) => x * 2;

  const callDoubleWithNoArgs = double();
  log(callDoubleWithNoArgs, callDoubleWithNoArgs === 2, 'if args are not provided return 2');

  const callDoubleProperly = double(2);
  log(callDoubleProperly, callDoubleProperly === 4, 'call double properly 2 * 2 = 4');

  console.groupEnd();
  console.group('square');

  const square: F = (x = 1) => x * x;

  const callSquareWithNoArgs = square();
  log(callSquareWithNoArgs, callSquareWithNoArgs === 1, 'if args are not provided return 1');

  const callSquareProperly = square(8);
  log(callSquareProperly, callSquareProperly === 64, 'call square properly 8 * 8 = 64');

  console.groupEnd();
  console.group('increment');

  const increment: F = (x = 0) => x + 1;

  const callIncrementWithNoArgs = increment();
  log(callIncrementWithNoArgs, callIncrementWithNoArgs === 1, 'if args are not provided return 1');

  const callIncrementProperly = increment(2);
  log(callIncrementProperly, callIncrementProperly === 3, 'call increment properly 2 + 1 = 3');

  console.groupEnd();

  console.group('compose');

  function compose(functions: F[]): F {
    return function (x = 0) {
      if (!functions?.length) return x;

      let result = x;

      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
        console.log(result);
      }

      return result;
    };
  }

  const callComposeWithNoArgs = compose()();
  log(callComposeWithNoArgs, callComposeWithNoArgs === 0, 'if args are not provided return 0');

  const callComposeProperly = compose([increment, square, double])(4);
  log(callComposeProperly, callComposeProperly === 65, 'call compose properly');

  console.groupEnd();
}
