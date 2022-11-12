//add and remove class
const sectionTodo  = document.querySelector(".section-todo");
sectionTodo.classList.add('bg-dark');

//sectionTodo.classList.remove("container");
//to check the existence of a class
const ans = sectionTodo.classList.contains("block"); //todo
console.log(ans);