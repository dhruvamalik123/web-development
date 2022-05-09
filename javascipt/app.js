// console.log("hello everyone");
// console.log(1 + 2 + 3);
// console.log("Bye Bye");
// const babayaga = prompt("Enter a number");
// if (babayaga == 1) {
//   console.log("You entered 1");
// } else if (babayaga == 2) {
//   console.log("You entered 2");
// } else {
//   console.log("You entered something else");
// }
// console.log(1);
// console.log(2);
// console.log(3);
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }
// for (j = 0; j < 10; j++) {
//   console.log(j + 1);
// }
{
  const list = ["Dance"];
  let choice = "";
  while (choice != "quit") {
    choice = prompt("Enter your choice :: ");
    if (choice == "new") {
      list.push(prompt("Enter a new todo :: "));
    } else if (choice == "list") {
      console.log("Your ToDo List");
      for (let i = 1; i <= list.length; i++) {
        console.log(`#${i} ${list[i - 1]}`);
      }
    } else if (choice == "delete") {
      list.splice(prompt("Enter number of element you want to remove") - 1, 1);
    } else if (choice == "quit") {
      console.log("quitting!!");
      break;
    } else {
      console.log("Wrong choice entered !!");
    }
  }
}
