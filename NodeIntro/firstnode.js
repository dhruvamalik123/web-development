// for (let i = 0; i < 10; i++) {
//   console.log("hello there");
// }
const power = (x, y) => {
  let res = 1;
  for (let i = 0; i < y; i++) {
    res = x * res;
  }
  return res;
};
// console.log(power(2, 3));
const multiply = (x, y) => {
  return x * y;
};
module.exports.power = power;
module.exports.multiply = multiply;
