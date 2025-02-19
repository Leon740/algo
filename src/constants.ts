export interface User {
  firstName: string;
  lastName: string;
  dob: string;
}

export const USERS: User[] = [
  {
    firstName: 'Leonid',
    lastName: 'Dobrinov',
    dob: '04/01/2001'
  },
  {
    firstName: 'Grigoriy',
    lastName: 'Lipeikin',
    dob: '05/04/2001'
  },
  {
    firstName: 'Ivan',
    lastName: 'Petrov',
    dob: '05/31/2010'
  }
];

export const ARRAYS = {
  empty: [],
  numbers: [0, 1, 2, 3],
  letters: ['a', 'b', 'c'],
  users: USERS
};

export const OBJECTS = {
  empty: {},
  string: {
    keyA: 'valueA'
  },
  number: {
    one: 1,
    two: 2,
    three: 3
  },
  boolean: {
    isAdult: false
  },
  nested: {
    nestedA: {
      a: 'a'
    },
    nestedB: {
      b: 'b'
    }
  },
  regular: {
    a: 'a',
    2: 2,
    false: false,
    true: true,
    null: null,
    nested: { nestedA: 'nestedA' }
  }
};
