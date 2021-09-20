// Callback -> async equivalent for a function
// const fs = require("fs"); // File system

// Test between sync and async to check the diffs

// Reading files
// const data = fs.readFileSync("input.txt"); // Synchronous/blocking/sequential
// console.log(data.toString());
// console.log("Program ended!");

// fs.readFile("input.txt", (err, data) => {
//   // Asynchronous/non-blocking/non-sequential
//   if (err) return console.error(err);
//   console.log(data.toString());
// });
// console.log("Program ended!");

// NOTE: Generally, async functions accept a callback as the last parameter and accept an error as the first parameter

// File System -> has sync and async forms
const fs = require("fs");

// Open File
// Flags -> r (read), r+ (read & write), a (append), a+ (read & append), etc.
fs.open("./output.txt", "a+", (err, fd) => {
  if (err) return console.error(err);
  console.log("File opened!");
});

// Write File
fs.writeFile("./write.txt", "Hi! From day2.js", (err) => {
  if (err) return console.error(err);
});

// Unlink (Delete) File
fs.unlink("dummy.txt", (err) => {
  if (err) return console.error(err);
});

// Create a directory/folder
fs.mkdir("somefolder", (err) => {
  if (err) return console.error(err);
});

// Read a directory
fs.readdir("somefolder", (err, files) => {
  if (err) return console.error(err);
  files.forEach((value) => {
    console.log(value);
  });
});

// Delete a directory
fs.rmdir("dummy", (err) => {
  if (err) return console.error(err);
});

// Global Objects -> available without imports
console.log("__filename :>> ", __filename); // Returns the absolute path of this file
console.log("__dirname :>> ", __dirname); // Returns the absolute path of the current directory
// setTimeout, setInterval, etc.

// Utility Modules -> commonly used while developing
// e.g. os, path, etc.

/* 
Web Server -> handles HTTPS requests and returns web pages in response

Web App Architecture:
- Client -> makes HTTP requests to the server, e.g. browsers, applications
- Server -> receives the requests and returns the response
- Business -> to do the required processing (logic), interacts with the data layer via database or external programs
- Data -> contains databases or any source of data
*/

/* 
HTTP Request

Request Method -> indicates the method to be performed, in uppercase
- GET -> retrieve data
- POST -> send data
- DELETE -> remove data
- PUT -> replace data
*/

/* 
Express Framework -> provides us to develop Node based web apps rapidly

Core Features:
- Allows to set up middlewares to respond to HTTP Requests
- Defines a routing table to perform different actions based on the HTTP Requests
- Allows to dynamically render HTML pages based on passing arguments to templates

Modules needed (from npm):
- express
- body-parser -> for handling JSON, raw, text, and URL encoded form data
- cookie-parser -> parse cookie header and handling cookies
- multer -> handling multipart/form-data
*/

const express = require("express");
const app = express();

// Use a middleware from express to serve static files (images, CSS, JS, etc.)
app.use(express.static("public")); // public if we save the static files in a directory named public

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/post", (req, res) => {
  console.log("POST!");
  res.send("Hello POST");
});

app.get("/about", (req, res) => {
  res.send("About Page!");
});

app.delete("/del_user", (req, res) => {
  console.log("DELETE!");
  res.send("Hello DELETE");
});

const server = app.listen(8080, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});
