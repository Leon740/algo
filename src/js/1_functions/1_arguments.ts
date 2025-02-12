import { log } from '@src/utils/log.ts';

export function argumentsModule() {
  type JSONValueT = null | boolean | number | string | JSONValueT[] | { [key: string]: JSONValueT };

  const getArgumentsLength = (...args: JSONValueT[]): number => {
    console.log(args);
    if (!args?.length) return 0;

    return args.length;
  };

  const callGetArgumentsLengthWithNoArgs = getArgumentsLength();
  log(
    callGetArgumentsLengthWithNoArgs,
    callGetArgumentsLengthWithNoArgs === 0,
    'if args are not provided return 0'
  );

  const callGetArgumentsLengthWithFalsyArgs = getArgumentsLength(false, null, undefined, 0);
  log(
    callGetArgumentsLengthWithFalsyArgs,
    callGetArgumentsLengthWithFalsyArgs === 4,
    'count all falsy args'
  );

  const callGetArgumentsLengthWithAnyArgs = getArgumentsLength(
    1,
    0,
    true,
    false,
    null,
    undefined,
    [],
    {}
  );
  log(callGetArgumentsLengthWithAnyArgs, callGetArgumentsLengthWithAnyArgs === 8, 'count all args');
}
