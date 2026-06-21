const express = require("express");
const {
  getUser,
  createUser,
  getUserById,
} = require("../controller/userController");

const router = express.Router();

router.get("/", getUser);
router.get("/:id", getUserById);
router.post("/", createUser);

module.exports = router;
