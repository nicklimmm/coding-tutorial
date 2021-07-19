// Arrays (or usually called list)
const arr = [
  // Spaces and line breaks are not important
  "Porsche",
  "Mercedes",
  "Nissan",
  "Volvo",
];

// Accessing array elements
console.log("arr[2] :>> ", arr[2]);
// Changing array elements
arr[3] = "Tesla";
console.log("arr :>> ", arr);

console.log("arr.length :>> ", arr.length); // size of array

// Iterate array elements
for (let i = 0; i < arr.length; i++) {
  console.log("arr[i] :>> ", arr[i]);
}
[1, 2, 3, 4].forEach((value) => {
  console.log("value - 1 :>> ", value - 1);
});

// Check if a variable is an array
console.log("Array.isArray(arr) :>> ", Array.isArray(arr));
console.log("arr instanceof Array :>> ", arr instanceof Array);

// Convert array to a string of comma separated elements
console.log("arr.toString() :>> ", arr.toString());

console.log('arr.join(" -- ") :>> ', arr.join(" -- ")); // Join

// Push ->  Append array, returns the new array length
const newLength = arr.push("Mitsubishi");
console.log("arr :>> ", arr);
console.log("newLength :>> ", newLength);

// Pop -> removes the last element from an array, returns the removed element
const nums = [1, 2, 3, 4];
const removedElement = nums.pop();
console.log("nums :>> ", nums);
console.log("removedElement :>> ", removedElement);

// Shift -> removes the first element from array, returns the removed element
const names = ["John", "Doe", "Clark"];
names.shift();
console.log("names :>> ", names);

// Unshift -> adds a new element from the beginning of the array, returns the new array length
names.unshift("James");
console.log("names :>> ", names);

// Splice -> can be used to add new items to an array, or delete items, returns an array with the deleted items
const fruits = ["Apple", "Orange", "Mango", "Watermelon"];
fruits.splice(2, 0, "Kiwi", "Melon"); // Only adding
console.log("fruits :>> ", fruits);
fruits.splice(1, 3); // Only removing
console.log("fruits :>> ", fruits);
fruits.splice(1, 1, "Kiwi", "Durian"); // Both adding and removing
console.log("fruits :>> ", fruits);

// concat -> concatenate array, doesn't modify the original array
const oriArr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8];
const joinedArr = oriArr.concat(arr2, arr3);
console.log("joinedArr :>> ", joinedArr);

// Slice -> sclies out a pice of an array into a new array (doesn't modify the original array)
const brands = ["Nike", "Adidas", "Puma"];
console.log("brands.slice(0, 2) :>> ", brands.slice(0, 2));
console.log("brands.slice(1) :>> ", brands.slice(1)); // Slice from specified index until end of array

// Sort -> sorts an array alphabetically
const students = ["Mike", "Jake", "Luke"];
students.sort();
console.log("students :>> ", students);

// Reverse -> reverses the elements in an array
students.reverse();
console.log("students :>> ", students);

// To sort numeric values, we provide a compare function
const myNums = [100, 25, 10];
myNums.sort((a, b) => a - b); // Sort ascending
console.log("myNums :>> ", myNums);
myNums.sort((a, b) => b - a); // Sort descending
console.log("myNums :>> ", myNums);

// Sort complex data types
const cars = [
  { type: "BMW", year: 2019 },
  { type: "Porsche", year: 2020 },
  { type: "Lamborghini", year: 2001 },
];
cars.sort((a, b) => b.year - a.year); // Sort descending by year
console.log("cars :>> ", cars);

// Finding min/max value in array
const scores = [85, 60, 90, 100];
console.log("Math.min(...scores) :>> ", Math.min(...scores)); // ... (spread operator) -> to spread the elements of an array
console.log("Math.max(...scores) :>> ", Math.max(...scores));
