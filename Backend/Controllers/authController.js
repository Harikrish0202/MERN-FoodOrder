const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const path = require("path");
const crypto = require("crypto");
const dotenv = require("dotenv").config({
  path: path.join(__dirname, "..", "config.env"),
});
const User = require("../Models/userModel");
const sendEmail = require("./../Utilis/email");

// FOR USER SIGNUP.
exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      phoneNumber: req.body.phoneNumber,
    });

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET environment variable is not set");
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
      user: newUser,
    });
  } catch (error) {
    // console.log(error);
    if (error.code === 11000) {
      return res.status(409).json({
        status: "fail",
        error: "Email address already exists",
      });
    }
    res.status(400).json({
      error: error.message,
    });
  }
};

//FOR USER SIGNIN.
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) check if email and password exist
    if (!email || !password) {
      throw new Error("Please provide email and password");
    }

    // 2) check if user exists && password is correct.
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Incorrect email or password");
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
      user: user,
    });
  } catch (error) {
    if (error.message === "Incorrect email or password") {
      return res.status(401).json({
        status: "fail",
        error: "Incorrect email or password",
      });
    } else {
      res.status(400).json({
        status: "fail",
        error: error.message,
      });
    }
  }
};

// For getting currently login user details.
exports.getUserLogins = async (req, res, next) => {
  const currentUser = await User.findById(req.user);
  // console.log(currentUser);
  res.status(200).json({
    status: "success",
    user: currentUser,
  });
};

exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    throw new Error("There is no user with this email.");
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token valid for 10 mins",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token send to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next();
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error("Token is invalid or has expired");
    }

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_TIME,
    });

    res.status(200).json({
      status: "success",
      token,
      // user: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

//FOR USER LOGOUT
exports.logOut = async (req, res, next) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 2 * 1000), // 10 seconds from now.
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
};

// Protect route
exports.protect = async (req, res, next) => {
  try {
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
    // console.log(token);

    if (!token) {
      throw new Error("You are not logged in! Please login to get access.");
    }
    // 2) validate token
    // promisify() is a function (token,process...) calling a function

    let decoded;
    try {
      decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      throw new Error(error.message);
    }

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        error: "The user belonging to this token does no longer exist",
      });
    }
    // 4)Check if user changed password after the token was issued
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      throw new Error(
        "User recently changed password! please log in again",
        401
      );
    }
    req.user = currentUser;
    console.log("selvam");
    // Grand Access.
    next();
  } catch (error) {
    res.status(401).json({
      status: "fail",
      error: error.message,
    });
  }
};

// FOR USER LOGIN
// Only for rendering pages.(checking if user is logged in or not).
// exports.isLoggedIn = async (req, res, next) => {
//   if (req.cookies.jwt) {
//     try {
//       // 1) verify token
//       const decoded = await promisify(jwt.verify)(
//         req.cookies.jwt,
//         process.env.JWT_SECRET
//       );
//       // 2) Check if user still exists
//       const currentUser = await User.findById(decoded.id);
//       if (!currentUser) {
//         return next();
//       }

//       // 3)Check if user changed password after the token was issued
//       if (currentUser.changesPasswordAfter(decoded.iat)) {
//         return next();
//       }

//       // Grand Access.
//       req.user = currentUser;
//       return next();
//     } catch (error) {
//       return next();
//     }
//   }
//   next();
// };
