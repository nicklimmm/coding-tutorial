const express = require("express");
const bodyParser = require("body-parser");
const users = require("./users");
const bcrypt = require("bcrypt");
const app = express();
const { readJsonFile } = require("./utils");

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

app.post("/login", async (req, res) => {
  const data = await readJsonFile("./users.json", "r");

  for (const key in data) {
    if (data[key].email == req.body.email) {
      const valid = await bcrypt.compare(req.body.password, data[key].password);
      if (valid) {
        res.send({ success: true, name: data[key].name });
      } else {
        res.send({ success: false });
      }
      return;
    }
  }

  res.send({ success: false });
});

const server = app.listen(8000, "127.0.0.1", () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);
});
