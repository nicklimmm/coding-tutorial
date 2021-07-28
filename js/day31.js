// Array const -> the reference to the array is constant
const arr = [1, 2, 3];
arr.push(4); // valid
console.log("arr :>> ", arr);

// arr = [1, 2, 3, 4, 5];   // invalid
// console.log("arr :>> ", arr);

// Date
console.log("new Date() :>> ", new Date()); // current datetime

// year, month (0-indexed), day, hours (24H format), minutes, seconds, milliseconds
console.log(
  "new Date(2000, 7, 8, 12, 12, 12, 12) :>> ",
  new Date(2000, 7, 8, 12, 12, 12, 12)
);

// value -> ms since 1 Jan 1970 UTC
console.log("new Date(60000) :>> ", new Date(60000));

// parsing strings -> careful of the string date format (ISO, Short, Long date)
console.log(
  'new Date("January 22, 2010 03:24:00") :>> ',
  new Date("January 22, 2010 03:24:00")
);
console.log('new Date("2021-06-06") :>> ', new Date("2021-06-06")); // ISO Format
console.log('new Date("3/25/2021") :>> ', new Date("3/25/2021")); // mm/dd/yyyy
console.log('new Date("Mar 25 2015") :>> ', new Date("Mar 25 2015"));
console.log('new Date("25 March 2015") :>> ', new Date("25 March 2015"));

// Date methods
const d = new Date();
console.log("d.toString() :>> ", d.toString());
console.log("d.toUTCString() :>> ", d.toUTCString());
console.log("d.toDateString() :>> ", d.toDateString());
console.log("d.toISOString() :>> ", d.toISOString());

// Date get methods
console.log("d.getFullYear() :>> ", d.getFullYear());
console.log("d.getMonth() :>> ", d.getMonth()); // 0-indexed
console.log("d.getDate() :>> ", d.getDate());
console.log("d.getHours() :>> ", d.getHours()); // 24H format
// and also applies to minutes, seconds, milliseconds

console.log("d.getTime() :>> ", d.getTime()); // milliseconds since 1 Jan 1970 UTC
console.log("d.getDay() :>> ", d.getDay()); // 0-indexed (0 is Sunday)
console.log("Date.now() :>> ", Date.now()); // get the current datetime value (ms)

// UTC Date Methods -> getUTC...()
console.log("d.getUTCHours() :>> ", d.getUTCHours());

// Date set methods -> set...() or setUTC...()
d.setHours(8);
console.log("d :>> ", d);

// Math
console.log("Math.PI :>> ", Math.PI); // Math constant
console.log("Math.round(21.7) :>> ", Math.round(21.7));
console.log("Math.pow(2, 3) :>> ", Math.pow(2, 3));
console.log("Math.sqrt(4) :>> ", Math.sqrt(4));
console.log("Math.abs(-9) :>> ", Math.abs(-9));
console.log("Math.min(6, 3, -1, 0, 4) :>> ", Math.min(6, 3, -1, 0, 4));

// Random
console.log("Math.random() :>> ", Math.random()); // random number between 0 (inclusive) and 1 (not included)

// generate random integer between 2 numbers a (inclusive) and b (not included)
function randomRange(a, b) {
  const range = b - a;
  return Math.floor(Math.random() * range) + a;
}
console.log("randomRange(4, 10) :>> ", randomRange(4, 10));

function choice(arr) {
  const chosenIndex = randomRange(0, arr.length);
  return arr[chosenIndex];
}
console.log("choice([19, 50, -2, 11]) :>> ", choice([19, 50, -2, 11]));

// Booleans
/* 
Truthy values -> not exactly true (boolean), but it is treated as "true" 
e.g. non-empty string, non-zero numbers
*/
if ("Hello") {
  // evaluated as true
  console.log("Truthy values are real");
} else {
  console.log("Truthy values are fake");
}
/* 
Falsy values -> not exactly false (boolean), but it is treated as "false"
e.g. 0, "", undefined, null, NaN
*/
if (null) {
  // evaluated as false
  console.log("Falsy values are fake");
} else {
  console.log("Falsy values are real");
}

/* 
Double vs Triple Equals
Triple Equals -> also checks the type
*/
console.log('"" == false :>> ', "" == false);
console.log('"" === false :>> ', "" === false);
