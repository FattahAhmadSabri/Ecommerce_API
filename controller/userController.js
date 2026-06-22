const path = require("path");
const {
  users,
  createUserService,
  getUserByIdService,
} = require("../service/userService");
const { errorResponse, successResponse } = require("../utils/response");

const createUser = async (req, res) => {
  try {
    let { name } = req.body;
    const newUser = createUserService(name);
    // res.status(201).json({ message: "Adding a new user", data: newUser });
    successResponse(res, "Adding a new user", newUser,201);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return errorResponse(res, error.message);
  }
};
const getUser = async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "..", "view", "user.html"));
    // res.status(200).json({ message: "Fetching all users", data: users });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return errorResponse(res, error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundUser = getUserByIdService(id);
    if (!foundUser) {
      // return res.status(404).json({ message: `User with ID: ${id} not found` });
      return errorResponse(res, error.message);
    }
    // res
    //   .status(200)
    //   .json({ message: `Fetching user with ID: ${id}`, data: foundUser });
      successResponse(res, `Fetching user with ID: ${id}`, foundUser);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return errorResponse(res, error.message);
  }
};

module.exports = { getUser, createUser, getUserById, users };
