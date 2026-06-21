const {
  createCartService,
  getCartService,
  getCartItemsService,
  addItemToCartService,
} = require("../service/cartService");

const createCart = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cart = createCartService(id);
    if (!cart) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    res
      .status(201)
      .json({ message: `Cart created for user ${id}`, data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cart = getCartService(id);
    if (!cart) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }
    res.status(200).json({ message: `Cart for user ${id}`, data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cartItems = getCartItemsService(id);
    if (!cartItems) {
      return res.status(404).json({ message: `User with ID: ${id} not found` });
    }

    res
      .status(200)
      .json({ message: `Cart items for user ${id}`, data: cartItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId is required" });
    }

    const cart = addItemToCartService(userId, productId, quantity);
    if (!cart) {
      return res
        .status(404)
        .json({ message: `User with ID: ${userId} not found` });
    }

    res.status(200).json({ message: "Item added to cart", data: cart });
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
