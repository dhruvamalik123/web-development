const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid"); //used for generating a random unique id
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Dhruva",
    comment: "That looks like shit",
  },
  {
    id: uuid(),
    username: "Kaustubh",
    comment: "mujhe uske baare me mat btaya kr >_<",
  },
  {
    id: uuid(),
    username: "Palak",
    comment: "Thik hai na , thik hai ",
  },
  {
    id: uuid(),
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
  // console.log(uuid());
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  // console.log(req.body);
  // res.send(`IT WORKED YAY ${username} ${comment}`);
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
  // console.log(comments);
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  // console.log(comment);
  res.render("comments/show", { comment });
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
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
