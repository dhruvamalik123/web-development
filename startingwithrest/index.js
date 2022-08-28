const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});
app.post("/tacos", (req, res) => {
  //   console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`POST /tacos response you get ${qty} ${meat} tacos`);
});
app.listen(3030, () => {
  console.log("ON PORT 3030");
});
