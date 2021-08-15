/* 
HTML DOM (Document Object Model) -> tree of objects
We can get, change, add, or delete HTML elements through DOM

Objects -> contains properties (values/states/characteristics) and methods (actions)
*/

const mainTitle = document.querySelector("#main-title");
console.log("mainTitle :>> ", mainTitle);
console.log("mainTitle.innerHTML :>> ", mainTitle.innerHTML); // get HTML inside the element

mainTitle.innerHTML = "Changed using DOM"; // insert pure texts inside the element
document.querySelector("#repl-div").innerHTML =
  "<h2>New Header</h2><div style='background-color: blue;'><p>Lorem ipsum</p></div>"; // insert HTML elements

document.querySelector("#animal").src = "images/dog.jpeg"; // change attribute values
document.querySelector("#animal").alt = "dog";
document.querySelector("#animal").setAttribute("width", "50%"); // change attribute values using method

mainTitle.style.backgroundColor = "yellow"; // change styling (.style.property)

// Manipulate elements
const newImg = document.createElement("img"); // create HTML elements
newImg.src = "images/otter.jpeg";
newImg.alt = "otter";

document.querySelector("body").appendChild(newImg); // add an HTML element

document.querySelector("#main-p").remove(); // remove specific element

document.querySelector("#animal").replaceWith("Animal is gone"); // replace an element

// Select multiple elements
const menAthleteNodes = document.querySelectorAll(
  "ul#men-athletes > li.athlete"
); // returns an array (or list) of nodes

menAthleteNodes.forEach((value) => {
  value.innerHTML = `Mr. ${value.innerHTML}`;
});

// Validate form inputs
function validateForm() {
  const regEmail = document.querySelector("form > #reg-email").value;
  const regPass = document.querySelector("form > #reg-pass").value;

  // taken from internet
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (!emailRegex.test(regEmail)) {
    alert("Invalid email");
    return false;
  } else if (regPass.length < 8) {
    alert("Password too short");
    return false;
  } else {
    return true;
  }
}

document.querySelector("#register").onsubmit = validateForm;

// HTML + CSS + JS (Animate when button is clicked)
const animButton = document.querySelector("#anim-button");
const animDiv = document.querySelector("#anim-div");

// Basically animate once the button is clicked
animButton.onclick = () => {
  animDiv.className = animDiv.className + " animated";
};

// Counters
class Counter {
  // constructor
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counter = new Counter(); // create new counter
const counterButton = document.querySelector("button#counter");
counterButton.innerHTML = counter.count; // display current state
counterButton.onclick = () => {
  counter.increment();
  counterButton.innerHTML = counter.count; // display new state
};

const counter2 = new Counter(); // create new counter that is not attached to the 1st one
const counterButton2 = document.querySelector("button#counter2");
counterButton2.innerHTML = counter2.count;
counterButton2.onclick = () => {
  counter2.increment();
  counterButton2.innerHTML = counter2.count;
};
