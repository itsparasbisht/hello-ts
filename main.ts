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
