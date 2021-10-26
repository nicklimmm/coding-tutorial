const express = require("express");
const bodyParser = require("body-parser");
const users = require("./users");
const app = express();

app.use(bodyParser.json());

// Fix CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/login", (req, res) => {});

const server = app.listen(8000, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});
