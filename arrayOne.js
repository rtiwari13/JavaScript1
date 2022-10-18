//reference type
//arrays are mutable

let numbers =[1,2,3,4,5];
console.log(numbers);

//changing the elemnts

numbers[1] = 9;
console.log(numbers);

//all reference type are object in javascript
console.log(typeof numbers); //object

// to check anything is array or not
console.log(Array.isArray(numbers)); //true


//push
numbers.push(12);
console.log(numbers);

//pop
 let lastNo=numbers.pop();
console.log(numbers);
console.log("popped number is",lastNo);

//unshift 
//add elemnts at beginning
numbers.unshift(23);
numbers.unshift(24);
console.log(numbers);

//shift
 let removedNo=numbers.shift();
console.log(numbers);
console.log("removed number is ", removedNo);
//push and pop are faster than shift and unshift