const path = require("path");
const {
  getProductByIdService,
  createProductService,
  products,
} = require("../service/productService");
const { errorResponse, successResponse } = require("../utils/response");

const getProducts = async (req, res) => {
  try {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "view", "product.html"));
    // res.status(200).json({ message: "Fetching all products", data: products });
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const foundProduct = getProductByIdService(id);

    if (!foundProduct) {
      return errorResponse(res, `Product with ID ${id} not found`, 404);
    }

    return successResponse(res, `Fetching product with ID ${id}`, foundProduct);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = createProductService(name);

    // res.status(201).json({ message: "Adding a new product", data: newProduct });
    return successResponse(res,"Adding a new product",newProduct,201)
  } catch (error) {
    // res.status(500).json({ message: error.message });
    return errorResponse(res,error.message)
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
