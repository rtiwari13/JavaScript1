//important array methods
//forEach

const arr = [1,6,8,90,4,3];

function sum(numb , index){
    console.log(`index is ${index} number is ${numb}`);
}

arr.forEach(sum);

arr.forEach(function(nom,i){
    console.log(`index = ${i} and number =${nom}`);
});

//multiply numbers by 2

arr.forEach(function(a){
    console.log(a*3);
})