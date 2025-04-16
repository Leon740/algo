# Clean Code

## 1. Naming

### Names should imply the intention

- copyArray -> duplicateArray
- arr -> source

```ts
// ❌
const copyArray = (arr: number[]): number[] => {
  return [...arr];
};
const copiedArray = copyArray(ARRAYS.numbers);
console.log(copiedArray);

// ✅
const duplicateArray = <ArrayItem>(source: ArrayItem[]) => {
  return [...source];
};
const duplicatedNumbers = duplicateArray(ARRAYS.numbers);
console.log(duplicatedNumbers);
```

### No desinformation

- isEven func
- number -> currentNumber
- numbers0 -> evenNumbers
- numbers1 -> oddNumbers

```ts
// ❌
const numbers0 = ARRAYS.numbers.filter((number) => number % 2 === 0);
const numbers1 = ARRAYS.numbers.filter((number) => number % 2 !== 0);
console.log(numbers0);
console.log(numbers1);

// ✅
const isEven = (number: number) => {
  return number % 2 === 0;
};

const evenNumbers = ARRAYS.numbers.filter(isEven);
const oddNumbers = ARRAYS.numbers.filter((currentNumber) => !isEven(currentNumber));
console.log(evenNumbers);
console.log(oddNumbers);
```

### No generics

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

### No explicit context

```ts
// ❌
interface Car {
  carMake: string;
  carModel: string;
  carColor: string;
}

// ✅
interface Car {
  make: string;
  model: string;
  color: string;
}

const CAR: Car = {
  carMake: 'Audi',
  carModel: 'A6',
  carColor: 'n/a'
};

const paint = (car: Car): Car => {
  // repeating
  car.carColor = 'black';
  return car;
};
const paintedCar = paint(CAR);
console.log(paintedCar);
```

### Use

- readable names
- define it's scope
- make it easy to find with IDE search
- explicit is better than implicit

- Tday -> Day  
  no need to mention it's type, IDE knows it. Prefixes are skipped by brain.
- ALL_DAYS -> DAYS_OF_WEEK
- no get keyword
- no days arg
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

const getWorkingDaysOfWeek = (days: TDay[]) => {
  return days.filter((day) => day !== 'Saturday' && day !== 'Sunday');
};
console.log(getWorkingDaysOfWeek(ALL_DAYS));

const getWeekendDaysOfWeek = (days: TDay[]) => {
  return days.filter((day) => day === 'Saturday' || day === 'Sunday');
};
console.log(getWeekendDaysOfWeek(ALL_DAYS));
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

const isWeekend = (day: Day) => {
  return day === 'Saturday' || day === 'Sunday';
};

const workingDaysOfWeek = DAYS_OF_WEEK.filter((currentDay) => !isWeekend(currentDay));
const weekendDaysOfWeek = DAYS_OF_WEEK.filter((currentDay) => isWeekend(currentDay));

console.log(workingDaysOfWeek);
console.log(weekendDaysOfWeek);
```

## 2. Functions

### The less args the better it is

#### Problem

If function is using more than 2 args it means it does too much.
The more args the harder it is to test the function.

#### Solution

Compose function into smaller multiple functions.
In case when more than 1 arg is needed use object for args.

Using object

1. provides better readability
2. provides more control
3. linters can highlight the properties not used

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// ❌
const createPerson_0 = (firstName: string, lastName: string, age: number): Person => {
  return {
    firstName,
    lastName,
    age
  };
};

// wrong order of firstName and lastName
const createdIvan = createPerson_0('Petrov', 'Ivan', 21);
console.log(createdIvan);

// ✅
const createPerson_1 = (person: Person): Person => {
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age
  };
};

const createdLeonid = createPerson_1({ firstName: 'Leonid', lastName: 'Dobrinov', age: 23 });
console.log(createdLeonid);
```

