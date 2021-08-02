/* 
Scrict mode -> easier to write "secure" JS 
            -> declare "use strict" at the beginning of a script or a function
e.g. assign value to a variable that is not declared, non-existing property, etc.
*/
"use strict";

// hehe = 10;
// console.log("hehe :>> ", hehe);

/* 
Regex continuation 

\d -> 0-9
\w -> alphanumeric, underscore
\s -> whitespace
(if capitalized, then match characters that are not ...)

. -> all chars
\. -> literal .

Repeaters
* -> 0 or more
+ -> 1 or more
? -> 0 or 1
{n} -> n times
{m, n} -> m to n times

Position
^ -> start of string (not inside [])
$ -> end of string

Selection
[abc] -> selects a, b, and c
[^abc] -> selects chars that are not a, b, nor c
[a-z] -> selects a to z

Capture group -> also able to extract information
(abc) -> selects and captures abc
(abc(de)) -> selects and captures abcde and de
(abc|def) -> matches abc or def
*/

// replace
let text = "Hello, I am a student. Hello there!";
console.log(
  'text.replace(/a student/, "John") :>> ',
  text.replace(/a student/, "John")
);

// to replace all occurences, use g flag
console.log(
  'text.replace(/Hello/g, "Howdy") :>> ',
  text.replace(/Hello/g, "Howdy")
);

// Error Handling
const x = 1;
try {
  x = 2;
} catch (err) {
  // Catches exceptions and save the Error object to err
  console.log("err.name :>> ", err.name);
  console.log("err.message :>> ", err.message);
}

// Custom errors
function divide(a, b) {
  if (b === 0) throw "ZeroDivisionError";
  else return a / b;
}

try {
  console.log("divide(1, 0) :>> ", divide(1, 0));
} catch (err) {
  console.log("err :>> ", err);
} finally {
  // Will be executed regardless of the try/catch result
  console.log("Finally");
}

/* 
Hoisting -> behaviour of moving variable declarations to the top 

NOTE: 
- using a let variable before it is declared will result in a ReferenceError
- using a const variable before it is declared will result in a SyntaxError
*/
haha = 10;
console.log("haha :>> ", haha);

var haha;

// initializations are not hoisted
var m = 10;
console.log("m, n :>> ", m, n);
var n = 9;

/* 
"this" keyword 

Has different values depending on where it is used:
- In a method, "this" refers to the owner object
- In a function (not strict) or alone, "this" refers to the global object (window)
- In a function (strict), "this" is undefined
- In an event, "this" refers to the element that received event
*/
const obj = {
  name: "John",
  greet: function () {
    console.log(`Hello there, I am ${this.name}`);
  },
};

obj.greet();

function foo() {
  console.log(this);
}

foo();
