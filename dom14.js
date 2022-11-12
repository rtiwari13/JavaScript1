//document.createElement();
//append
//prepend
//remove
const newTodoItem = document.createElement("li");
const newTodoItemText  = document.createTextNode("Task 2");
const todoList = document.querySelector(".todo-list");
newTodoItem.append(newTodoItemText);
todoList.append(newTodoItem);