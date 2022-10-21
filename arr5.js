//sort

const numbers = [3,6,7,8,2,5,6,100,457,900];// js will sort this as a string and produce unexpected result

 numbers.sort();
console.log(numbers);

const user = ['abc','xyz','njhy']//sorted in alphabetical order
//capital alphabets will be soretd first
user.sort();
console.log(user);//expected result 

const nomb = [89,87,3,2];
nomb.sort((a,b)=>a-b);
nomb.sort();
console.log(nomb);