const searchMovies = async (genre) => {
  try {
    const result = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows?q=${genre}`
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
  console.log(out);
  const searches = document.createElement("p");
  const name = document.createElement("p");
  const image = document.createElement("img");
  image.src = out.image.medium;
  image.alt = "not available";
  console.log(image);
  searches.append(image);
  name.innerHTML = `<br>${out.name}<br>`;
  searches.append(name);
  // location.reload(true);
  body.append(searches);
  input.value = "";
};
const refresh = () => {
  const p = document.querySelectorAll("p");
  // p.innerHTML = "<br>";
  // console.log(p);
  for (let item of p) {
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
