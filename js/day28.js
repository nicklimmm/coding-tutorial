/* 
Events -> e.g. click button (onclick), web page has finished loading, input field change
*/

/* 
Strings
*/
let text = "ASDFASDF";
console.log(text.length); // length of str

let text2 = "He said, \n'HAHAHAH \"I am escaped\"' \\";
console.log(text2);

console.log("haha" == "haha"); // comparing strings

console.log(text.slice(2, 6)); // slicing similar with Python [a:b]
console.log(text.slice(3)); // slicing similar with Python [a:]
console.log(text.slice(-3)); // allows negative indexing

console.log(text.substring(2, 6)); // similar with slice, but doesn't accept negative indexing

console.log(text.substr(1, 4)); // substr(start, length)
console.log(text.substr(1)); // [a:]

let msg = "Hello World! World loves you!";
// NOTE: replace doesn't change the original string, only replaces the first match
console.log(msg.replace("World", "John"));
console.log(msg.replace(/World/g, "John")); // replaces all occurences (using RegExp)

console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

console.log(text + text2 + msg); // concat using plus operator
console.log(text.concat(text2, msg)); // concat using concat method

let paddedText = "      HELLOOOOO         ";
console.log(paddedText.trim()); // removes whitespace from both sides
console.log(paddedText.trimLeft()); // from the left

console.log(`text[2]`, text[2]); // extract character by indexing
console.log("text.charAt(2) :>> ", text.charAt(2));

// Strings are immutable
text[2] = "A";
console.log("text :>> ", text);

let identity = "Alice,12345678,New York";
console.log('identity.split(",") :>> ', identity.split(",")); // split strings into array
console.log('identity.split("") :>> ', identity.split("")); // array of single characters

let text3 = "Hi Hi Hi";
// NOTE: indexOf returns the first occurence (returns -1 if not found)
console.log('text3.indexOf("Hi") :>> ', text3.indexOf("Hi"));
console.log('text3.indexOf("Hiii") :>> ', text3.indexOf("Hiii"));
console.log('text3.indexOf("Hi", 2) :>> ', text3.indexOf("Hi", 2)); // start search from specified index to the right

console.log('text3.lastIndexOf("Hi") :>> ', text3.lastIndexOf("Hi")); // last occurence (returns -1 if not found)
console.log('text3.lastIndexOf("Hi", 5) :>> ', text3.lastIndexOf("Hi", 5)); // start search from specified index to the left

console.log('text3.search("Hi") :>> ', text3.search("Hi")); // similar with indexOf

/*
Differences: 
search() -> can't take a second start position argument
indexOf() -> weaker search compared to search(), as search() can use RegExp
*/

let text4 = "Lorem ipsum dolor, sit amet consectetur adipisicing.";
console.log('text4.includes("amet") :>> ', text4.includes("amet")); // check if a string contains a specified value (bool)
console.log('text4.includes("amet", 30) :>> ', text4.includes("amet", 30)); // use start position
console.log('text4.includes("sitsit") :>> ', text4.includes("sitsit"));

console.log('text4.startsWith("Lorem") :>> ', text4.startsWith("Lorem")); // allows start position
console.log(
  'text4.endsWith("adipisicing.") :>> ',
  text4.endsWith("adipisicing.")
);

/* 
Template strings/literals -> similar to f-string in Python 
                          -> using backticks (``)
                          -> to use variables, use ${varName}
                          -> multiline string
*/
let customer = "John",
  bill = 50000;
console.log(
  "`Hello ${customer}! Your meal costs ${bill / 1000} thousand` :>> ",
  `Hello ${customer}! Your meal costs ${bill / 1000} thousand`
);
console.log(`asdfasdf
asdf
asdf
asdf
asdf
asdf
`);

/* 
Numbers
*/

// NOTE: there is a limit to the size and precision
console.log("0.1 + 0.2 == 0.3 :>> ", 0.1 + 0.2 == 0.3); // 0.1 + 0.2 is not precisely 0.3 in programming (mostly)
console.log("9999999999999999 :>> ", 9999999999999999);

let val = 100 / "Apple";
console.log('100 / "Apple" :>> ', val); // NaN -> Not a Number
console.log("typeof val :>> ", typeof val); // typeof NaN -> number
console.log("isNaN(val) :>> ", isNaN(val)); // to check if NaN

console.log("2 / 0 :>> ", 2 / 0); // Infinity (typeof Infinity == number)
console.log("-2 / 0 :>> ", -2 / 0); // -Infinity
console.log("Infinity + (-Infinity) :>> ", Infinity + -Infinity); // NaN

let myNum = 100;
console.log("myNum.toString() :>> ", myNum.toString()); // convert to string
console.log("typeof myNum.toString() :>> ", typeof myNum.toString()); // convert to string

console.log('100 == "100" :>> ', 100 == "100"); // JS casts into the same type
console.log('100 === "100" :>> ', 100 === "100"); // === takes the type into consideration

let myDec = 9.6789;
console.log("myDec.toFixed(2) :>> ", myDec.toFixed(2)); // returns a string, rounded off to decimal places
console.log("myDec.toPrecision(3) :>> ", myDec.toPrecision(3)); // returns a string with a specified digit length

/* 
Global Number JS Methods 
- Number()
- parseInt()
- parseFloat()

Number Properties
- MAX_VALUE -> largest possible number
- MIN_VALUE -> smallest possible number
- POSITIVE_INFINITY
- NEGATIVE_INFINITY
- NaN
*/
console.log('typeof Number("10") :>> ', typeof Number("10")); // converts to number
console.log('Number("   10") :>> ', Number("   10"));
console.log('Number("   10.33") :>> ', Number("   10.33"));
console.log('Number("John") :>> ', Number("John")); // NaN

console.log('typeof parseInt("-10") :>> ', typeof parseInt("-10")); // converts to int
console.log('parseInt("-10.3") :>> ', parseInt("-10.3")); // truncate the decimal
console.log('parseInt("10 years old") :>> ', parseInt("10 years old")); // spaces are allowed, only parses the 1st number

console.log('typeof parseFloat("-10") :>> ', typeof parseFloat("-10")); // converts to float
console.log('parseFloat("-10.3") :>> ', parseFloat("-10.3")); // maintatins the decimal

console.log("Number.MAX_VALUE :>> ", Number.MAX_VALUE);
