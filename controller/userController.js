const {users, createUserService, getUserByIdService}= require("../service/userService")

const createUser = async (req, res) => {
  try {
    let { name } = req.body;
     const newUser = createUserService(name)
    res.status(201).json({ message: "Adding a new user", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    res.status(200).json({ message: "Fetching all users", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundUser =  getUserByIdService(id);
    if (!foundUser) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    res
      .status(200)
      .json({ message: `Fetching user with ID: ${id}`, data: foundUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser, createUser, getUserById, users };
