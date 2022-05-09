// function sum() {
//   a = parseInt(prompt("Enter First Number ::"));
//   b = parseInt(prompt("Enter Second Number ::"));
//   console.log(a + b);
// }
// sum();
// "bubble".to
// function rant(message) {
//   console.log(message.toUpperCase());
// }
// rant("I hate Beets");
// rant("I hate Beets");
// rant("I hate Beets");
// Array.leng
// function sum(func) {
//   func();
//   func();
// }
// function bum() {
//   num = Math.floor(Math.random() * 10) + 1;
//   console.log(num);
// }
// sum(bum);
//**************************************************************************************** */
// const square = function (x) {
//   //function expression , different way of makeing a expression
//   return x * x;
// };
function makebetweendunction(min, max) {
  //also referred to as factory function,sort of
  // another type of cuntion which returns a function
  return function (x) {
    return (x >= min) & (x <= max);
  };
}
//how to use the function to return the function and then use the returned function is given below//
//************************************************************************************ */
// const iscrazy = makebetweendunction(0,18)
// undefined  --> Output in Console
// iscrazy
// ƒ (x) {--> Output in Console
//     return x >= min && x <= max;--> Output in Console
//   }--> Output in Console
// iscrazy(13)
// true--> Output in Console
// iscrazy(25)
// false--> Output in Console
//********************************************* */
const mymath = {
  PI: 3.1415,
  cube: function (num) {
    return num * num * num;
  },
  square: function (num) {
    return num * num;
  },
};
//short hand to create function/method of a class/
const mymath2 = {
  PI: 3.1415,
  blah: history,
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  },
  powerfour(x) {
    return x * x * x * x;
  },
};
// mymath2.powerfour(3);
// 81;
// mymath2.add(1, 2);
// 3;
// usage in console and output
// mymath.PI
// 3.1415
// mymath.cube
// ƒ (num) {
//     return num * num * num;
//   }
// mymath.cube(3);
// 27
// mymath.square(5);
// 25
//*******************************************
//using try and catch
const yell = function (num) {
  try {
    k = num.toUpperCase();
    return k;
  } catch (e) {
    // does work with or without error passed to the catch,in some cases works
    // console.log(e);
    console.log("Please enter a string");
  }
};
//****************** */
//forEach Method
const movies = [
  {
    name: "Jumaji",
    rating: 20,
  },
  {
    name: "RRR",
    rating: 85,
  },
  {
    name: "Mr.bean",
    rating: 67,
  },
];
movies.forEach(function (movie) {
  //here the parameter movie acts as an object for each element of the array movies
  console.log(`${movie.name} - ${movie.rating}/100`);
});
//********************************************************** */
//map method
//this map method takes a function as parameter ,, and inturn , the passed function takes a parameter ,
// which points to each element of the array one by one,and then returns the values to the
//variable,creating another array wothout changing the original array
const array = [1, 2, 3, 4, 5, 6];
const Squared = array.map(function (num) {
  return num * num;
});
console.log(Squared);
const changedratings = movies.map(function (movie) {
  return `${movie.name} - ${movie.rating * 2}/200`;
  // return movie;
});
const changedratings123 = movies.map(
  (movie) => `${movie.name} - ${movie.rating * 2}/200`
);
// movies.forEach(function (movie) {
//   //here the parameter movie acts as an object for each element of the array movies
//   console.log(`${movie.name} - ${movie.rating}/200`);
// });

//******************************* */
//Arrow functions
//work as regular functions,but creating is compact and neat
const tripled = (num) => {
  return num * num * num;
};
//if there is only one argument then we can also create the dunction and chooose the parameters without
//using parenthesis , that is like const tripled= num =>
const multiplication = (num1, num2) => {
  return num1 * num2;
};

