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
var u = {
    id: 1,
    name: "harry",
    age: 20,
    address: {
        pincode: 123456,
        city: "almora",
        state: "UK"
    }
};
// union type ---------
var data = [1, "harry", 3, 4];
var res = [200, "hello"];
res.push("1");
// enum ----------
var ColorScheme;
(function (ColorScheme) {
    ColorScheme["PRIMARY"] = "rgb(255,241,140)";
    ColorScheme["SECONDARY"] = "rgb(140,200,99)";
    ColorScheme["ERROR"] = "rgb(160,255,180)";
})(ColorScheme || (ColorScheme = {}));
var color = ColorScheme.ERROR;
console.log(color);
// generics ----------
var proceedToCheckout = function (products) {
    // generate the total cost of the products
    var total = 1000;
    return {
        products: products,
        total: total
    };
};
var products = [
    { name: "item1", price: 30 },
    { name: "item2", price: 20 },
];
var rr = proceedToCheckout(products);
console.log(rr);
