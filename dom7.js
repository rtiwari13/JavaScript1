//get muitiple elements using getElements by class name
//get multiple elements using  querySelector
const navItems = document.getElementsByClassName("nav-items"); // html element
console.log(navItems); //array like object but not an array
console.log(navItems[0]);

const nfjg = document.querySelectorAll(".nav-items"); //return   a nodelist
console.log(nfjg);