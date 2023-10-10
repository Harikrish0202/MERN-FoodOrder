const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "..", "config.env"),
});
const User = require("../Models/userModel");

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    phoneNumber: req.body.phoneNumber,
  });

  if (!process.env.JWT_SECRET_KEY) {
    console.log("no key found");
  }
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please provide email and password", 400);
  }

  // 2) check if user exists && password is correct.
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    throw new Error("Incorrect email or password", 401);
  }

  if (!process.env.JWT_SECRET_KEY) {
    throw new Error("JWT_SECRET environment variable is not set");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });

  res.status(200).json({
    status: "success",
    token,
  });
};

exports.protect = async (req, res, next) => {
  // 1) Getting token and check of its there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);

  if (!token) {
    throw new Error("You are not logged in! Please login to get access.", 401);
  }
  // 2) validate token
  // promisify() is a function (token,process...) calling a function
  try {
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_KEY
    );
    console.log(decoded);
  } catch (error) {
    throw new Error(error.message);
  }
  // 3) Check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    throw new Error(
      "The user belonging to this token does no longer exists",
      401
    );
  }

  // 4)Check if user changed password after the token was issued
  if (freshUser.changesPasswordAfter(decoded.iat)) {
    throw new Error("User recently changed password! please log in again", 401);
  }

  // Grand Access.
  next();
};
