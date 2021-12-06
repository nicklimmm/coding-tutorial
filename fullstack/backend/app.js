const express = require("express");
const users = require("./users");
const bcrypt = require("bcrypt");
const { Sequelize } = require("sequelize");
const { readJsonFile } = require("./utils");

const app = express();
const sequelize = new Sequelize("mysql://user:user@localhost:3306/tutorial");

app.use(express.json());

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

const server = app.listen(8000, "127.0.0.1", async () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening at http://${host}:${port}`);

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
