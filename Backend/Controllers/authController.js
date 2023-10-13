const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "..", "config.env"),
});
const User = require("../Models/userModel");

// FOR USER SIGNUP.
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

  // Removing password from output;
  newUser.password = undefined;

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), // here we converting into milliseconds
    httpOnly: true, // cookie cannot be accessed or modified in any way by the browser.
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // cookies is only be sent on encrypted connection.
  res.cookie("jwt", token, cookieOptions);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
};

//FOR USER SIGNIN.
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // 1) check if email and password exist
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

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ), // here we converting into milliseconds
    httpOnly: true, // cookie cannot be accessed or modified in any way by the browser.
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true; // cookies is only be sent on encrypted connection.
  res.cookie("jwt", token, cookieOptions);

  res.status(200).json({
    status: "success",
    token,
  });
};

// FOR USER LOGIN
// Only for rendering pages.(checking if user is logged in or not).
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3)Check if user changed password after the token was issued
      if (currentUser.changesPasswordAfter(decoded.iat)) {
        return next();
      }

      // Grand Access.
      req.user = currentUser;
      return next();
    } catch (error) {
      return next();
    }
  }
  next();
};

//FOR USER LOGOUT
exports.logOut = async (req, res, next) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000), // 10 seconds from now.
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

/////
exports.protect = async (req, res, next) => {
  // 1) Getting token and check of its there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
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