//the arrow function using implicit return
//if we use the round brackets in place of the curly brackets
//then we can remove the keyword return , and this will tell the compiler/loader
//that we are returning just one thing , without using return
//works only if we have one statement in the body of the function
// const rolldie = () => (
// Math.floor(Math.random() * 6) + 1
// )
const rolldie = () => Math.floor(Math.random() * 6) + 1;
const add = (x, y) => x + y;
//setTimeout() funtion
//accepts two parameters first one is the function two be delayed
//second parameter is the time to be delayed , in milliseconds
setTimeout(() => {
  console.log("HELLO");
}, 3000);
console.log("Byeee");
//setTInterval() funtion
//accepts two parameters first one is the function two be delayed
//second parameter is the time to be delayed , in milliseconds
//and repeat after every milliseconds of second paramtere
setInterval(() => {
  console.log("HELLO");
}, 3000);
// console.log("Byeee");
//we can save the interval in an id(or any other variable) if we wwant to stop it at
//any Point we can stop it by passing the id(or the variable) inside the fuction clearInterval(id)
const id = setInterval(() => {
  console.log("Counting");
}, 3000);
console.log("Byeee");
//Filter() method
//used to select specific elements of an array according to the conditions and then store it in another
//array without changing the original array
//difference between filter and map function is that The map method is used to convert each
//item of an array, while the filter method is used to select certain items of an array.
const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numarray2 = numarray.filter((n) => n < 5);
const numarray3 = numarray.filter((n) => n % 2 == 1);
const numarray4 = numarray.filter((n) => {
  return n % 3 == 1;
});
const moviess = movies.filter((m) => m.rating > 50);
//we can also chain functions like filter and map
//let you are giden an array with names of some people and you have to create a function which retured a array
//which uses filter and the array has the names which are lesser that 5 in length
k = ["Dhruva", "Stacy", "Mark", "Valdmir putin", "zukerberg"];
const validUserNames = (m) => m.filter((m) => m.length <= 5);
//***************************************************88 */
//some and every function
//some returns true for an array,if even one elelemt passes the condtion,like an or operator on array
//every function returns true only if each of the elements in the array passes the conditions
const marklist = [25, 65, 78, 43, 65, 23, 76, 26, 31, 75, 27];
console.log(marklist.every((marks) => marks >= 25));
console.log(marklist.some((marks) => marks >= 25));
//create a function which accepts a array as argument and returns true if all the elements in the array
//are even , if not , return false , so here we will use every method.
const allEvens = (array) => array.every((element) => element % 2 === 0);
console.log(allEvens([2, 4, 6, 8, 0]));
console.log(allEvens([2, 4, 5, 8, 0]));
//************************************************************ */;
//Reduce Method
//the reduce method reduced the array on which it is working , into a single value which we
// can store in a variable , in this case we are using two parameters accumulator and currentvalue , in the first run
// both of them store the first and second element of the array respectively , and when we are performing the addition of
// these variables , they get added , and gets stored in the accumulator and current value takes the next value in the
// array , this goes on till we reach the end of the array
exams = [100, 65, 34, 65, 34];
// const total = exams.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(total);
const total = exams.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(total);
// const total1 = exams.reduce((total, price) => accumulator + currentValue);
// console.log(total);
const max = exams.reduce((max, next) => {
  if (max <= next) {
    return next;
  } else {
    return max;
  }
});
console.log(max);
const highestrated = movies.reduce((highest, next) => {
  if (highest.rating <= next.rating) {
    return next;
  } else {
    return highest;
  }
});
console.log(`${highestrated.name} - ${highestrated.rating}`);
//we can also give a second argument to the reduce function , which is the initial value of the accumulator , if not specified , it is just
// taken as the first element of the array, and if sepecified , accumulator will get the second parameter , and currentValue will point to
//the first
//the keyword this works differently in the normal function , as compared to the arrow function
//check this out , important
//************************************************/
//Default parameters
//if we have a function , and useer does not enter the parameters , then we can pass default paramters
//show that we do not get NaN as the returned value
const rollDie = (num = 6) => Math.floor(Math.random() * num) + 1;
//**********************************************************************************************************************/
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
k = Math.max(...numbers);
//here the ... (three dots/periods) spread the list intro separate arguments , as the Math.max function
//takes separate arguments as inputs and not an array,so we need to separate them into arguments
console.log(numbers);
console.log(...numbers);
console.log("hellooo");
console.log(..."hellooo");
//the spread can also be used to combine lists
const l1 = [1, 2, 3, 4, 5, 6];
const l2 = [8, 9, 10, 11, 12];
const allnum = [...l1, ...l2, 13];
//basically we can use spread on all the things which are iterable
//can also be used to create a copy which can then be saved in a variable
const family = {
  name: "Cat",
  legs: 4,
  fur: "yes",
};
const cat = {
  color: "Black",
  legs: 5,
  nails: "sharp",
};
const combined = { ...family, ...cat, dog: "hate" };
console.log(combined);
//can also be used as follows
const xlist = [...[1, 2, 3, 4, 5]];
console.log(xlist);
//***********************************************************************************/
//rest Parameters , used when we dont know how many paramters are going to be passed but we requires all of them
function sumargs(...numbs) {
  return numbs.reduce((sum, num) => sum + num);
}
function prizes(gold, silver, ...losers) {
  console.log(`gold medal goes to ${gold}`);
  console.log(`silver medal goes to ${silver}`);
  console.log(`Losers are ${losers}`);
}
//*****************************************************************************************************/
//Destructuring arrays,a new way of unpacking arrays and then storing them in variables
randoms = [1, 7, 5, 3, 9, 8];
const [num1, num2, ...rest] = randoms;
//******************************************************************************************************* */
//Destructuring objects , rest is same as above
const objectexample1 = {
  UID: "20BCS3976",
  Firstname: "Dhruva",
  Lastname: "Malik",
  Phone: 9475023503,
};
const objectexample2 = {
  UID: "20BCS3976",
  Firstname: "Dhruva",
  Lastname: "Malik",
};

const { Firstname, Lastname, Phone = "Not available" } = objectexample1;
//if we want to change the name of the variable name , and not keep it as same as the object
//then we do as follows
//we can also add default values
const {
  Firstname: name,
  Lastname: surname,
  Phone: phonenumber = "Not available",
} = objectexample2;
//*************************************************************************** */
//Destructuring can also work on Parameters (which are objects)
//without destructing
const destructparams = movies.map((movie) => {
  return `${movie.name} has rating ${movie.rating}`;
});

//With Destructing
const destructparams2 = movies.map(({ name, rating }) => {
  return `${name} has rating ${rating}`;
});
