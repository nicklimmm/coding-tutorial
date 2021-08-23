/* 
Async await -> makes promises easier to write

async functions -> returns a promise
await -> wait for a promise (must be inside an async function)
*/
async function printData(url) {
  const response = await fetch(url);
  const json = await response.json();
  json.forEach((value) => console.log(value));
}

printData("https://baconipsum.com/api/?type=meat-and-filler");

/* 
JSON (JavaScript Object Notation) -> text format for storing and transporting data
                                  -> "self-describing", simple, and compatible with JS

Methods: parse(), stringify()
*/
// parse() -> parse JSON strings to JS object
let JSONString = '{"name": "John","age": 25,"cars": ["Mercedes", "BMW"]}';

let obj = JSON.parse(JSONString);
console.log(obj);

JSONString = '["Ford", "BMW", "Audi"]';
obj = JSON.parse(JSONString);
console.log(obj);

// Exceptions -> dates, functions (not preferred)
JSONString = '{"name": "John","dob": "2000-01-01"}';

// We have to manually convert dates into Date objects
obj = JSON.parse(JSONString);
obj["dob"] = new Date(obj["dob"]);
console.log(obj);

// stringify() -> converts JS object to JSON string
obj = { status: 404, message: "Page not found" };
console.log(JSON.stringify(obj));

/* Todo List -> using JSON and localStorage */
function displayTodo() {
  const todoList = JSON.parse(localStorage.getItem("todoList"));
  const ul = document.querySelector("#todo-list");

  // If new user (can't find todoList in storage), initialize empty array
  if (todoList === null) todoList = [];

  //   Clear list to refresh list (prevent duplications)
  ul.innerHTML = "";

  //   Create list
  todoList.forEach((value) => {
    ul.innerHTML += `<li>${value}</li>`;
  });
}

function addTodo() {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  // If new user (can't find todoList in storage), initialize empty array
  if (todoList === null) todoList = [];

  const todoName = document.querySelector("#todo-name").value;
  //   Reset input
  document.querySelector("#todo-name").value = "";

  //   Add to existing data
  todoList.push(todoName);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayTodo();
}

function clearTodo() {
  localStorage.setItem("todoList", "[]");
  displayTodo();
}

document.querySelector("#add-todo").onclick = addTodo;
document.querySelector("#clear-todo").onclick = clearTodo;
displayTodo();

async function getWeatherInfo() {
  document.querySelector("#data").innerHTML = "Loading...";
  let city = document.querySelector("#city").value;
  let resp = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
  let json = await resp.json();

  document.querySelector("#data").innerHTML = JSON.stringify(json);
}

document.querySelector("#search-city").onclick = getWeatherInfo;
