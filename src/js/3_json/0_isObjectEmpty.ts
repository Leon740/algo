import { log } from '@src/utils/log.ts';

export function isObjectEmptyModule() {
  const isEmptyObject = (objectToCheck?: object | any[] = {}): boolean => {
    if (!objectToCheck || typeof objectToCheck !== 'object') {
      return false;
    }

    const isArrayLength = objectToCheck?.length;
    if (isArrayLength) {
      const arrayIsEmpty = isArrayLength === 0;
      return arrayIsEmpty;
    } else {
      const objectIsEmpty = Object.keys(objectToCheck).length === 0;
      return objectIsEmpty;
    }
  };

  const valuesToTest = {
    emptyString: '',
    emptyArray: [],
    fullArray: [0, 1, null, false, undefined, 2, 3],
    emptyObject: {},
    fullObject: {
      keyA: 'valueA',
      keyB: 'valueB'
    }
  };

  const emptyStringIsEmptyObject = isEmptyObject(valuesToTest.emptyString);
  log(
    emptyStringIsEmptyObject,
    emptyStringIsEmptyObject === false,
    'empty string _is not_ empty object'
  );

  const emptyArrayIsEmptyObject = isEmptyObject(valuesToTest.emptyArray);
  log(
    emptyArrayIsEmptyObject,
    emptyArrayIsEmptyObject === true,
    `${valuesToTest.emptyArray} _is_ empty object`
  );

  const fullArrayIsEmptyObject = isEmptyObject(valuesToTest.fullArray);
  log(
    fullArrayIsEmptyObject,
    fullArrayIsEmptyObject === false,
    `${valuesToTest.fullArray} _is not_ empty object`
  );

  const emptyObjectIsEmptyObject = isEmptyObject(valuesToTest.emptyObject);
  log(
    emptyObjectIsEmptyObject,
    emptyObjectIsEmptyObject === true,
    `${valuesToTest.emptyObject} _is_ empty object`
  );

  const fullObjectIsEmptyObject = isEmptyObject(valuesToTest.fullObject);
  log(
    fullObjectIsEmptyObject,
    fullObjectIsEmptyObject === false,
    `${valuesToTest.fullObject} _is not_ empty object`
  );
}
