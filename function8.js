// callback function

function fun1(name){
    console.log("main function");
    console.log(`your name is ${name}`);
}

 function fun2(callback){
      callback();
      callback("abc");
 }

 fun2(fun1);