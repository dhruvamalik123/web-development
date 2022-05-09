// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");
const url =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for (let i = 1; i < 10; i++) {
  const newimg = document.createElement("img");
  const pokemon = document.createElement("div");
  pokemon.classList = "pokemon";
  const label = document.createElement("label");
  newimg.classList = "image";
  label.innerText = `#${i}`;
  newimg.src = url + i.toString() + ".png";
  //newimg.src=`${url}${i}.png`; can also be done like this
  pokemon.appendChild(newimg);
  pokemon.appendChild(label);

  container.appendChild(pokemon);
}
