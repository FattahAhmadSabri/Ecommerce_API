const express = require("express");
const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const cartRouter = require("./router/cartRouter");
const port = 4000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("E-Commerce website working perfectly");
});
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

app.listen(port, () => {
  console.log("server connected");
});
