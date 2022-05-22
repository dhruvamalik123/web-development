const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
  console.log("all ok");
});
app.listen(3010, () => {
  console.log("listening on port 3010");
});
