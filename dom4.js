//change text
//textContent Property
const mainHead = document.getElementById("main-heading");
console.log(mainHead.textContent); 

mainHead.textContent = "Today is opportunity!";
console.log(mainHead.textContent);
//text content gives whole content whether it is visible on web page or not

//innerText property
//it will give only visible content
console.log(mainHead.innerText);