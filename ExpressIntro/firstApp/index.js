const express = require("express");
const app = express();
// console.dir(app);
app.use(() => {
  console.log("We got a new request");
}); //listens for request
app.listen(3000, () => {
  console.log("hello!!! , listening on port 3000");
}); //starts the server
