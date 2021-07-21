// Array Iteration

// forEach, map, filter callback accepts 3 arguments (in order: item value, item index, the array itself)

// forEach -> applies a function to every element, but doesn't modify the original array (if the function doesn't modify)
const nums = [76, 21, 80, 90];
nums.forEach((value, index, arr) => {
  console.log("value, item, arr :>> ", value, index, arr);
});

// Mustn't always be 3 arguments
nums.forEach((value, index) => {
  console.log("value, item :>> ", value, index);
});

// map -> applies a function to every element, and returns an array containing the return values of each item
const arr = [1, 2, 3, 4];
const doubledArray = arr.map((value) => {
  return 2 * value;
});
console.log("doubledArray :>> ", doubledArray);

// filter -> filters the item that makes the function return true (doesn't modify the original array, callback must return a boolean value)
const roadNames = [
  "81 Colorado Junction",
  "8th Avenue",
  "St. John's Road",
  "Road Runner",
];
const filteredRoadNames = roadNames.filter((value) => {
  return value.endsWith("Road");
});
console.log("filteredRoadNames :>> ", filteredRoadNames);

const numberArr = [1, 2, 3, 4, 5, 6];
const evenNumbers = numberArr.filter((value) => {
  return value % 2 == 0;
});
console.log("evenNumbers :>> ", evenNumbers);

// reduce -> applies a function on each element to produce (reduce it to) a single value, returns the next value
//        -> callback accepts 4 arguments (in order, the total/accumulator (initial value/previously return value)
//                                and the same 3 arguments for the rest)
//        -> reduce method can accept 2nd argument as its initial value

const scores = [8, 9, 7, 9];
const totalScores = scores.reduce((previousValue, currentValue) => {
  console.log("previousValue, currentValue :>> ", previousValue, currentValue);
  return previousValue + currentValue;
}, 0);

console.log("totalScores :>> ", totalScores);

// reduceRight -> reduce, but works from right to left
const words = ["Hello", "World", "I", "am", "Groot"];
const reversedWords = words.reduceRight((previousValue, currentValue) => {
  return previousValue + " " + currentValue;
});
console.log("reversedWords :>> ", reversedWords);

// every -> to check if all items pass a test (returns true for all items), returns a boolean value, works like AND (&&) operator
const numArr = [3, 6, 9, 11];
const allMultiplesOf3 = numArr.every((value) => {
  return value % 3 == 0;
});
console.log("allMultiplesOf3 :>> ", allMultiplesOf3);

// some -> to check if at least 1 item passes the test, returns a boolean value, works like OR (||) operator
const containsStartsWithRoad = roadNames.some((value) => {
  return value.startsWith("Road");
});
console.log("containsStartsWithRoad :>> ", containsStartsWithRoad);

// find -> returns the value of the first item that passes the test
//      -> returns undefined if not found
const randNums = [90, 63, 24, 20, 0];
const negativeValue = randNums.find((value) => {
  return value < 0;
});
console.log("negativeValue :>> ", negativeValue);

// findIndex -> similar with find, but it returns the index instead
//           -> returns -1 if not found
const negativeValueIndex = randNums.findIndex((value) => {
  return value < 0;
});
console.log("negativeValueIndex :>> ", negativeValueIndex);

// from -> returns an array from any object with a length property or any iterable object
console.log('Array.from("ABCDEF") :>> ', Array.from("ABCDEF"));
