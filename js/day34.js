// Arrow Functions

const isEven = (num) => {
  return num % 2 === 0;
};

/* 
Equivalent to:

function isEven(num) {
  return num % 2 === 0;
}
*/

// If we return immediately, we can omit the curly braces and the return statement
const triple = (num) => num * 3;
console.log("triple(10) :>> ", triple(10));
/* 
Equivalent to:

const triple = (num) => {
    return num * 3
}
*/

// If the function only accepts a single argument, we can omit the parentheses

// Set -> stores unique values (no duplicates)
const set = new Set();

set.add("a");
set.add("b");
set.add("a");

console.log("set :>> ", set);

// Pass an array to the Set constructor
const s = new Set([10, 20, 20, 30, 40]);
console.log("s :>> ", s);

s.forEach((value) => {
  console.log(`value`, value);
});

s.delete(20);
console.log("s :>> ", s);

console.log("s.size :>> ", s.size);

// Closures

/* 
The problem below is any code can change the counter, without calling add

let counter = 0;

function add() {
  counter++;
}

add();
add();
console.log("counter :>> ", counter); 
*/

/* 
The problem below -> cannot access the variable from outside
function add() {
  let counter = 0;
  counter++;
  return counter;
}

add();
add();
console.log("counter :>> ", counter);
*/

const createCounter = () => {
  let counter = 0;

  const incrementCounter = () => {
    counter++;
    return counter;
  };

  return incrementCounter;
};

const add = createCounter();
const add2 = createCounter();

console.log("createCounter :>> ", createCounter);
console.log("add :>> ", add);

console.log("add() :>> ", add());
console.log("add() :>> ", add());
console.log("add2() :>> ", add2());
console.log("add() :>> ", add());

// Callback -> a function that is passed to another function
//          -> to not call a function right away (only invoked during certain circumstances)

/* function sayHello() {
  console.log("Hello!");
}

function delayer(callback) {
  for (let i = 0; i < 2000000000; i++) {}
  callback();
}

delayer(sayHello);
console.log("Done"); */

// Asynchronous JS -> e.g. setTimeout, setInterval -> to run code in parallel

function sayHello() {
  console.log("Hello");
}

// "Done" is displayed first, due to the asynchronous nature of setTimeout
// sayHello is executed 1.5 secs after the code is done
setTimeout(sayHello, 1500);
console.log("Done");
// for (let i = 0; i < 2000000000; i++) {}
// console.log("Delay done");

// setInterval
function displayClock() {
  const d = new Date();
  document.getElementById(
    "clock"
  ).innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

setInterval(displayClock, 1000);

/* 
Promises

Promise states -> pending, resolved, rejected
*/

let myPromise = new Promise((resolve, reject) => {
  for (let i = 0; i < 1000000000; i++) {}
  //   let status = "Success";
  let status = "Failed";

  if (status === "Success") resolve();
  else reject("An Error Occurred");
});

myPromise
  .then((value) => {
    console.log("Your payment is successful");
  })
  .catch((err) => {
    console.log(err);
  });
