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
    res.json({ message: "Register successful!" });
  } catch (err) {
    res.status(422).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const token = await UserService.login(req.body.email, req.body.password);
    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login successful!", token });
  } catch (err) {
    res.status(422).json(err.message);
  }
});

module.exports = router;
