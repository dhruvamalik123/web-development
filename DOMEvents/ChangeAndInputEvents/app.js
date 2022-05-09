// const input = document.querySelector("#username");
// const h1 = document.querySelector("h1");
// //this is also used for live priview,like what we are typing,that can be changed in website,live
// // input.addEventListener('change', function (e) {
// //     console.log("CASKDJASKJHD")
// //change fires only when we enter comething different,like asd and asdf , if we again input asd , then it does not fire
// //hence sometime it is better to use input rather than change
// // })

// input.addEventListener("input", function (e) {
//   h1.innerText = input.value;
// });
const input = document.querySelector("#username");
const h1 = document.querySelector("h1");
input.addEventListener("input", function (e) {
  h1.innerText = `Welcome,${input.value}`;
  if (input.value == "") {
    // console.log("nothing");
    h1.innerText = "Enter Your Username";
  }
});
