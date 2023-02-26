export {};

let message = "Hello World";
console.log(message);

let isBeginner: boolean = true;
let name: string = "harry";
let total: number = 20;

let list: number[] = [1, 2, 3, 4, 5];

let person1: [string, number] = ["harry", 20];

enum Color {
  Red = 10,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

let randomInput: any = true;
randomInput = 10;

let multiType: number | boolean;
multiType = 10;
multiType = true;

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(1, 2);

interface Person {
  firstname: string;
  lastname: string;
}

function fullName(person: Person) {
  console.log(`${person.firstname} ${person.lastname}`);
}

let p = {
  firstname: "harry",
  lastname: "singh",
};

fullName(p);

// callbacks ---------
const languages = ["JavaScript", "python", "C#"];
languages.map((item): string => `language is: ${item}`);

// void and never ----------
function consoleError(message: string): void {
  console.log(message);
}

function handleError(message: string): never {
  throw new Error(message);
}

// readonly, &, ? --------------------
type Pincode = { pincode: number };
type CityAndState = { city: string; state: string };

type User = {
  readonly id: number;
  name: string;
  age: number;
  phoneNo?: number;
  address: Pincode & CityAndState;
};

const u: User = {
  id: 1,
  name: "harry",
  age: 20,
  address: {
    pincode: 123456,
    city: "almora",
    state: "UK",
  },
};

// union type ---------
const data: (string | number)[] = [1, "harry", 3, 4];

// tuples -----------
type ApiResponse = [number, string];
const res: ApiResponse = [200, "hello"];

res.push("1");

// enum ----------
enum ColorScheme {
  PRIMARY = "rgb(255,241,140)",
  SECONDARY = "rgb(140,200,99)",
  ERROR = "rgb(160,255,180)",
}

const color = ColorScheme.ERROR;
console.log(color);

// generics ----------

const proceedToCheckout = <T>(
  products: T[]
): { products: T[]; total: number } => {
  // generate the total cost of the products
  const total = 1000;

  return {
    products,
    total,
  };
};

type ProductCategoryA = {
  name: string;
  price: number;
};

const products = [
  { name: "item1", price: 30 },
  { name: "item2", price: 20 },
];

proceedToCheckout<ProductCategoryA>(products);
