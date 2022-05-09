const button = document.querySelector("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
body.style.textAlign = "center";
button.addEventListener("click", () => {
  color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  body.style.backgroundColor = color;
  h1.innerText = color;
});
