const { users } = require("./userController");
const { findProductById } = require("./productController");

const findUser = (id) => users.find((u) => u.id === id);

const createCart = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundUser = findUser(id);
    if (!foundUser) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    if (!foundUser.cart) {
      foundUser.cart = [];
    }
    res
      .status(201)
      .json({ message: `Cart created for user ${id}`, data: foundUser.cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundUser = findUser(id);
    if (!foundUser) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    foundUser.cart = foundUser.cart || [];
    res
      .status(200)
      .json({ message: `Cart for user ${id}`, data: foundUser.cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundUser = findUser(id);
    if (!foundUser) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    foundUser.cart = foundUser.cart || [];
    const cartItems = foundUser.cart.map((item) => {
      const product = findProductById(item.productId);
      return {
        productId: item.productId,
        quantity: item.quantity,
        product: product || null,
      };
    });

    res
      .status(200)
      .json({ message: `Cart items for user ${id}`, data: cartItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { productId, quantity = 1 } = req.body;
    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }
    const foundUser = findUser(id);
    if (!foundUser) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    foundUser.cart = foundUser.cart || [];
    const itemProductId = parseInt(productId);
    const existingItem = foundUser.cart.find(
      (item) => item.productId === itemProductId,
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      foundUser.cart.push({ productId: itemProductId, quantity });
    }
    res
      .status(200)
      .json({ message: "Item added to cart", data: foundUser.cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  getCart,
  getCartItems,
  addItemToCart,
};
