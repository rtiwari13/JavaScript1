//reduce 

const arr = [5,6,7,8];

//sum of all the numbers of arr

const add = arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},0)//initial value of accumulator
console.log(add);

const myyCart = [ 
    {prodId : 1, prodName:"commodity1",price:200},
    {prodId : 2,prodName:"commodity2",price:400},
     {prodId :3, prodName: "commodity3",price:300}
]
 
 const myCartVar = myyCart.reduce((totalPrice,currentProduct)=>{
    return  totalPrice+currentProduct.price; 
},0)

console.log(myCartVar);