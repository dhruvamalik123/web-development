const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    id: 1,
    username: "Dhruva",
    comment: "That looks like shit",
  },
  {
    id: 2,
    username: "Kaustubh",
    comment: "mujhe uske baare me mat btaya kr >_<",
  },
  {
    id: 3,
    username: "Palak",
    comment: "Thik hai na , thik hai ",
  },
  {
    id: 4,
    username: "Puneet",
    comment: "Aap school ke bache nhi ho ",
  },
];
//We are using the concept of crud
//Create
//Read
//Use
//Delete
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  // console.log(req.body);
  // res.send(`IT WORKED YAY ${username} ${comment}`);
  comments.push({ username, comment });
  res.redirect("/comments");
  // console.log(comments);
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`POST /tacos response you get ${qty} ${meat} tacos`); //this is printed on the webpage
  // console.log(`POST /tacos response you get ${qty} ${meat} tacos`);
});

app.listen(3030, () => {
  console.log("ON PORT 3030");
});
