const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/movieApp");
  console.log("Connection Established");
  const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String,
  });
  const Movie = mongoose.model("Movie", movieSchema);
  // const amadeus = new Movie({
  //   title: "Amadeus",
  //   year: 1986,
  //   score: 9.0,
  //   rating: "A",
  // });
  // await amadeus.save();
  // Movie.insertMany([
  //   { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
  //   { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  //   { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  //   { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  //   { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
  // ]).then((data) => {
  //   console.log("Data inserted");
  //   console.log(data);
  // });
  // console.log(amadeus.title);

  Movie.find({ score: { $gt: 9 } }).then((data) => {
    for (let c of data) {
      console.log(`Title :: ${c.title}`);
      console.log(`Year :: ${c.year}`);
      console.log(`Score :: ${c.score}`);
      console.log(`Rating :: ${c.rating}`);
      console.log("---------------------------------------------");
    }
  });
  Movie.updateOne({ score: 9.3 }, { score: 9.6 }) //we can also use update many
    .then((data) => {
      console.log(`Updated ${data.modifiedCount}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
//we can also use Movie.findOneAndUpdate({title:"Amadeus"},{score:10},{new:true}).then(data=>{console.log(data)})
//new:true means that it will return the data after its updated,so that we only get the new data

//if there is an error in the async function main() given below,it will return the error

main().catch((err) => {
  console.log("Connection Failed");
  console.log(err);
});
