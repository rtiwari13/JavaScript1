//every method
const numb = [1,2,4,5,8];

const result = numb.every((n)=>n%2===0);
//every will return true or false
console.log(result); //false

const m=[2,6,8,10,12];
const result2 = m.every((p)=>p%2==0)
 console.log(result2)//false

 const myCart =[
    {productId:6, prodName:"commodity1",price:9000},
    {productId:7, prodName:"commodity2",price:34444},
    {productId:9,prodName:"commodity3",price:8944},
    {productId:2,prodName:"commodity4",price:6794},
 ]

 const cart = myCart.every((cartItem)=>cartItem.price < 40000)
 console.log(cart)//true