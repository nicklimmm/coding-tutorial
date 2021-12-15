const { db } = require("../models");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const register = async (name, email, password) => {
  // Make sure that the fields are not empty
  if (name.length === 0 || email.length === 0 || password.length === 0) {
    throw new Error("Field(s) cannot be empty");
  }
  // Make sure that the password is at least 8 characters long
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }
  // Make sure that the email is unique
  const amount = await db.User.count({
    where: {
      email: email,
    },
  });

  if (amount !== 0) {
    throw new Error("Email is already registered");
  }

  // Hash the password
  password = await hashPassword(password);
  const newUser = await db.User.create({ name, email, password });
  console.log(`Created new user: ${newUser.email}`);
};

const login = (email, password) => {
  // Make sure that the fields are not empty
  // Check if email exists
  // If email exists, check if the password matches
};

module.exports = {
  register,
};
