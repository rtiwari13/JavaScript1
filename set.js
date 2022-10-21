//Sets 
//sets are iterable
//store data
//sets also have their own methods
//no index based access
//unique items only (no  duplicates)
//order is not guaranteed


//syntax
const numb =  new Set([1,4,7]);
console.log(numb); 

const number = new Set();
number.add(3);
number.add(9);
if(number.has(3)){
    console.log("3 is present")
};//check the presence of an element
console.log(number);

//find the unique elements of array
const arr = [1,5,5,6,7,7,9,9];
const uniqElement = new Set(arr);
console.log(uniqElement);//unique elements
let length = 0;
for (let element of uniqElement ){
    length++;
} 
console.log(length);//length of set

