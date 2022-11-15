//static list vs live list
const listItems = document.querySelectorAll(".todo-list li");
const sixthli  =    document.createElement("li");
sixthli.textContent = "Task 6";
const ul = document.querySelector(".todo-list")
ul.append(sixthli)
console.log(listItems);
//querySelectorAll gives static list
//getElementBySomething gives live list