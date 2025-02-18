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
