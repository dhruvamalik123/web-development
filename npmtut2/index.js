//to run this code , we have to remove the type in package.json

const figlet = require("figlet");
const colors = require("colors");
figlet("DHRUVA", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
  console.log("hello".rainbow);
});
