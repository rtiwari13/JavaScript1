//spread operator in objects

const newObject1={
    key1 : "val1",
    key2 : "val2",
    key3:"val3"

};
const newObject2={
    key5 : "val5",
    key6 : "val6"
}

const newObject = {...newObject1};
console.log(newObject)
const spreadObj ={..."abcdefghijklmnopqrstuvwxyz"}
console.log(spreadObj)