const { errorHandler } = require("../utils/error");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId)
    return next(
      errorHandler(403, "You are not authorized to update this user.")
    );
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "Password must be at least 6 characters long.")
      );
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }
  if (req.body.name) {
    if (req.body.name.length < 7 || req.body.name.length > 20) {
      return next(
        errorHandler(400, "Name must be between 7 and 20 characters long")
      );
    }
    if (req.body.name.includes(" ")) {
      return next(errorHandler(400, "Name cannot contain spaces"));
    }
    if (req.body.name !== req.body.name.toLowerCase()) {
      return next(errorHandler(400, "Name must be in lowercase"));
    }
    if (!req.body.name.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Name can only contain letters and numbers")
      );
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  }
};

exports.deleteUser = async (req, res, next) => {
  if (!req.user.isAdmin && req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "You are not authorized to delete this account!")
    );
  }
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json("User successfully deleted");
  } catch (error) {
    next(error);
  }
};

exports.signOut = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("You have been successfully signed out");
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not authorized to view all users"));
  }
  try {
    const startIndex = +req.query.startIndex || 0;
    const limit = +req.query.limit || 9;
    const sortDirection = req.query.sort === "asc" ? 1 : -1;

    const users = await User.find()
      .sort({ createdAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const usersWithoutPassword = users.map((user) => {
      const { password, ...rest } = user._doc;
      return rest;
    });

    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users: usersWithoutPassword,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {}
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
