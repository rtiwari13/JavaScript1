// change HTML collection into array
let  navItems =  document.getElementsByTagName("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));