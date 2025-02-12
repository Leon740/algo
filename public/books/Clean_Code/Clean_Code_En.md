# 1 Naming

## Names should imply the intention

- copyArray -> getDuplicatedArray
- arr -> source

❌

```ts
const copyArray = (arr: number[]): number[] => {
  return [...arr];
};
```

✅

```ts
const getDuplicatedArray = (source: number[]): number[] => {
  const duplicate = [...source];
  return duplicate;
};
```

## No desinformation

- number -> currentNumber
- numbers2 -> evenNumbers
- numbers1 -> oddNumbers

❌

```ts
const numbers: number[] = [0, 1, 2, 3, 4];
const numbers2 = numbers.filter((number) => number % 2 === 0);
const numbers1 = numbers.filter((number) => number % 2 !== 0);
```

✅

```ts
const NUMBERS: number[] = [0, 1, 2, 3, 4];
const evenNumbers = NUMBERS.filter((currentNumber) => currentNumber % 2 === 0);
const oddNumbers = NUMBERS.filter((currentNumber) => currentNumber % 2 !== 0);
```

## No generics

item, string, object, data, info

- locationItem -> currentLocation
- i -> index

❌

```ts
const LOCATIONS: string = ['New York', 'San Francisco', 'Austin'];
LOCATIONS.forEach((locationItem, i) => {
  console.log(i, locationItem);
});
```

✅

```ts
const LOCATIONS: string = ['New York', 'San Francisco', 'Austin'];
LOCATIONS.forEach((currentLocation, index) => {
  console.log(index, currentLocation);
});
```

## No explicit context

❌

```ts
interface Car {
  carMake: string;
  carModel: string;
  carColor: string;
}

const CAR = {
  carMake: 'Audi',
  carModel: 'A6',
  carColor: 'n/a'
};

const paintCar = (car: Car): Car => {
  car.carColor = 'black';
  return car;
};
const paintedCar = paintCar(CAR);
```

✅

```ts
interface Car {
  make: string;
  model: string;
  color: string;
}

const CAR = {
  make: 'Audi',
  model: 'A6',
  color: 'n/a'
};

const paintCar = (car: Car): Car => {
  car.color = 'black';
  return car;
};
const paintedCar = paintCar(CAR);
```

## Use

- readable names
- define it's scope
- make it easy to find with IDE search
- explicit is better than implicit

- Tday -> Day
  no need to mention it's type, IDE knows it

- ALL_DAYS -> DAYS_OF_WEEK
- days -> daysOfWeek
- day -> currentDay

❌

```ts
type TDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const ALL_DAYS: TDay[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const getWorkingDaysInWeek = (days: TDay[]): TDay[] => {
  return days.filter((day) => day !== 'Saturday' && day !== 'Sunday');
};
console.log(getWorkingDaysInWeek(ALL_DAYS));

const getWeekendDaysInWeek = (days: TDay[]): TDay[] => {
  return days.filter((day) => day === 'Saturday' || day === 'Sunday');
};
console.log(getWeekendDaysInWeek(ALL_DAYS));
```

✅

```ts
type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const DAYS_OF_WEEK: Day[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const isWeekend = (day: Day): boolean => {
  return day === 'Saturday' || day === 'Sunday';
};

const getWorkingDaysOfWeek = (daysOfWeek: Day[]): Day[] => {
  return daysOfWeek.filter((currentDay) => !isWeekend(currentDay));
};
console.log(getWorkingDaysOfWeek(DAYS_OF_WEEK));

const getWeekendDaysOfWeek = (daysOfWeek: Day[]): Day[] => {
  return daysOfWeek.filter((currentDay) => isWeekend(currentDay));
};
console.log(getWeekendDaysOfWeek(DAYS_OF_WEEK));
```

# 2 Functions

## The less args the better it is

if you have many args it means the function does too much.  
Instead of args collection use object, this gives more readability and control.

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
```

❌

```ts
const createPerson = (firstName: string, lastName: string, age: number): Person => {
  return {
    firstName,
    lastName,
    age
  };
};

const createdLeonid = createPerson('Leonid', 'Dobrinov', 23);
console.log(createdLeonid);
```

✅

```ts
const createPerson = (personInfo: Person): Person => {
  return {
    ...personInfo
  };
};

const createdLeonid = createPerson({
  firstName: 'Leonid',
  lastName: 'Dobrinov',
  age: 23
});
console.log(createdLeonid);
```

## Function should solve 1 problem

```ts
interface User {
  firstName: string;
  lastName: string;
  dob: string;
  subscribed: boolean;
}
const USERS: User[] = [
  {
    firstName: 'Leonid',
    lastName: 'Dobrinov',
    dob: '04/01/2001',
    subscribed: false
  },
  { firstName: 'Grigoriy', lastName: 'Lipeikin', dob: '05/01/2000', subscribed: false },
  { firstName: 'Ivan', lastName: 'Petrov', dob: '05/31/2002', subscribed: true },
  { firstName: 'Vladislav', lastName: 'Lebedenets', dob: '10/06/2008', subscribed: false }
];
```

❌

```ts
const suggestSubscriptionToAdultUsers = (users: User[]): number => {
  const today = new Date();
  const adultUsers = users.filter(({ dob }) => {
    const birthDay = new Date(dob);
    const age = today.getFullYear() - birthDay.getFullYear();
    return age > 18;
  });
  adultUsers.forEach((currentUser) =>
    !currentUser.subscribed
      ? console.log(`Subscribe to of content. Special promotion for ${currentUser.firstName}`)
      : ''
  );
};

suggestSubscriptionToAdultUsers(USERS);
```

✅

```ts
const getAdultUsers = (users: User[]): User[] => {
  const today = new Date();

  const adultUsers = users.filter(({ dob }) => {
    const userBirthDay = new Date(dob);
    const userAge = today.getFullYear() - userBirthDay.getFullYear();
    return userAge > 18;
  });

  return adultUsers;
};

const getNotSubscribedUsers = (users: User[]): User[] => {
  const notSubscribedUsers = users.filter(({ subscribed }) => !subscribed);
  return notSubscribedUsers;
};

const askUserToSubscribe = (user: User): void => {
  console.log(`Hey ${user.firstName}, Subscribe to enjoy content.`);
};

const askAllNotSubscribedAdultUsersToSubscribe = (users: User[]): void => {
  const notSubscribedUsers = getNotSubscribedUsers(users);
  const notSubscribedAdultUsers = getAdultUsers(notSubscribedUsers);

  notSubscribedAdultUsers.forEach((currentUser) => askUserToSubscribe(currentUser));
};

console.log(askAllNotSubscribedAdultUsersToSubscribe(USERS));
```
