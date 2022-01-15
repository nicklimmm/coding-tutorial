const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
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
    const { accessToken, refreshToken } = await UserService.login(
      req.body.email,
      req.body.password
    );
    res
      .cookie("accessToken", accessToken, { httpOnly: true })
      .json({ message: "Login successful!", refreshToken });
  } catch (err) {
    res.status(422).json(err.message);
  }
});

router.post("/logout", (req, res) => {
  res
    .cookie("accessToken", "", { httpOnly: true })
    .json({ message: "Logout successful!" });
});

router.post("/refresh-token", (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    res.status(401).json({ message: "Refresh token required" });
    return;
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const accessToken = UserService.generateAccessToken({
      email: payload.email,
    });
    res
      .cookie("accessToken", accessToken, { httpOnly: true })
      .json({ message: "Refresh token successful!" });
  } catch (err) {
    res.status(403).json({ message: "Refresh token expired" });
  }
});

module.exports = router;
