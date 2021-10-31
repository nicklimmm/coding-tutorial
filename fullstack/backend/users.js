const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs/promises");
const { readJsonFile } = require("./utils");

const hashPassword = async (password) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

router.get("/", async (req, res) => {
  try {
    const data = await readJsonFile("./users.json", "r");

    delete data.nextId;

    res.send(`Users ${JSON.stringify(data, null, 2)}`);
  } catch (e) {
    res.send(`Something went wrong`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await readJsonFile("./users.json", "r");

    const user = data[req.params.id];
    delete user.password;

    res.send(`User ${JSON.stringify(user, null, 2)}`);
  } catch (e) {
    console.log(e);
    res.send(`User with id of ${req.params.id} not found!`);
  }
});

router.post("/", async (req, res) => {
  // Update password with hashed password
  req.body.password = await hashPassword(req.body.password);

  const data = await readJsonFile("./users.json", "r+");

  // Add new user to database
  data[data.nextId] = req.body;

  // Update counter
  data.nextId++;

  // Commit changes to the file and close it
  await fs.writeFile("./users.json", JSON.stringify(data));

  res.send(`You are creating a user ${JSON.stringify(req.body, null, 2)}`);
});

module.exports = router;
