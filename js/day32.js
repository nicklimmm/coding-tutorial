// Comparison Operators (similar with Python)
console.log("2 < 10 :>> ", 2 < 10);
console.log("2 <= 10 :>> ", 2 <= 10);

console.log('2 != "2" :>> ', 2 != "2");
console.log('2 !== "2" :>> ', 2 !== "2"); // takes type into account

// Logical operators (AND -> &&, OR -> ||, NOT -> !)
console.log("2 < 10 && 200 > 7 :>> ", 2 < 10 && 200 > 7);
console.log("20 < 3 || 200 > 7 :>> ", 20 < 3 || 200 > 7);
console.log("!(3 % 2 == 0) :>> ", !(3 % 2 == 0));

/* 
Ternary Operator (basically inline if-else statement) -> not recommended for long conditions
Syntax: (condition) ? value1: value2
Equivalent to:
if (condition) {
    return value1
} else {
    return value2
}

Chaining ternary operators
(condition1) ? value1: (condition2) ? value2: value3
Equivalent to:
if (condition1) {
    return value1
} else if (condition2) {
    return value2
} else {
    return value3
}
*/
let age = 5;
let voteStatus = age >= 18 ? "Eligible" : "Not eligible";
console.log("voteStatus :>> ", voteStatus);

// If-else statements
let num = 5;
if (num < 10) {
  console.log("Your number is less than 10");
} else if (num > 200) {
  console.log("Your number is more than 200");
} else {
  console.log("Your number is between 10 and 200");
}

/* 
Switch statements (if-else, but useful to compare values, using ===) 
Syntax:
switch (value) {
    case a:
        ...
        break;          -> if not using break, other statements below will be executed (if the current case is true), regardless of its value
    case b:
        ...
        break;
    ...
    default:            -> optional
        ...
}

Equivalent to:
if (value === a) {
    ...
} else if (value === b) {
    ...
} 
...
else {
    ...
}

*/
let d = new Date("26 July 2021");
let day;
switch (d.getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("day :>> ", day);

switch (d.getDay()) {
  case 0:
  case 6:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}

/* 
For loop 
Syntax:
for (initializations; conditions; updates) {
    ...
}
*/
let myStr = "";
for (let i = 1; i <= 20; i++) {
  myStr += i.toString();
}
console.log("myStr :>> ", myStr);

for (let i = 1, j = 10; i < 7, j < 20; i++, j += 2) {
  console.log("i, j :>> ", i, j);
}

let myMoney = 10;
for (;;) {
  console.log("myMoney :>> ", myMoney);
  myMoney++;
  if (myMoney == 20) break;
}
console.log("myMoney :>> ", myMoney);

// For in loop -> iterate keys/properties of an object
const person = { name: "Hugh Jackman", age: 25, hobby: "Music" };
for (let key in person) {
  console.log(key, person[key]);
}

// For of loop -> iterate the values of an iterable object (arrays, strings, maps)
const myArr = ["BMW", "Volvo", "Mini"];
for (let car of myArr) {
  // Better to use forEach
  console.log(car);
}

for (let char of myStr) {
  console.log(char);
}

// While loop -> remember to terminate, if not, can cause freezes
let countdown = 10;
while (countdown !== 0) {
  console.log("countdown :>> ", countdown);
  countdown--;
}
console.log("Time is up");

// Do-while loop -> variant of while loop that will always be executed at least once
do {
  console.log("Reconnecting...");
} while (Math.random() >= 0.8);

// Control-flow statements -> break (exits the loop), continue (skips an iteration)
for (let i = 0; i < 11; i++) {
  if (i === 5) break;
  console.log("i :>> ", i);
}
console.log("-------");
for (let i = 0; i < 11; i++) {
  if (i === 5) continue;
  console.log("i :>> ", i);
}

/* 
Regular Expressions (Regex) -> for searching pattern 
Syntax: /pattern/modifiers

Modifiers:
i -> case-insensitive
g -> global match (finds all matches)
m -> multiline matching

Patterns:

*/
let text = "Hello I am a StUdEnt, 5HjK.";
console.log("text.search(/student/i) :>> ", text.search(/student/i));
console.log(
  "text.search(/d[a-zA-Z]{3}./) :>> ",
  text.search(/\d[a-zA-Z]{3}\./)
);
