function fun1(){
    let iter = 0;
    return function(){
        if(iter<1){
            console.log("first time call");
            iter++;
        }else {
            console.log("already called");
        }
         
        
    }
}

const var1 = fun1();
var1();
var1();
