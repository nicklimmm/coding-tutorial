const { db } = require("../models");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize/dist");
const jwt = require("jsonwebtoken");

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

  name = name.toLowerCase();
  email = email.toLowerCase();

  const newUser = await db.User.create({ name, email, password });
  console.log(`Created new user: ${newUser.email}`);
};

const login = async (email, password) => {
  // Make sure that the fields are not empty
  if (email.length === 0 || password.length === 0) {
    throw new Error("Field(s) cannot be empty");
  }
  // Check if email exists
  const amount = await db.User.count({
    where: {
      email: email,
    },
  });

  if (amount === 0) {
    throw new Error("Email is not yet registered");
  }

  // If email exists, check if the password matches
  const { password: hashedPassword } = await db.User.findOne({
    attributes: ["password"],
    where: {
      email: email,
    },
  });

  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    throw new Error("Password does not match");
  }

  console.log(`User ${email} logged in`);

  const token = jwt.sign({ email }, process.env.SECRET_KEY);
  return token;
};

const getAllUsers = async ({ emailKeyword = "%" }) => {
  if (emailKeyword !== "%") {
    emailKeyword = `%${emailKeyword}%`;
  }

  const users = await db.User.findAll({
    attributes: ["email", "name", "createdAt"],
    where: {
      email: {
        [Op.like]: emailKeyword,
      },
    },
  });

  return users;
};

module.exports = {
  register,
  login,
  getAllUsers,
};
