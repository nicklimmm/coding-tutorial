const express = require("express");
const { checkJwt } = require("../middlewares/auth");
const router = express.Router();
const UserService = require("../services/User");

// Protect all routes under this file
// router.use(checkJwt)

// Protected route
router.get("/", checkJwt, async (req, res) => {
  try {
    console.log(req.query.email);
    const users = await UserService.getAllUsers({
      emailKeyword: req.query.email,
    });
    res.json(users);
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

module.exports = router;
