//function to return the first character of string

function returnChar(userString){
    return userString[0];

}

console.log(returnChar("xyz"));
console.log(returnChar("My"));

//retun the index of target element
function findTarget(arr,target){
    for(let i =0; i<arr.length;i++){
             if(arr[i]===target){
                return i;
             }
    }
    return -1;
}

const myArr = [4,5,9,8,2,3];
 const variab =findTarget (myArr,9);
console.log(variab);

 const variab1=findTarget (myArr,8);
console.log(variab1);