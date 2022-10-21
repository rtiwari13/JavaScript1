//map

//syntax
const person = new Map();
person.set('fname','abc');
person.set('age',5);
console.log(person);

//accessing the keys of map
console.log(person.get('age'));

//all keys
console.log(person.keys());

//loop
for(let key of person.keys()){
    console.log(key,typeof key);
}