### Function should solve 1 problem

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
const suggestSubscriptionToAdultUsers = (users: User[]) => {
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
const getUserAge = ({ dob }: Pick<User, 'dob'>) => {
  const currentYear = new Date().getFullYear();
  const userBirthsYear = new Date(dob).getFullYear();
  const userAge = currentYear - userBirthsYear;
  return userAge;
};

const getAdultUsers = (users: User[]) => {
  return users.filter(({ dob }) => getUserAge({ dob }) >= 18);
};

const getNotSubscribedUsers = (users: User[]) => {
  return users.filter(({ subscribed }) => !subscribed);
};

const askUserToSubscribe = ({ firstName }: Pick<User, 'firstName'>) => {
  console.log(`Hey ${firstName}, Subscribe to enjoy content.`);
};

const askAllNotSubscribedAdultUsersToSubscribe = (users: User[]) => {
  const notSubscribedUsers = getNotSubscribedUsers(users);
  const notSubscribedAdultUsers = getAdultUsers(notSubscribedUsers);

  notSubscribedAdultUsers.forEach((currentUser) => askUserToSubscribe(currentUser));
};

console.log(askAllNotSubscribedAdultUsersToSubscribe(USERS));
```

### Single source of truth

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
const getAudis = (cars: Car[]) => {
  return cars.filter((currentCar) => currentCar.make === 'Audi');
};

const getToyotas = (cars: Car[]) => {
  return cars.filter((currentCar) => currentCar.make === 'Toyota');
};
const toyotas = getToyotas(CARS);
console.log(toyotas);

// ✅
const getCars = <Key extends keyof Car>({
  cars,
  key = 'make' as Key,
  value
}: {
  cars: Car[];
  key: Key;
  value: Car[Key];
}): Car[] => {
  return cars.filter((currentCar) => currentCar[key] === value);
};
const audis = getCars({ cars: CARS, key: 'make', value: 'Audi' });
console.log(audis);
```

### Do not use flags in parameters

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

### Functions should be pure

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

### Immutable

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

### Use functions (declarative) over loops (imperative)

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

### Encapsulate conditions

```ts
type State = 'Loading' | 'Success' | 'Error';
const STATE: State = 'Loading';

// ❌
const displaySpinner = () => {
  console.log('Loading...');
};

if (STATE === 'Loading') {
  displaySpinner();
}

// ✅
const shouldDisplaySpinner = (state: State) => {
  if (state === 'Loading') {
    console.log('Loading...');
  }
};
shouldDisplaySpinner(STATE);
```

## 3. Objects

### Use getters and setters

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

### Single Responsibility Principle, Composition, Inheritance

One module (class, function) is responsible only for this small action.

#### Problem

If all of the logic is inside of one module, the entire module will be modified multiple times, this might cause side effects, and the entire module needs to be tested again after every change.

#### Solution

Create composition or inheritance, split it into multiple small sections, which are easier to test, maintain and enhance separately.

#### Pros

- flexibility: only small modules will be modified, but the main module will remain the same
- easy maintenance: test only modified modules, not the entire main module
- logic encapsulation and sharing (ex: children in React comps, while this the logic of the main comp can still exist (encapsulated))

```ts
const DOWN_PAYMENT = 1000;

type Balance = number;
interface Product {
  name: string;
  amount: number;
}

const PRODUCTS: Record<string, Product> = {
  nike: {
    name: 'Nike Shoes',
    amount: DOWN_PAYMENT + 150
  },
  adidas: {
    name: 'Adidas Shoes',
    amount: DOWN_PAYMENT - 150
  }
};

type TransactionSchema = Product & {
  status: 'approved' | 'declined' | 'pending';
};

class Transaction {
  private _transaction: TransactionSchema;

  constructor(transaction: Product) {
    this._transaction = { ...transaction, status: 'pending' };
  }

  get getTransaction(): TransactionSchema {
    return this._transaction;
  }

  get getStatus(): string {
    return this._transaction.status;
  }

  set setStatus(newStatus: TransactionSchema['status']) {
    this._transaction.status = newStatus;
  }

  approve(): void {
    console.log(`${this._transaction.name} Approved`);
  }

  decline(): void {
    console.log(`${this._transaction.name} Declined`);
  }

  verify(potentialBalance: number): TransactionSchema {
    if (potentialBalance > 0) {
      this.setStatus = 'approved';
    } else {
      this.setStatus = 'declined';
    }
    console.log(`${this.getTransaction.name} ${this.getStatus}`);

    return this.getTransaction;
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

  get getBalance(): Balance {
    return this._balance;
  }

  buy(product: Product) {
    const newPotentialBalance = this.getBalance - product.amount;

    const currentTransaction = new Transaction(product);
    currentTransaction.verify(newPotentialBalance);

    if (currentTransaction.getStatus === 'approved') {
      this.setBalance = newPotentialBalance;
    }
  }
}

const capitalOne = new BankAccount(DOWN_PAYMENT);
capitalOne.buy(PRODUCTS.nike);
capitalOne.buy(PRODUCTS.adidas);
console.log(capitalOne);
```

### Open Closed Principle

Module (class, function) needs to be extendable but not modifiable.

#### Problem

If all of the logic is inside of one module, the entire module will be modified multiple times, this might cause side effects, and the entire module needs to be tested again after every change.

#### Solution

Create composition or inheritance.

#### Pros

- flexibility: only small modules will be modified, but the main module will remain the same
- easy maintenance: test only modified modules, not the entire main module
- logic encapsulation and sharing (ex: children in React comps, while this the logic of the main comp can still exist (encapsulated))

```ts
// ❌
// class Order {
//   amount: number;

//   constructor(amount: number) {
//     this.amount = amount;
//   }

//   calculateTotal(): number {
//     return this.amount * 1.1;
//   }
// }

// const order = new Order(100);
// console.log(order.calculateTotal());

// ✅
interface TaxCalculator {
  calculate(amount: number): number;
}

class DefaultTaxCalculator implements TaxCalculator {
  calculate(amount: number): number {
    return amount * 1.1;
  }
}

class ReducedTaxCalculator implements TaxCalculator {
  calculate(amount: number): number {
    return amount * 1.05;
  }
}

class Order {
  private taxCalculator: TaxCalculator;
  private amount: number;

  constructor(amount: number, taxCalculator?: TaxCalculator) {
    this.taxCalculator = taxCalculator ?? new DefaultTaxCalculator();
    this.amount = amount;
  }

  calculateTotal(): number {
    return this.taxCalculator.calculate(this.amount);
  }
}

const order_1 = new Order(100);
console.log(order_1.calculateTotal());

const order_2 = new Order(100, new ReducedTaxCalculator());
console.log(order_2.calculateTotal());
```

### Lyskov Substitution Principle

Submodules need to extend the main module, without changing it.

```ts
// ❌
// class Bird {
//   fly() {
//     console.log('Bird is flying');
//   }
// }

// class Ostrich extends Bird {
//   fly() {
//     throw new Error('Ostrich cant fly');
//   }
// }

// const letBirdFly = (bird: Bird) => {
//   bird.fly();
// };

// const sparrow = new Bird();
// letBirdFly(sparrow);

// const ostrich = new Ostrich(); // ostrich cant fly
// letBirdFly(ostrich);

// ✅
class Bird {
  walk() {
    console.log('Bird is walking');
  }
}

interface CanFly {
  fly(): void;
}

class Sparrow extends Bird implements CanFly {
  fly() {
    console.log('Sparrow is flying');
  }
}

class Ostrich extends Bird {}

const letBirdFly = (bird: CanFly) => {
  bird.fly();
};

const sparrow = new Sparrow();
letBirdFly(sparrow);

const ostrich = new Ostrich();
try {
  letBirdFly(ostrich); // dev error, ostrich doesn't have fly method
} catch {
  console.log('Ostrich cant fly');
}
```

### Interface Segregation Principle

Do not depend on smth what is not used.

```ts
// ❌
interface DataProvider {
  getData: () => string[];
  validateData: () => boolean;
}

class DataService implements DataProvider {
  getData() {
    return ['data 1', 'data 2'];
  }
  validateData() {
    // validation logic
    return true;
  }
}

function DataDisplay({ dataProvider }: { dataProvider: DataProvider }) {
  const data = dataProvider.getData();
  // return <div>{data.join(', ')}</div>
}

// ✅
interface DataFetcher {
  getData: () => string[];
}

interface DataValidator {
  validateData: () => boolean;
}

class DataService implements DataFetcher, DataValidator {
  getData() {
    return ['data 1', 'data 2'];
  }
  validateData() {
    // validation logic
    return true;
  }
}

function DataDisplay({ dataFetcher }: { dataFetcher: DataFetcher }) {
  const data = dataFetcher.getData();
  // return <div>{data.join(', ')}</div>
}
```

### Dependency Injection Principle

Separate modules to high and low levels, which do not depend on each other but abstraction (interface).

```ts
interface NotificationService {
  send(message: string): void;
}

class EmailNotificationService implements NotificationService {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SmsNotificationService implements NotificationService {
  send(message: string): void {
    console.log(`Sending Sms: ${message}`);
  }
}

class NotificationManager {
  // module depends on NotificationService, not on related modules
  constructor(private notificationService: NotificationService) {}

  notify(message: string): void {
    this.notificationService.send(message);
  }
}

const emailService = new EmailNotificationService();
const emailNotificationManager = new NotificationManager(emailService);
emailNotificationManager.notify('Hello via Email');

const smsService = new SmsNotificationService();
const smsNotificationManager = new NotificationManager(smsService);
smsNotificationManager.notify('Hello via Sms');
```

## 4. Comments

if code needs comments, it’s a red flag that something is wrong. In most cases, it means the code isn’t clear enough by itself.

Comments are not a tool for improvement — they’re more of a precautionary measure.

Clean code reads like a good book: it can be understood without side explanations.

Think of code as a story you want to tell. Use readable, meaningful names for variables, functions, and components.

### ❌ Cases where comments should be avoided

- Explaining the obvious.
- Noise — commenting every single action. These comments tend to be ignored and become outdated quickly.
- Old commented-out code. If it’s no longer used, it should be removed.
- Explaining messy code. Don’t explain it — refactor it.

### ✅ Cases where comments are essential

- Temporary workarounds and hacks. Example: a bug in a third-party library.
- Complex business logic or non-obvious behavior. Sometimes implementation is driven by obscure requirements.
- Critical sections. Especially those involving security or financial logic.
- TODO comments to indicate technical debt.

## 5. Formatting

Formatting isn’t just about aesthetics — it’s crucial for **readability** and **maintainability**. Well-formatted code helps developers understand structure and logic faster.

### General Principles

- **Code should be read top-to-bottom, left-to-right**, just like regular text. The order matters.
- **Spaces between operators** help clarify logic and make expressions more readable.
- **Vertical spacing (blank lines)** groups related sections and separates unrelated ones.
- **Horizontal indentation (tabs or spaces)** shows nesting and visibility scopes.

### Line Length

- Limit line length to **80**, **100**, or **120 characters** (based on your team’s conventions).
- Short lines improve:
  - Split-screen readability,
  - Compatibility with small screens,
  - Clarity in diffs (e.g., in pull requests).

### Structure and Order

- **Logically related functions should be placed close together**.
  - For example: `validateUser()` and `saveUser()` should be near each other.
- **Modules that serve a shared purpose should live close** in the project structure.
- In classes:
  - List `public` methods first,
  - Then `protected`,
  - Followed by `private`.
- Alternatively, order by **importance** or **frequency of use**.

---

### Additional Recommendations

- **One level of abstraction per block.**
  - Don’t mix high-level logic with low-level details in the same method.
- **Imports:**
  - Start with external libraries,
  - Then internal modules,
  - Finally styles and utilities.
- Use **automated formatting tools**, like:
  - [Prettier](https://prettier.io/)
  - [ESLint](https://eslint.org/)
  - [EditorConfig](https://editorconfig.org/)
