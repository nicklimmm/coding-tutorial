const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are in /users");
});

router.post("/", (req, res) => {
  res.send(`You are creating a user ${JSON.stringify(req.body, null, 2)}`);
});

router.get("/:id", (req, res) => {
  res.send(`You are in /users/${req.params.id}`);
});

module.exports = router;
