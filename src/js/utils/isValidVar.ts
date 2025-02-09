import { log } from '@src/utils/log.ts';

export const isValidVar = (variable?: unknown, type?: string): boolean => {
  if (
    type === undefined ||
    (variable === null && type === 'null') ||
    (variable === undefined && type === 'undefined')
  ) {
    return false;
  }

  return typeof variable === type;
};

console.group('isValidVar');

const call_isValidVarVar_withNoArgs = isValidVar();
log(
  call_isValidVarVar_withNoArgs,
  call_isValidVarVar_withNoArgs === false,
  'if var no and type no return false'
);

const call_isValidVar_withVarOnly = isValidVar(2);
log(
  call_isValidVar_withVarOnly,
  call_isValidVar_withVarOnly === false,
  'if var yes and type no return false'
);

const call_isValidVar_withTypeOnly = isValidVar(undefined, 'string');
log(
  call_isValidVar_withTypeOnly,
  call_isValidVar_withTypeOnly === false,
  'if var no and type yes return false'
);

const call_isValidVar_withVarAndTypeFalse = isValidVar(4, 'string');
log(
  call_isValidVar_withVarAndTypeFalse,
  call_isValidVar_withVarAndTypeFalse === false,
  'if var and type are not the same type return false'
);

const call_isValidVar_withVarAndTypeTrue = isValidVar('str', 'string');
log(
  call_isValidVar_withVarAndTypeTrue,
  call_isValidVar_withVarAndTypeTrue === true,
  'if var and type are same type return true'
);

const call_isValidVar_withNull = isValidVar(null, null);
log(
  call_isValidVar_withNull,
  call_isValidVar_withNull === false,
  'if var and type are same type(null) return false'
);

const call_isValidVar_withUndefined = isValidVar(undefined, undefined);
log(
  call_isValidVar_withUndefined,
  call_isValidVar_withUndefined === false,
  'if var and type are same type(undefined) return false'
);

console.groupEnd();
