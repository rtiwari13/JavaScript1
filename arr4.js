//reduce 

const arr = [5,6,7,8];

//sum of all the numbers of arr

const add = arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0)//initial value
console.log(add);