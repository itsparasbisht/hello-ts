"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var isBeginner = true;
var name = "harry";
var total = 20;
var list = [1, 2, 3, 4, 5];
var person1 = ["harry", 20];
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomInput = true;
randomInput = 10;
var multiType;
multiType = 10;
multiType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
add(1, 2);
function fullName(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: "harry",
    lastname: "singh"
};
fullName(p);
// callbacks ---------
var languages = ["JavaScript", "python", "C#"];
languages.map(function (item) { return "language is: ".concat(item); });
// void and never ----------
function consoleError(message) {
    console.log(message);
}
function handleError(message) {
    throw new Error(message);
}
function createUser(_a) {
    var string = _a.name, number = _a.age;
    return {};
}
createUser({ name: 10, age: 10 });
