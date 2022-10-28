const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const categories = ["fruit", "vegetable", "dairy", "bakery"];

app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  //   console.log(product);
  res.render("products/show", { product });
});
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});
app.post("/products", async (req, res) => {
  const { name, price, category } = req.body;
  console.log(name);
  console.log(price);
  console.log(category);
  const newProduct = new Product({
    name: name,
    price: price,
    category: category,
  });
  const data = await newProduct.save();
  const products = await Product.find({});
  res.render("products/index", { products });
});
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});
app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  //   console.log(req.body);
  const { name, price, category } = req.body;
  const product = await Product.findByIdAndUpdate(
    id,
    { name: name, price: price, category: category },
    { new: true, runValidators: true }
  );
  res.redirect(`/products/${product._id}`); // we use redirect so the user cant send request again and again
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
