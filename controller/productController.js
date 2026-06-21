const path = require("path")
const {getProductByIdService,createProductService,products} = require("../service/productService")


const getProducts = async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname,"..","view","product.html"))
    // res.status(200).json({ message: "Fetching all products", data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foundProduct = getProductByIdService(id);
    if (!foundProduct) {
      return res
        .status(404)
        .json({ message: `Product with ID ${id} not found` });
    }
    res
      .status(200)
      .json({ message: `Fetching product with ID ${id}`, data: foundProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = createProductService(name);
    
    res.status(201).json({ message: "Adding a new product", data: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  
};
