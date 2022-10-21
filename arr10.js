//splice method
//start,delete,insert

const arr = ["abx","hjy","dfrt","lhfdg","gftd","okdlf"];
//delete
arr.splice(1,2);
console.log(arr);

//insert
const arr1 = ["abx","hjy","dfrt","lhfdg","gftd","okdlf"];
arr1.splice(1,0,'inserted');
console.log(arr1);

//insert and delete
const arr2 = ["abx","hjy","dfrt","lhfdg","gftd","okdlf"];
const deletedItem=arr2.splice(1,3,'inserted1','inserted2')
console.log("deletd",deletedItem);
console.log(deletedItem)
console.log(arr2)