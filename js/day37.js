/* 
Forms API

Using <input> object
Methods: checkValidity(), setCustomValidity()
Properties (.validity.---): valueMissing -> required, tooLong -> maxLength, rangeUnderflow -> min,
            rangeOverflow -> max, valid (general)
*/
// function displayValidity() {
//   const ageInput = document.querySelector("#age");
//   if (!ageInput.checkValidity()) {
//     document.querySelector("#validity-message").innerHTML = "INVALID!";
//   } else {
//     document.querySelector("#validity-message").innerHTML = "Successful";
//   }
// }
function displayValidity() {
  const ageInput = document.querySelector("#age");
  if (ageInput.validity.rangeOverflow) {
    document.querySelector("#validity-message").innerHTML = "OVERFLOW";
  } else if (ageInput.validity.rangeUnderflow) {
    document.querySelector("#validity-message").innerHTML = "UNDERFLOW";
  } else {
    alert("valid");
  }
}

const submitButton = document.querySelector("#submit");
submitButton.onclick = displayValidity;

/* 
History API

history.---
Methods: back(), forward(), go()
Properties: length
*/
const backButton = document.querySelector("#back");
backButton.addEventListener("click", () => {
  history.back();
});
console.log("history.length :>> ", history.length);

/* 
localStorage API -> provides access to a local storage for a particular web site (CRUD operations)
                 -> no expiration date, persists even when the browser is closed

sessionStorage API -> stores data for only one session (deleted when the tab is closed)

Methods: setItem() -> create/update, getItem() -> read, removeItem() and clear() -> delete, key(n) -> returns the name of the nth key
Properties: length
*/
// localStorage.setItem("name", "John");
// localStorage.setItem("grade", "A+");
function getProfile() {
  // || "" -> to prevent null being shown (short circuit)
  const name = localStorage.getItem("name") || "";
  const grade = localStorage.getItem("grade") || "";
  document.querySelector("#name").innerHTML = `Name: ${name}`;
  document.querySelector("#grade").innerHTML = `Grade: ${grade}`;
}

function updateProfile(name, grade) {
  localStorage.setItem("name", name);
  localStorage.setItem("grade", grade);
}

getProfile();

document.querySelector("#update-button").onclick = () => {
  const nameInput = document.querySelector("#form-name");
  const gradeInput = document.querySelector("#form-grade");
  updateProfile(nameInput.value, gradeInput.value);
  getProfile();
};

document.querySelector("#delete").onclick = () => {
  localStorage.clear();
  getProfile();
};

function printStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`localStorage.getItem(${key}) :>> `, localStorage.getItem(key));
  }
}

printStorage();

/* 
Fetch API -> make requests to a server or file
          -> returns a promise

Method: fetch(x)
*/
fetch("https://baconipsum.com/api/?type=meat-and-filler")
  .then((response) => response.json())
  .then((json) =>
    json.forEach(
      (value) =>
        (document.querySelector("#fetch").innerHTML =
          document.querySelector("#fetch").innerHTML + " " + value)
    )
  );
