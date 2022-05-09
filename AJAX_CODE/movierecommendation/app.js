const searchMovies = async (name) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=704d8fbeab963f0d3d2742a0441e9222&language=en-US&page=1&include_adult=false&query=${name}`
    );
    //console.log(result.data.image.original);
    return result.data;
  } catch (e) {
    console.log("Error", e);
  }
};
const body = document.querySelector("body");
const button = document.querySelector("button");
const input = document.querySelector("input");
// const form = document.querySelector("form");
const outputpage = async () => {
  let out = await searchMovies(input.value);

  res = out.results;
  console.log(res);
  for (let r of res) {
    // console.log(r);
    if (r.poster_path != null) {
      console.log(r.title);
      console.log(`https://image.tmdb.org/t/p/w185${r.poster_path}`);
      console.log(r.id);
      console.log("**************************");
      const searches = document.createElement("div");
      const name = document.createElement("div");
      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w185${r.poster_path}`;
      image.alt = "not available";
      // console.log(image);

      searches.innerText = `${r.title}`;
      searches.append(image);
      //   searches.append(name);
      // location.reload(true);
      body.append(searches);
      input.value = "";
    }
  }

  // console.log(out.data.results);
  //   for (let result of res) {
  //     if (res.poster_path != null) {
  //       console.log(res.title);
  //       console.log(`https://image.tmdb.org/t/p/w185${res.poster_path}`);
  //       console.log(res.id);
  //       console.log("**************************");
  //     }
  //   }
  //   const searches = document.createElement("p");
  //   const name = document.createElement("p");
  //   const image = document.createElement("img");
  //   image.src = out.image.medium;
  //   image.alt = "not available";
  //   console.log(image);
  //   searches.append(image);
  //   name.innerHTML = `<br>${out.name}<br>`;
  //   searches.append(name);
  //   // location.reload(true);
  //   body.append(searches);
  //   input.value = "";
};
const refresh = () => {
  const div = document.querySelectorAll("div");
  // p.innerHTML = "<br>";
  // console.log(p);
  for (let item of div) {
    item.remove();
  }
  // p.remove;
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  refresh();
  outputpage();
});
//*********************************************/
//COLT VERSION
// const form = document.querySelector("#searchForm");
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchTerm = form.elements.query.value;
//   const config = { params: { q: searchTerm } };
//   const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
//   makeImages(res.data);
//   form.elements.query.value = "";
// });

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

// console.log("hello");
// const showRatings = async () => {
//   try {
//     const result = await axios.get(
//       "https://imdb-api.com/en/API/Ratings/k_8sfni1o3/tt1375666"
//     );
//     console.log(result.data.imDb);
//     // return result.data;
//   } catch (e) {
//     console.log("Error", e);
//   }
// };

// const searchMovies = async (genre) => {
//   try {
//     const out = await axios.get(
//       "https://api.themoviedb.org/3/search/movie?api_key=704d8fbeab963f0d3d2742a0441e9222&language=en-US&page=1&include_adult=false&query=ice age"
//     );
//     //console.log(result.data.image.original);
//     // return result.data;
//     res = out.data.results;
//     // console.log(out.data.results);
//     for (let res of out.data.results) {
//       if (res.poster_path != null) {
//         console.log(res.title);
//         console.log(`https://image.tmdb.org/t/p/w185${res.poster_path}`);
//         console.log(res.id);
//         console.log("**************************");
//       }
//     }
//   } catch (e) {
//     console.log("Error", e);
//   }
// };
// // showRatings();
// searchMovies();
