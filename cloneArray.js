// clone array

let arry1 = ["first","second","third"];

let arry2 = arry1.slice(0);// method one

let arry3 = [].concat(arry1); //method two

// method three using spread operator
// new way

let arry8 = [...arry1];

console.log(arry2);

console.log(arry3);

console.log(arry8);

//concat new elements in array
let arrayNew = arry1.slice(0).concat(["vdgdb","bdfsgv","gdcsdfhdu"])
console.log(arrayNew); 

let spreadArray = [...arry1,"one","more","add","any","number","of","elements"];
console.log(spreadArray);

let newArray = [...arry1, ...arrayNew]
console.log(newArray)