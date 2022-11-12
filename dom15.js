//clone nodes;
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Task ";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);