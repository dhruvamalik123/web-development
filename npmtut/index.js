const jokes = require("give-me-a-joke");
var colors = require("colors");
// var cowsay = require('cowsay');
// console.log(jokes);
jokes.getRandomCNJoke(function (joke) {
  console.log(joke.rainbow);
});
// var category = "knock-knock";
// jokes.getRandomJokeOfTheDay(category, function (joke) {
//   console.log(joke);
// });
// var fn = "Dhruva";
// var ln = "Malik";
// jokes.getCustomJoke(fn, ln, function (joke) {
//   console.log(joke);
// });
