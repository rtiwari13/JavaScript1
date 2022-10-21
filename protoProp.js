const obj1={
    key1:"abc",
    key2:"pyq"
}

const obj2 = Object.create (obj1);
obj2.key3 = "mno";
console.log(obj2);

console.log(obj2.__proto__);//if obj2 will not find key1 in obj2 then it will take it  from obj2