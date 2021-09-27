const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const multer = require("multer");

// Use a middleware from express to serve static files (images, CSS, JS, etc.)
app.use(express.static("public")); // public if we save the static files in a directory named public

// Custom middlewares

// Applies to all links
app.use("/", (req, res, next) => {
  console.log("Welcome!");
  next();
});

app.use("/user/:id", (req, res, next) => {
  console.log("IN USER!");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Query strings -> starts with '?', in key-value pair form, and they are concatenated with '&'
app.get("/register", (req, res) => {
  input = {
    fname: req.query.fname,
    lname: req.query.lname,
  };
  // We can process inputs here (e.g. save to database, templating)
  console.log(input);
  res.send(JSON.stringify(input));
});
/* 
REST (Representational State Transfer) Architecture
-> web standard, provides access to resources and modifies the resources using HTTP protocol
 */

/* 
Scheme
- /listusers (GET)
- /adduser (POST) -> needs body
- /deleteuser (DELETE)
- /:user (GET)
*/

app.get("/listusers", (req, res) => {
  fs.readFile(__dirname + "/scores.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});

app.post("/adduser", (req, res) => {
  fs.readFile(__dirname + "/scores.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data["user3"] = {
      name: "Alice",
      password: "password3",
      score: 9,
    };
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.delete("/deleteuser", (req, res) => {
  fs.readFile(__dirname + "/scores.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    delete data["user2"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.get("/user/:id", (req, res) => {
  fs.readFile(__dirname + "/scores.json", "utf8", (err, data) => {
    data = JSON.parse(data);

    // Access params
    console.log(data[`user${req.params.id}`]);
    res.end(JSON.stringify(data[`user${req.params.id}`]));
  });
});

process.once("SIGUSR2", function () {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, "SIGINT");
});

const server = app.listen(8000, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});
