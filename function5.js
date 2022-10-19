//function inside function
const  fun = () =>{
    console.log("this is a function");

    const addition = (n,m)=>{
        return n+m;
    }

     const val = addition(9,3);
     console.log(val);

}

fun();

//let and const are block scope
//var is function scope