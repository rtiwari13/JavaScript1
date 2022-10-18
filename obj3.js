//how to iterate objects
const player = {
    name : "xyz",
    age:19,
   "list of games": ["a","b","c"]
}

// for in loop
 for(let key in player){
    console.log(`${key} :${player[key]}`);
 }

 console.log(Object.keys(player));
 console.log(typeof(Object.keys(player)))