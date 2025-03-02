# 1 Naming

## Names should imply the intention

- copyArray -> getDuplicatedArray
- arr -> source

```ts
const ARRAY: number[] = [0, 1, 2];

// ❌
const copyArray = (arr: number[]): number[] => {
  return [...arr];
};
const copiedArray = copyArray(ARRAY);
console.log(copiedArray);

// ✅
const getDuplicatedArray = (source: number[]): number[] => {
  const duplicate = [...source];
  return duplicate;
};
const duplicatedArray = getDuplicatedArray(ARRAY);
console.log(duplicatedArray);
```

## No desinformation

- number -> currentNumber
- numbers0 -> evenNumbers
- numbers1 -> oddNumbers

```ts
const NUMBERS: number[] = [0, 1, 2, 3, 4];

// ❌
const numbers0 = NUMBERS.filter((number) => number % 2 === 0);
const numbers1 = NUMBERS.filter((number) => number % 2 !== 0);
console.log(numbers0);
console.log(numbers1);

// ✅
const evenNumbers = NUMBERS.filter((currentNumber) => currentNumber % 2 === 0);
const oddNumbers = NUMBERS.filter((currentNumber) => currentNumber % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);
```

## No generics

item, string, object, data, info

- locationItem -> currentLocation
- i -> index

```ts
const LOCATIONS: string[] = ['New York', 'San Francisco', 'Austin'];

// ❌
LOCATIONS.forEach((locationItem, i) => {
  console.log(i, locationItem);
});

// ✅
LOCATIONS.forEach((currentLocation, index) => {
  console.log(index, currentLocation);
});
```

## No explicit context

```ts
// ❌
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
console.log(paintedCar);
```

```ts
// ✅
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
console.log(paintedCar);
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

```ts
// ❌
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

```ts
// ✅
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

# 2. Functions

## The less args the better it is

1. if more than 2 args are used, the function does too much.
2. Instead of args use object.

Using object

1. provides better readability
2. provides more control
3. linters can highlight the properties not used

```ts
// ❌
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const createPerson_0 = (firstName: string, lastName: string, age: number): Person => {
  return {
    firstName,
    lastName,
    age
  };
};

// firstName and lastName broken order
const createdIvan = createPerson_0('Petrov', 'Ivan', 23);
console.log(createdIvan);

// ✅
const createPerson_1 = (info: Person): Person => {
  return {
    ...info
  };
};

