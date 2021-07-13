// JavaScript Introduction - dynamic programming language

/* 
To insert JS into HTML:
- Write directly in between <script> tag in HTML file (in head or before body closing tag)
- External JS, linked using script:src tag

Preferred to place scripts at the bottom of the <body> element, 
to improve the display speed
*/

// Output
// Writes into an HTML element
document.getElementById("title").innerHTML = "This is inserted using JS";
// Writes into an alert box
// alert("Pop up alert");
// Writing into the browser console
console.log("Logged this message");

/*
Variables - must start with a letter, or an _, or a $

By convention, variable names are formatted using Camel Case
e.g. myTelephoneBook, firstName

Ways to declare JS variables:
- var (not really popular these days, due to ES6) -> global scope, can be redeclared
- let -> block scope, can't be redeclared
- const -> block scope, can't be redeclared, can't be reassigned, 
           must be assigned a value when they are declared
        -> all caps
        -> always use for arrays, object, function, regexp
*/

// var
var myNumber = 10; // declare
myNumber = myNumber * 3;
console.log(myNumber + 10);

var myNumber = 20; // can be redeclared
console.log(myNumber);

var large = 4e6; // 4x10^6
console.log("large :>> ", large);

var small = 25e-6; // 25x10^-6
console.log("small :>> ", small);

{
  var globalVar = 200; // available on global scope
  console.log("globalVar :>> ", globalVar);
}
console.log("globalVar :>> ", globalVar); // can be accessed

var myName = "John" + " " + "Hello"; // single or double quotes
console.log(myName);

var x = 10,
  y = 20; // declare multiple variables in a single line

var isWinning; // uninitialized variables will be assigned as undefined
console.log("isWinning :>> ", isWinning);

// let
{
  let blockVar = 2; // only available on this block only
  console.log(blockVar);
  //   let blockVar = 10;    // cannot be redeclared
  {
    console.log(blockVar);
  }
}
// console.log(blockVar); // cannot access block scope

// const
const PI = 3.14159;
// const MYPHONENUMBER; // must be initialized
// PI = 3.14; // cannot assign to const variables

/* 
Operators

Logical Operators:
- (&&) -> and
- (||) -> or
- (!) -> not

Type Operators:
- typeof ->  returns the type of a variable
- instanceof -> returns true if an object is an instance of an object type
*/
let count = 0;
count++; // increment by 1 (shortcut of count += 1 or count = count + 1)
console.log("count :>> ", count);
count--; // decrement by 1 (shortcut of count -= 1 or count = count - 1)
console.log("count :>> ", count);

console.log(5 + 5);
/*
For operations between strings and numbers:
- (+) -> casts numbers into strings
- (-, *, /, **, %) -> casts strings into numbers
*/
console.log("5" + 5); // casts the integer to string, then concatenate
console.log("5" - 1); // casts the string to integer, then do the maths

console.log(typeof ("5" + 5)); // string
console.log(typeof ("5" - 1)); // number

/*
Data Types
*/
let isJumping = true; // boolean (true, false)
const myArray = ["John", 18, 1.2]; // array
console.log("myArray :>> ", myArray);
const myObject = { Bob: "12345678", Josh: "87654321" }; // object
console.log("myObject :>> ", myObject);

/*
Functions

Ways to declare:
- With keyword 'function'
- Arrow functions
*/

// With keyword 'function'
// function toCelcius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// Arrow function (ES6)
const toCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

console.log("toCelcius(32) :>> ", toCelcius(32)); // invoke/call function

// Objects -> stores in key-value pairs
const obj = {
  firstName: "John",
  lastName: "Doe",
  "date of birth": "01-01-01",
};
console.log(obj["firstName"]); // access properties using []
console.log(obj.firstName); // access properties using .
delete obj.lastName; // delete a property

obj.money = 100; // add property
console.log("obj :>> ", obj);

// Object methods -> functions stored inside an obj
const dog = {
  name: "Bro",
  bark: function () {
    console.log("WOOFFFF");
  },
};

dog.bark();
