export const VALUES = {
  undefined: undefined,
  null: null,
  emptyString: '',
  string: 'Leonid',
  zeroNumber: 0,
  number: 23,
  true: true,
  false: false,
  emptyArray: [],
  numbersArray: [0, 1, 2],
  emptyObject: {},
  regularObject: {
    a: 0,
    b: 1,
    c: 2
  },
  arrayLikeObject: {
    [0]: 0,
    [1]: 1,
    [2]: 2,
    length: 3
  },
  emptyFunction: () => {},
  emptySet: new Set(),
  numbersSet: new Set([0, 1, 1, 2, 2, 2]),
  emptyMap: new Map(),
  numbersMap: new Map([
    ['a', 0],
    ['b', 1],
    ['c', 2]
  ])
};
