const express = require("express");
const router = express.Router();
const UserService = require("../services/User");

router.post("/register", async (req, res) => {
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

router.post("/login", async (req, res) => {
  try {
    await UserService.login(req.body.email, req.body.password);
    res.json("Login success!");
  } catch (err) {
    res.status(422).json(err.message);
  }
});

module.exports = router;
