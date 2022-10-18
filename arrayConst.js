//using const keyword for array creation
//it is recommended to use const for declaring arrays
//we can perfeorm all operations but cant modify the array after using const keyword

const numbers = [1,3,2,4,6,89,0,43,32]
console.log(numbers);

numbers.pop();
console.log(numbers);
numbers.pop();
console.log(numbers);

numbers.push(11);
console.log(numbers);
