const express = require("express");
const router = express.Router();
const UserService = require("../services/User");
const { readJsonFile } = require("../utils");

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
  try {
    await UserService.register(
      req.body.name,
      req.body.email,
      req.body.password
    );
    res.json("Register success!");
  } catch (err) {
    res.status(422).json(err.message);
  }
});

module.exports = router;