const createdLeonid = createPerson_1({
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

// ❌
const suggestSubscriptionToAdultUsers = (users: User[]): void => {
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

// ✅

const getAdultUsers = (users: User[]): User[] => {
  const today = new Date();

  const adultUsers = users.filter(({ dob }) => {
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age > 18;
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

## Single source of truth

```ts
interface Car {
  make: string;
  model: string;
  year: string;
}

const CARS: Car[] = [
  {
    make: 'Toyota',
    model: 'Supra',
    year: '2008'
  },
  {
    make: 'Toyota',
    model: 'Aristo',
    year: '2010'
  },
  {
    make: 'Audi',
    model: 'A6',
    year: '2016'
  },
  {
    make: 'Audi',
    model: 'Q8',
    year: '2020'
  }
];

// ❌
const getAudis = (cars: Car[]): Car[] => {
  return cars.filter((currentCar) => currentCar.make === 'Audi');
};

const getToyotas = (cars: Car[]): Car[] => {
  return cars.filter((currentCar) => currentCar.make === 'Toyota');
};
const toyotas = getToyotas(CARS);
console.log(toyotas);

// ✅
const getCars = <K extends keyof Car>({
  cars,
  key = 'make' as K,
  value
}: {
  cars: Car[];
  key: K;
  value: Car[K];
}): Car[] => {
  return cars.filter((currentCar) => currentCar[key] === value);
};
const audis = getCars({ cars: CARS, key: 'make', value: 'Audi' });
console.log(audis);
```

## Do not use flags in parameters

```ts
// ❌
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```

```ts
// ✅
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

## Function should be pure

1. no outside access -> no side effects
2. same output with same input

```ts
const NAME = 'Leonid Dobrinov';

// ❌
const getUserName_0 = () => {
  return NAME.split(' ');
};
console.log(getUserName_0());

// ✅
const getUserName_1 = (name: string): { firstName: string; lastName: string } => {
  const separatedNames = name.split(' ');

  return {
    firstName: separatedNames[0],
    lastName: separatedNames[1]
  };
};
console.log(getUserName_1(NAME));
```

## Immutable

```ts
interface Product {
  name: string;
  qty: number;
}

const cart: Product[] = [
  {
    name: 'Toyota Supra',
    qty: 5
  },
  {
    name: 'Audi Avant',
    qty: 1
  }
];
console.log(cart);

const BMW: Product = {
  name: 'BMW M5',
  qty: 1
};

// ❌
const addToCart0 = (product: Product): void => {
  cart.push(product);
};
console.log(cart);

// ✅
const addToCart_1 = ({
  product,
  currentCart
}: {
  product: Product;
  currentCart: Product[];
}): Product[] => {
  return [...currentCart, product];
};

console.log(addToCart_1({ product: BMW, currentCart: cart }));
```

## Use functions (declarative) over loops (imperative)

```ts
interface TeamMember {
  name: string;
  linesOfCode: number;
}

const TEAM_OUTPUT: TeamMember[] = [
  {
    name: 'Leonid D',
    linesOfCode: 3000
  },
  {
    name: 'Grigoriy L',
    linesOfCode: 2000
  },
  {
    name: 'Ivan P',
    linesOfCode: 1000
  }
];

// ❌
let totalTeamOutput_0 = 0;
for (let i = 0; i < TEAM_OUTPUT.length; i++) {
  totalTeamOutput_0 += TEAM_OUTPUT[i].linesOfCode;
}
console.log(totalTeamOutput_0);

// ✅
const totalTeamOutput_1 = TEAM_OUTPUT.reduce((acc, member) => acc + member.linesOfCode, 0);
console.log(totalTeamOutput_1);
```

## Incapsulate conditions

```ts
const state = 'loading';

const displayLoader = () => {
  console.log('loading...');
};

// ❌
if (state === 'loading') {
  displayLoader();
}

// ✅
const isLoadingState = state === 'loading';
if (isLoadingState) {
  displayLoader();
}
```

# 3. Objects

## Use getters and setters

_Problem_
Class state can be modified outside, which leads to side effects and unpredictable behavior.
_Solution_
Use private properties, encapsulate logic inside, have a set of actions to modify it, defined inside.

```ts
const DOWN_PAYMENT = 1000;

const SHOES = {
  name: 'Shoes',
  price: DOWN_PAYMENT + 150
};

// ❌
class BankAccount_0 {
  private _balance: number;

  constructor(downPayment: number = 1000) {
    this._balance = downPayment;
  }

  buy(price: number = 0): number {
    if (price < this._balance) {
      this._balance -= price;
    } else {
      console.log('Not enough money on your balance');
    }
    return this._balance;
  }
}
const bankOfAmerica = new BankAccount_0(DOWN_PAYMENT);

// ✅
class BankAccount_1 {
  private _balance: number;

  constructor(downPayment: number = 1000) {
    this._balance = downPayment;
  }

  set setBalance(newBalance: number) {
    if (newBalance > 0) {
      this._balance = newBalance;
    } else {
      console.log('Not enough money on your balance');
    }
  }

  get getBalance() {
    return this._balance;
  }

  buy(price: number = 0): number {
    this.setBalance = this.getBalance - price;
    return this.getBalance;
  }
}
const capitalOne = new BankAccount_1(DOWN_PAYMENT);

bankOfAmerica.buy(SHOES.price);
console.log(bankOfAmerica);
capitalOne.buy(SHOES.price);
console.log(capitalOne);
```

## SRP, Composition

_Problem_
If you have all of the logic inside of one class or function, you will have to modify it multiple times, this might cause side effects, and break srp.
_Solution_
Create composition or inheritance, split it into multiple small sections, which are easier to test, maintain and enhance separately.

```ts
const DOWN_PAYMENT = 1000;

type Balance = number;
interface TransactionSchema {
  name: string;
  amount: number;
}

const PRODUCTS: Record<string, TransactionSchema> = {
  nike: {
    name: 'Nike Shoes',
    amount: DOWN_PAYMENT + 150
  },
  adidas: {
    name: 'Adidas Shoes',
    amount: DOWN_PAYMENT - 150
  }
};

class Transaction {
  private _balance: Balance;
  private _transaction: TransactionSchema;

  constructor(balance: Balance, transaction: TransactionSchema) {
    this._balance = balance;
    this._transaction = transaction;
  }

  set setBalance(newBalance: Balance) {
    this._balance = newBalance;
  }

  get getBalance(): Balance {
    return this._balance;
  }

  approve(): void {
    this.setBalance = this.getBalance - this._transaction.amount;
    console.log(`${this._transaction.name} Approved, current balance ${this.getBalance}`);
  }

  decline(): void {
    console.log(`${this._transaction.name} Declined`);
  }

  verify(): number {
    const newPotentialBalance = this.getBalance - this._transaction.amount;

    if (newPotentialBalance > 0) {
      this.approve();
    } else {
      this.decline();
    }

    return this.getBalance;
  }
}

class BankAccount {
  private _balance: number;

  constructor(downPayment: number = 1000) {
    this._balance = downPayment;
  }

  set setBalance(newBalance: number) {
    this._balance = newBalance;
  }

  get getBalance() {
    return this._balance;
  }

  buy(product: TransactionSchema) {
    const transaction = new Transaction(this.getBalance, product);
    this.setBalance = transaction.verify();
  }
}

const capitalOne = new BankAccount(DOWN_PAYMENT);
capitalOne.buy(PRODUCTS.nike);
capitalOne.buy(PRODUCTS.adidas);
console.log(capitalOne);
```
