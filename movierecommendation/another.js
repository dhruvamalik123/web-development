//constants used in the page

var recMovie;
var searchMovie;
const body = document.querySelector("body");
const button = document.querySelector("button");
const input = document.querySelector("input");

//********************************/
const searchMovies = async (name) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=704d8fbeab963f0d3d2742a0441e9222&language=en-US&page=1&include_adult=false&query=${name}`
    );
    return result.data;
  } catch (e) {
    console.log("Error", e);
  }
};

const recommendedMovies = async (movie) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie}/recommendations?api_key=704d8fbeab963f0d3d2742a0441e9222&language=en-US&page=1`
    );
    return result.data;
  } catch (e) {
    console.log("Error", e);
  }
};

const refresh = () => {
  const div = document.querySelectorAll("div");
  for (let item of div) {
    item.remove();
  }
};

const recommendedpage = async (recmovie) => {
  let resout = await recommendedMovies(recmovie);
  recResults = resout.results;
  showresults(recResults, 1);
  //   console.log(r);
};

// const form = document.querySelector("form");
const outputpage = async () => {
  let out = await searchMovies(input.value);
  searchmovie = out.results;
  showresults(searchmovie, 2);
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  refresh();
  outputpage();
});

const selectedMovie = (details) => {
  console.log(details.id);
  console.log(details.title);
  console.log(details.overview);
  const searches = document.createElement("div");
  const description = document.createElement("div");
  const image = document.createElement("img");
  image.src = `https://image.tmdb.org/t/p/w185${details.poster_path}`;
  image.alt = "not available";
  searches.innerText = `${details.title}`;
  description.innerText = `${details.overview}`;
  searches.append(image);
  searches.append(description);
  body.append(searches);
};
const showresults = (searchmovie, flag) => {
  console.log("having access");
  console.log(searchmovie);
  for (let details of searchmovie) {
    // console.log(r);
    if (details.poster_path != null) {
      console.log(details.title);
      console.log(`https://image.tmdb.org/t/p/w185${details.poster_path}`);
      console.log(details.id);
      console.log("**************************");
      const searches = document.createElement("div");
      const name = document.createElement("div");
      const image = document.createElement("img");
      image.src = `https://image.tmdb.org/t/p/w185${details.poster_path}`;
      image.alt = "not available";
      searches.innerText = `${details.title}`;
      searches.append(image);
      body.append(searches);
      input.value = "";
      image.onclick = () => {
        recmovie = details.id;
        console.log(recmovie);
        refresh();
        if (flag === 1) {
          refresh();
          selectedMovie(details);
        }
        if (flag == 2) {
          recommendedpage(recmovie);
        }
        // console.log("clicked");
        // console.log(r.title);
        // console.log(r.id);

        // recommendedpage(recmovie);
      };
    }
  }
};
