//operators in js

//know the type of operators in js
let myAge = 19;
let str = "worstThings";
let alpha = 'S';

console.log (typeof myAge);
console.log(typeof str);
console.log(typeof alpha);

//convert number into string
myAge = myAge + " ";
console.log(myAge);
console.log(typeof myAge);

//convet string to number
let some = +"text";
console.log(some);

//another way
//number to string
let age = "18";
age = String(age);
console.log(typeof age);

let cell; //undefined type
console.log(typeof cell);

//null
let nvar = null;
console.log(typeof nvar);
 
console.log( typeof null); //this will output null which is a bug in js but js is not fixing if cause it will lead to chaange in whole js functionality
 
//BigInt
console.log(Number.MAX_SAFE_INTEGER);//max limit to store any number safely

let num= BigInt(45111521154638795321454222222221456.1456624);
console.log(num);
//another way
let num1= 156n;
console.log(num1);
console.log(num+num1);
// can't mix bigint with some other data types
// this will give error