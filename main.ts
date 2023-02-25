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
