const express = require("express");
const app = express();
// console.dir(app);
// app.use(() => {
//   console.log("We got a new request");
// }); //listens for request
app.get("/", (req, res) => {
  res.send("<h1>HOME PAGE</h1>");
  console.log("Request to homepage");
});
app.get("/r/:subreddit", (req, res) => {
  // const val = req.params.subreddit;
  const { subreddit } = req.params;
  res.send(`<h1> Welocome to ${subreddit} subreddit </h1>`);
  console.log(`request to ${subreddit} subreddit`);
});
app.get("/r/:subreddit/:postid", (req, res) => {
  // const val = req.params.subreddit;
  const { subreddit, postid } = req.params;
  res.send(
    `<h1> Welocome to ${subreddit} subreddit with postid ${postid}</h1>`
  );
  console.log(`request to ${subreddit} subreddit with postid ${postid}`);
});
app.get("/cats", (req, res) => {
  res.send("<h1>Cats</h1>");
  console.log("Request to /cats");
});
app.get("/dogs", (req, res) => {
  res.send("<h1>Dogs</h1>");
  console.log("Request to /dogs");
});
app.post("/cats", (req, res) => {
  res.send("Post Request to /cats , this is different");
  console.log("Post request to /cats");
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send(`<h1> Nothing Found </h1>`);
    console.log("Search field empty,no results");
  } else {
    res.send(`<h1> Search results for ${q} </h1>`);
    console.log(`Search results for ${q}`);
  }
});
app.get("*", (req, res) => {
  res.send("<h1>Dont know this path,please try again</h1>");
  console.log("Request to unspecified path");
});
app.listen(3000, () => {
  console.log("Server Started !!! , listening on port 3000");
}); //starts the server
