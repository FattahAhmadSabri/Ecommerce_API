const { users } = require("./userService");
const { getProductByIdService } = require("./productService");

const findUser = (id) => users.find((u) => u.id === id);

const createCartService = (userId) => {
  const foundUser = findUser(userId);
  if (!foundUser) {
    return null;
  }
  if (!foundUser.cart) {
    foundUser.cart = [];
  }
  return foundUser.cart;
};

const getCartService = (userId) => {
  const foundUser = findUser(userId);
  if (!foundUser) {
    return null;
  }
  foundUser.cart = foundUser.cart || [];
  return foundUser.cart;
};

const getCartItemsService = (userId) => {
  const foundUser = findUser(userId);
  if (!foundUser) {
    return null;
  }
  foundUser.cart = foundUser.cart || [];

  return foundUser.cart.map((item) => {
    const product = getProductByIdService(item.productId);
    return {
      productId: item.productId,
      quantity: item.quantity,
      product: product || null,
    };
  });
};

const addItemToCartService = (userId, productId, quantity) => {
  const foundUser = findUser(userId);

  if (!foundUser) {
    return null;
  }

  foundUser.cart = foundUser.cart || [];
  const itemProductId = parseInt(productId);

  const existingItem = foundUser.cart.find(
    (item) => item.productId === itemProductId,
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    foundUser.cart.push({
      productId: itemProductId,
      quantity,
    });
  }

  return foundUser.cart;
};

module.exports = {
  findUser,
  createCartService,
  getCartService,
  getCartItemsService,
  addItemToCartService,
};
