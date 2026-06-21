const express = require("express");
const {
  createCart,
  getCart,
  getCartItems,
  addItemToCart,
} = require("../controller/cartController");

const router = express.Router();

router.post("/:id/cart", createCart);
router.get("/:id/cart", getCart);
router.get("/:id/cart/items", getCartItems);
router.post("/:id/cart/items", addItemToCart);

module.exports = router;
