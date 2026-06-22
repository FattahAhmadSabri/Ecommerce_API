const api ="http://localhost:4000/carts/1/cart/items"

const createCartSubmit = async (event) => {
  event.preventDefault();

  const productId = document.getElementById("productId").value;
  const quantity = document.getElementById("quantity").value;

  try {
    const response = await axios.post(
      api,
      {
        productId,
        quantity,
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};