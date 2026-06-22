const api = "http://localhost:4000/products";
const createProduct = async (event) => {
  event.preventDefault();

  const productName = document.getElementById("product").value;

  try {
    const response = await axios.post(api, {
      name: productName,
    });

    console.log(response.data);

    document.getElementById("productForm").reset();
  } catch (error) {
    console.error(error);
  }
};

document
  .getElementById("productForm")
  .addEventListener("submit", createProduct);
