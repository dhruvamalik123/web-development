const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  const random = Math.floor(Math.random() * 5) + 1;
  const name = [
    "Good Morning",
    "Hello There",
    "Namaste",
    "Guten Morgen",
    "Hola!!!",
  ];
  const greetings = name[random - 1];
  console.log("all ok");
  res.render("home.ejs", { greetings, random }); //we can remove .ejs from file name if the view engine has been set to ejs
  //res.render("home.ejs", { random });    instead of key value pair("name variable to be returned(can be anything"):variable name in javascript) rand : random , we can just pass random also
});
app.get("/rand", (req, res) => {
  const randnum = Math.floor(Math.random() * 10) + 1;
  console.log("accessed random");
  res.render("random", { randnum });
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  console.log("searched for " + subreddit);
  res.render("subreddit", { subreddit });
});

app.listen(3010, () => {
  console.log("listening on port 3010");
});
