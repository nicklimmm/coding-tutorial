/* 
HTML DOM Events
e.g. onclick, onfocus, onmousedown, onmouseup, 
    onload (when user enters the page), onunload (when user leaves the page)
    onchange, onmouseover
*/

function displayHover() {
  document.querySelector("#main-title").innerHTML = "Hovering";
}

document.querySelector("#main-title").onmousedown = () => {
  document.querySelector("#main-title").innerHTML = "Mouse down";
};

document.querySelector("#main-title").onmouseup = () => {
  document.querySelector("#main-title").innerHTML = "Mouse up";
};

document.querySelector("#main-title").onmouseover = displayHover;

// document.querySelector("body").onload = () => {
//   alert("Hello");
// };

document.querySelector("#name").onchange = () => {
  const nameInput = document.querySelector("#name");
  nameInput.value = nameInput.value.toLowerCase();
};
document.querySelector("#name").onfocus = () => {
  console.log("Entering name");
};

/* 
Event Listener - attaches an even handler to an element without overwriting existing
                event handlers

NOTE: Do not use the "on" prefix for the event
*/
document.querySelector("#date").addEventListener("click", () => {
  document.querySelector("#date").innerHTML = new Date();
});

document.querySelector("#date").addEventListener("click", () => {
  document.querySelector("#main-title").innerHTML = new Date().getFullYear();
});

/* 
HTML DOM Navigation - access other nodes with certain relationships
e.g. parentElement, nextElementSibling, etc.
*/
const navFocus = document.querySelector("#nav-focus");

navFocus.parentElement.style.backgroundColor = "blue";
navFocus.nextElementSibling.innerHTML = "<h2>nextSibling</h2>";
navFocus.previousElementSibling.innerHTML = "<h2>previousSibling</h2>";
navFocus.firstElementChild.innerHTML = "<h3>first child</h3>";
// .children returns HTMLCollection type
navFocus.children[1].innerHTML = "<h3>second child</h3>";

/* 
HTML DOM Collections - collection of HTML elements

NOTE: HTMLCollection is not an array, we can iterate through the list and get the length.
    But we cannot use array methods such as pop(), push()
*/
console.log(
  'document.querySelectorAll("div"). :>> ',
  document.querySelectorAll("div")
);

/* Browser Object Model (BOM) - dealing with the browser */

/* 
Window - NOTE: toolbars and scrollbars not included
e.g. innerHeight, innerWidth, open(), close(), moveTo(), resizeTo()
*/
console.log("window.innerWidth :>> ", window.innerWidth);
// window.open("https://www.youtube.com");

/* 
Screen - info about the user's screen 
e.g. width, height, colorDepth
*/
console.log("screen.width :>> ", screen.width);

/* 
Location - url information
e.g. href, hostname, protocol
*/
console.log("location.href :>> ", location.href);

/* 
History - browser history
e.g. back(), forward()
*/
document.querySelector("#back-button").onclick = () => {
  history.back();
};

/* 
Navigator - information about the user's browser
e.g. appName, appCodeName, platform, product
*/
console.log("navigator.platform :>> ", navigator.platform);
console.log("navigator.product :>> ", navigator.product);

/* 
Popup Alert
e.g. alert(), confirm(), prompt()
*/
// if (confirm("Are you sure?")) {
//   console.log("You clicked ok");
// } else {
//   console.log("You clicked cancel");
// }

// Input
// prompt("Enter your favorite number:", "0");

/* 
Timing 
e.g. setTimeout(), setInterval(), clearTimeout(), clearInterval()
*/
const myTimeBomb = setTimeout(() => alert("BOOM"), 1000);
clearTimeout(myTimeBomb);

/* 
Cookies - data, stored in small text files on your computer
        - to remember information about the user after reconnecting
        - stored in key-value pairs (key=value; key=value;...)
*/
// Create a cookie
// document.cookie = "name=John Doe; last-online=21-01-2021";
// Read cookies
console.log("document.cookie :>> ", document.cookie);

/* 
Web APIs -> extends functionalities, simplifies complex functions, easy syntax

API (Application Programming Interface)
*/
