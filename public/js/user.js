const api = "http://localhost:4000/users";

const createUser = async (event) => {
  event.preventDefault();

  const name = document.getElementById("userName").value;

  try {
    const response = await axios.post(api, {
      name,
    });

    console.log(response.data);

    alert("User Added Successfully");

    document.getElementById("userForm").reset();
  } catch (error) {
    console.error(error);
  }
};